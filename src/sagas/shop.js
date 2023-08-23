import { takeLatest, all, put, fork, call } from "redux-saga/effects";
import * as types from "../constants/shop";
import firebaseDb from "../firebase";
import { projectFireStore } from "../firebase";
import {
  getShopsSuccess,
  getShopsFail,
  deleteShopSuccess,
  deleteShopFail,
  addShopSuccess,
  addShopFail,
  editShopSuccess,
  editShopFail,
} from "../actions/shop";
import { fetchShop, insertRecord, updateRecord, deleteRecord } from "../helpers/network"

export function* onLoadShopAsync() {
  try {
    //const { shops } = yield call(fetchShop);
    //console.log('shops :: ', shops)

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
yield put(getShopsSuccess(data));
    // if (shops !== null) {
    //   yield put(getShopsSuccess(shops));
    // } else {
    //   yield put(getShopsSuccess({}));
    // }
  } catch (error) {
    yield put(getShopsFail());
  }
}

export function* onDeleteShopAsync({ payload: id }) {
  try {

    const { data} = yield call(deleteRecord(id));
    yield put(deleteShopSuccess());
  } catch (error) {
    yield put(deleteShopFail());
  }
}

export function* onAddShopAsync({ payload: shop }) {
  try {
    const { data } = yield call(insertRecord(shop));
    yield put(addShopSuccess());
  } catch (error) {
    yield put(addShopFail());
  }
}

export function* onEditShopAsync({
  payload: { id, initialState: shop }
}) {
  try {
    const { data } = yield call(updateRecord(shop));
    yield put(editShopSuccess());
  } catch (error) {
    yield put(editShopFail());
  }
}

function* sagas() {
  yield takeLatest(types.REQUEST_FETCH_SHOPS, onLoadShopAsync);
  yield takeLatest(types.REQUEST_DELETE_SHOP, onDeleteShopAsync);
  yield takeLatest(types.REQUEST_ADD_SHOP, onAddShopAsync);
  yield takeLatest(types.REQUEST_EDIT_SHOP, onEditShopAsync);
}

export default sagas

