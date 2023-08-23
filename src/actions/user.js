import * as types from "../constants/user";

export const requestUsers = () => ({
  type: types.REQUEST_FETCH_USERS
});

export const getUsersSuccess = (users) => ({
  type: types.SUCCESS_FETCH_USERS,
  payload: users,
});

export const getUsersFail = (error) => ({
  type: types.FAIL_FETCH_USERS,
  payload: error,
});

export const requestDeleteUser = (id) => ({
  type: types.REQUEST_DELETE_USER,
  payload: id,
});

export const deleteUserSuccess = () => ({
  type: types.SUCCESS_DELETE_USER,
});

export const deleteUserFail = (error) => ({
  type: types.FAIL_DELETE_USER,
  payload: error,
});

export const requestAddUser = (user) => ({
  type: types.REQUEST_ADD_USER,
  payload: user,
});

export const addUserSuccess = () => ({
  type: types.SUCCESS_ADD_USER,
});

export const addUserFail = (error) => ({
  type: types.FAIL_ADD_USER,
  payload: error,
});

export const requestEditUser = (userDetail) => ({
  type: types.REQUEST_EDIT_USER,
  payload: userDetail,
});

export const editUserSuccess = () => ({
  type: types.SUCCESS_EDIT_USER,
});

export const editUserFail = (error) => ({
  type: types.FAIL_EDIT_USER,
  payload: error,
});

export const requestLoginUser = (user) => ({
  type: types.REQUEST_LOGIN_USER,
  payload: user,
});

export const loginUserSuccess = (user) => ({
  type: types.SUCCESS_LOGIN_USER,
  payload: user,
});

export const loginUserFail = (error) => ({
  type: types.FAIL_LOGIN_USER,
  payload: error,
});

export const requestLogoutUser = () => ({
  type: types.REQUEST_LOGOUT_USER
});

export const logoutUserSuccess = (user) => ({
  type: types.SUCCESS_LOGOUT_USER,
  payload: user,
});

export const logoutUserFail = (error) => ({
  type: types.FAIL_LOGOUT_USER,
  payload: error,
});
//
