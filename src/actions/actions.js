import * as types from "../constants/actionTypes";

export const requestContacts = () => ({
  type: types.REQUEST_FETCH_CONTACTS,
});

export const getContactsSuccess = (contacts) => ({
  type: types.SUCCESS_FETCH_CONTACTS,
  payload: contacts,
});

export const getContactsFail = (error) => ({
  type: types.FAIL_FETCH_CONTACTS,
  payload: error,
});

export const requestDeleteContact = (id) => ({
  type: types.REQUEST_DELETE_CONTACT,
  payload: id,
});

export const deleteContactSuccess = () => ({
  type: types.SUCCESS_DELETE_CONTACT,
});

export const deleteContactFail = (error) => ({
  type: types.FAIL_DELETE_CONTACT,
  payload: error,
});

export const requestAddContact = (contact) => ({
  type: types.REQUEST_ADD_CONTACT,
  payload: contact,
});

export const addContactSuccess = () => ({
  type: types.SUCCESS_ADD_CONTACT,
});

export const addContactFail = (error) => ({
  type: types.FAIL_ADD_CONTACT,
  payload: error,
});

export const requestEditContact = (contactDetail) => ({
  type: types.REQUEST_EDIT_CONTACT,
  payload: contactDetail,
});

export const editContactSuccess = () => ({
  type: types.SUCCESS_EDIT_CONTACT,
});

export const editContactFail = (error) => ({
  type: types.FAIL_EDIT_CONTACT,
  payload: error,
});
