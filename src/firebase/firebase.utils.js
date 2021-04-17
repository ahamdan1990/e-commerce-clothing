import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config ={
    apiKey: "AIzaSyCi-_JiSp7F6ZjgIs7tj0V4iIcv-LJ_Lqc",
    authDomain: "crwn-db-45f8a.firebaseapp.com",
    projectId: "crwn-db-45f8a",
    storageBucket: "crwn-db-45f8a.appspot.com",
    messagingSenderId: "215365354774",
    appId: "1:215365354774:web:751a5b74f3ee8659ccbc37",
    measurementId: "G-84HJJEKNDN"
};

export const createUserProfileDocument = async (userAuth,additionalData) => {
    if (!userAuth) return;

    // IF we have a userAuth

    //First we check the docRef
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();
    
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(e) {
            console.log("Error creating user", e.message)
        }
    };

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google Authentication utility

//Here we define what app will be the provider to our app here we define Google but there's also githubProvider facebookProvider...
const provider = new firebase.auth.GoogleAuthProvider();
//Custom parameter for the provider 
provider.setCustomParameters({
    prompt: "select_account"
});



export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

