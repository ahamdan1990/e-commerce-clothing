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
    // const collectionRef = firestore.collection('users');

    
    const snapShot = await userRef.get();
    // const collectionSnapShot = await collectionRef.get();
    // console.log({collection: collectionSnapShot.docs.map(doc=>doc.data())});
    
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

export const addCollectionAndDocuments = async (collectionKey,objectsToAdd) => {

    //we're creating a collection key that we'll add into it the docs that we want
    const collectionRef = firestore.collection(collectionKey);
    
    // we'll fire it after we make sure that all our objects are set before set them into the firestore
    const batch = firestore.batch();
    
    objectsToAdd.forEach(obj => {
        //it will make a new document refenrence object with creating a random key from firestore
        const newDocRef = collectionRef.doc();
        //we're just looping into the array and batching these docs together along with the objects included inside the array
        batch.set(newDocRef,obj);
    });

    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
    const transformedCollection = collectionsSnapshot.docs.map(doc=> {
        const {title,items} = doc.data();
        return {
            routeName : encodeURI(title.toLowerCase()),
            id:doc.id,
            title,
            items
        }
    });
    return transformedCollection.reduce((accumulator,collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    } , {})
}

export const convertDirectoryCollectionSnapshotToMap = (directoryCollectionSnapshot) => {
    const transformedCollection = directoryCollectionSnapshot.docs.map(doc => {
        const {title,imageUrl} = doc.data();
        return {
            id:doc.id,
            linkUrl: encodeURI(`shop/${title.toLowerCase()}`),
            imageUrl,
            title
        }
    });

    return transformedCollection;
}

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}else {
    firebase.app(); // if already initialized, use that one
}

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

