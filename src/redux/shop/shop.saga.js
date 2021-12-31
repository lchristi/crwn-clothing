import { takeEvery, call, put, takeLatest } from 'redux-saga/effects'; //takeEvery is a listener
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions';
import ShopActionTypes from './shop.type';



export function* fetchCollectionsStartAsync(){
    try {
        const collectionRef = firestore.collection('collections');    
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap)); //put in saga is similar to dispatch in thunk
    } catch (error) {
        yield fetchCollectionsFailure(error.message);
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsStartAsync); 
    //takeEvery - creates a non-blocking call 
    //takeLatest - returns the last executed call
}

