//step 1 import from redux-saga effects:
import { useLinkClickHandler } from 'react-router-dom';
import {takeLatest, put, all, call} from 'redux-saga/effects';
import { auth, createUserProfileDocument, getCurrentUser, googleProvider } from '../../firebase/firebase.utils';
import { googleSignInFailure, googleSignInSuccess, emailSignInSuccess, emailSignInFailure } from './user.actions';
import UserActionType from './user.types';

//step 3
export function* signinWithGoogle(){
    try {
        const {user} = yield auth.signInWithPopup(googleProvider);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(
            googleSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()})
        );
    } catch (error) {
        yield put(googleSignInFailure(error));
    }
}


//step 2 generator function
export function* onGoogleSignInStart(){
    yield takeLatest(UserActionType.GOOGLE_SIGN_IN_START, signinWithGoogle);
}

export function* signInWithEmail({payload: {email, password} }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument, user);
        const userSnapshot = yield userRef.get();
        yield put(
            emailSignInSuccess({id: userSnapshot.id, ...userSnapshot.data()})
        );
    } catch (error) {
        put(emailSignInFailure(error))
    }
}
export function* onEmailSignInStart(){
    yield takeLatest(UserActionType.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if(!userAuth) return;
        
        const userRef = yield call(
            createUserProfileDocument,
            userAuth,
            null
          );
          const userSnapshot = yield userRef.get();
          yield put(emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));

    } catch (error) {
        yield put(emailSignInFailure)
    }
}

export function* onCheckUserSessions() {
    yield takeLatest(UserActionType.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
    yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(onCheckUserSessions)]);
}

