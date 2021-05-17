  import { /*takeEvery ,*/call, put , takeLatest,all} from 'redux-saga/effects';
import { convertCollectionsSnapshotToMap, firestore } from '../../firebase/firebase.utils';

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
}

// call is used tot call a function instead of directly calling the function in a generator function 
// put is used to dispatch an action instead of using dispatch 

from './shop.actions';

import ShopActionTypes from './shop.types';

export function* fetchCollectionAsync() {

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        
        yield put(fetchCollectionsSuccess(collectionsMap));
    }
    catch(e) {
        put(fetchCollectionsFailure(e));
    }
}

// We're making a new generator function which will pause on each time we call the needed action
export function* fetchCollectionStart() {

    // Pausing the function when we have a call to the fetchCollecionsStart and passing another argument as a generator function that will run in response to the takeEvery listener

    yield takeLatest( ShopActionTypes.FETCH_COLLECTIONS_START , fetchCollectionAsync)
}

export function* shopSagas() {
    yield all(
        [
            call(fetchCollectionStart)
        ]
    )
}