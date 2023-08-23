import * as types from "../constants/user";

const initialState = {
  users: {},
  error: null,
  isFetching: false,
  isFailure: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_FETCH_USERS:
    case types.REQUEST_DELETE_USER:
    case types.REQUEST_ADD_USER:
    case types.REQUEST_EDIT_USER:
    case types.REQUEST_LOGIN_USER:
    case types.REQUEST_LOGOUT_USER: 
      return {
        ...state,
        isFetching: true,
        isFailure: false
      };
    case types.SUCCESS_FETCH_USERS:
    case types.SUCCESS_LOGIN_USER:
    case types.SUCCESS_LOGOUT_USER:
      return {
        ...state,
        users: action.payload,
        isFetching: false,
        isFailure: false
      };
    case types.SUCCESS_DELETE_USER:
    case types.SUCCESS_ADD_USER:
    case types.SUCCESS_EDIT_USER:
      return {
        ...state,
        isFetching: false,
        isFailure: false
      };
    case types.FAIL_FETCH_USERS:
    case types.FAIL_DELETE_USER:
    case types.FAIL_ADD_USER:
    case types.FAIL_EDIT_USER:
    case types.FAIL_LOGIN_USER:
    case types.FAIL_LOGOUT_USER:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
        isFailure: true
      };
    default:
      return state;
  }
};

export default userReducer;
