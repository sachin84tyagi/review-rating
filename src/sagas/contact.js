import { takeLatest, all, put, fork, call } from "redux-saga/effects";
import * as types from "../constants/actionTypes";
import firebaseDb from "../firebase";
import {
  getContactsSuccess,
  getContactsFail,
  deleteContactSuccess,
  deleteContactFail,
  addContactSuccess,
  addContactFail,
  editContactSuccess,
  editContactFail,
} from "../actions/actions";
import { fetchRecord, insertRecord, updateRecord, deleteRecord } from "../helpers/network"

export function* onLoadContactAsync() {
  try {
    // const contacts = yield new Promise((resolve) =>
    //   firebaseDb.child("contacts").on("value", resolve)
    // );
    const { data} = yield call(fetchRecord);
    console.log('data :: ', data)
    //http://localhost:8080/contacts
    if (data.contacts !== null) {
      yield put(getContactsSuccess(data.contacts));
    } else {
      yield put(getContactsSuccess({}));
    }
  } catch (error) {
    yield put(getContactsFail());
  }
}

export function* onDeleteContactAsync({ payload: id }) {
  try {
    //yield firebaseDb.child(`contacts/${id}`).remove();
    const { data} = yield call(deleteRecord(id));
    yield put(deleteContactSuccess());
  } catch (error) {
    yield put(deleteContactFail());
  }
}

export function* onAddContactAsync({ payload: contact }) {
  try {
    //yield firebaseDb.child("contacts").push(contact);
    const { data } = yield call(insertRecord(contact));
    yield put(addContactSuccess());
  } catch (error) {
    yield put(addContactFail());
  }
}

export function* onEditContactAsync({
  payload: { id, initialState: contact }
}) {
  try {
    const { data } = yield call(updateRecord(contact));
    //yield firebaseDb.child(`contacts/${id}`).set(contact);
    yield put(editContactSuccess());
  } catch (error) {
    yield put(editContactFail());
  }
}

// export function* onLoadContacts() {
//   yield takeLatest(types.GET_CONTACTS_START, onLoadContactAsync);
// }

// export function* onDeleteContact() {
//   yield takeLatest(types.DELETE_CONTACT_START, onDeleteContactAsync);
// }

// export function* onAddContact() {
//   yield takeLatest(types.ADD_CONTACT_START, onAddContactAsync);
// }

// export function* onEditContact() {
//   yield takeLatest(types.EDIT_CONTACT_START, onEditContactAsync);
// }

function* sagas() {
  yield takeLatest(types.REQUEST_FETCH_CONTACTS, onLoadContactAsync);
  yield takeLatest(types.REQUEST_DELETE_CONTACT, onDeleteContactAsync);
  yield takeLatest(types.REQUEST_ADD_CONTACT, onAddContactAsync);
  yield takeLatest(types.REQUEST_EDIT_CONTACT, onEditContactAsync);
}

// const contactSagas = [
//   fork(onLoadContacts),
//   fork(onDeleteContact),
//   fork(onAddContact),
//   fork(onEditContact),
// ];
export default sagas

