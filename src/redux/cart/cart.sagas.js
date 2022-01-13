import {all, call, takeLatest, put} from 'redux-saga/effects';
//sagas listen to actions
import UserActionTypes from '../user/user.types';

import { clearCart } from './cart.actions';

export function* clearCartOnSignOut() {
    yield put(clearCart()); //call clearCart action
};

//listen to sign out action, execute clearCartOnSignOut
export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas() {
    yield(all([call(onSignOutSuccess)]));
}