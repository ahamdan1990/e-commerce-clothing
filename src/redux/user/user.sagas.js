import {takeLatest,put, all, call} from 'redux-saga/effects';
import UserActionTypes from './user.types';

import {signInSuccess,signInFailure, signOutFailure, signOutSuccess, signUpFailure, signUpSuccess} from './user.actions';

import {googleProvider,auth,createUserProfileDocument,getCurrentUser} from '../../firebase/firebase.utils';
// import { clearCart } from '../cart/cart.actions';

export function* getSnapshotFromUserAuth(userAuth,additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument,userAuth,additionalData);
        
        const userSnapshot = yield userRef.get();
    
        const userData = {
            id:userSnapshot.id,
            ...userSnapshot.data()
        }
    
        yield put(signInSuccess(userData))
    }
    catch(e) {
        yield put(signInFailure(e));
    }

}

export function* signInWithGoogle() {
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);

        yield getSnapshotFromUserAuth(user);
    }
    catch(e) {
        yield put(signInFailure(e));
    }
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle)
}

export function* signInWithEmail({payload:{email,password}}) {
    try {
        const {user} = yield auth.signInWithEmailAndPassword(email,password);
        
        yield getSnapshotFromUserAuth(user);

    }
    catch(e) {
        yield put(signInFailure(e));
    }

}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail)
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        // console.log(userAuth);
        if (!userAuth) return;

        yield getSnapshotFromUserAuth(userAuth)
    }
    catch(error) {
        yield put(signInFailure(error));
    }
}

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}

export function* signOutUser() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
        // yield put(clearCart());
    }
    catch(error) {
        yield put(signOutFailure(error))
    }
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START,signOutUser)
}

export function* signInAfterSignUp({payload:{user,additionalData}}) {
    yield getSnapshotFromUserAuth(user,additionalData);
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* signUpUser({payload:{displayName,email,password}}) {
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email,password);
        yield put(signUpSuccess({user,additionalData:{displayName}}))
        // yield getSnapshotFromUserAuth(user,{displayName});
    }
    catch(error) {
        yield put(signUpFailure(error));
    }
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START,signUpUser)
}

export function* userSagas() {
    yield all(
        [
            call(onGoogleSignInStart),
            call(onEmailSignInStart),
            call(onCheckUserSession),
            call(onSignOutStart),
            call(onSignUpStart),
            call(onSignUpSuccess)
        ]
    );
}