import { takeLatest, all, put, fork, call } from "redux-saga/effects";
import * as types from "../constants/user";
import firebaseDb from "../firebase";
import { projectFireStore } from "../firebase";
import {
  getUsersSuccess,
  getUsersFail,
  deleteUserSuccess,
  deleteUserFail,
  addUserSuccess,
  addUserFail,
  editUserSuccess,
  editUserFail,
  loginUserSuccess,
  loginUserFail
} from "../actions/user";
import { fetchUser, checkValidUser, insertUser, updateUser, deleteUser } from "../helpers/network"

export function* onLoadUserAsync() {
  try {
    //const { users } = yield call(fetchUser);
    const data = yield projectFireStore.collection('shops').get().then(function (snapshot) {
      if (snapshot.empty) {
        console.log('No shop found')
      } else {
        let results = []
        // let data = {
        //   shops:[]
        // }
        snapshot.docs.forEach((doc) => {
          results.push({ id: doc.id, ...doc.data() })
        })
        return results
      }
    })
console.log('data :: ', data)
    if (data !== null) {
      yield put(getUsersSuccess(data));
    } else {
      yield put(getUsersSuccess({}));
    }
  } catch (error) {
    yield put(getUsersFail());
  }
}

export function* onDeleteUserAsync({ payload: id }) {
  try {
    const { data} = yield call(deleteUser(id));
    yield put(deleteUserSuccess());
  } catch (error) {
    yield put(deleteUserFail());
  }
}

export function* onAddUserAsync({ payload: user }) {
  try {
    const { data } = yield call(insertUser(user));
    yield put(addUserSuccess());
  } catch (error) {
    yield put(addUserFail());
  }
}

export function* onEditUserAsync({
  payload: { id, initialState: user }
}) {
  try {
    const { data } = yield call(updateUser(user));
    yield put(editUserSuccess());
  } catch (error) {
    yield put(editUserFail());
  }
}

export function* onLoginUserAsync({ payload: user }) {
  try {
    const data = yield call(checkValidUser, user);
    if (data.length > 0) {
        localStorage.setItem('user', JSON.stringify(data[0]));
        yield put(loginUserSuccess(data[0]));
    } else {
        yield put(loginUserFail("Invalid Credentials."));
    }
  } catch (error) {
    yield put(loginUserFail());
  }
}

function* sagas() {
  yield takeLatest(types.REQUEST_FETCH_USERS, onLoadUserAsync);
  yield takeLatest(types.REQUEST_DELETE_USER, onDeleteUserAsync);
  yield takeLatest(types.REQUEST_ADD_USER, onAddUserAsync);
  yield takeLatest(types.REQUEST_EDIT_USER, onEditUserAsync);
  yield takeLatest(types.REQUEST_LOGIN_USER, onLoginUserAsync);
}

export default sagas

