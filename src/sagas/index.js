import {all, fork} from 'redux-saga/effects'
import contactSagas from './contact'
import shopSagas from './shop'
import userSagas from './user'
export default function* rootSaga() {
    yield all([
      fork(contactSagas), 
      fork(shopSagas),
      fork(userSagas)
    ]);
  }