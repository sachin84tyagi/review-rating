import * as types from "../constants/actionTypes";

const initialState = {
  contacts: {},
  error: null,
  isFetching: false,
  isFailure: false
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_FETCH_CONTACTS:
    case types.REQUEST_DELETE_CONTACT:
    case types.REQUEST_ADD_CONTACT:
    case types.REQUEST_EDIT_CONTACT:
      return {
        ...state,
        isFetching: true,
        isFailure: false
      };

    case types.SUCCESS_FETCH_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        isFetching: false,
        isFailure: false
      };
    case types.SUCCESS_DELETE_CONTACT:
    case types.SUCCESS_ADD_CONTACT:
    case types.SUCCESS_EDIT_CONTACT:
      return {
        ...state,
        isFetching: false,
        isFailure: false
      };
    case types.FAIL_FETCH_CONTACTS:
    case types.FAIL_DELETE_CONTACT:
    case types.FAIL_ADD_CONTACT:
    case types.FAIL_EDIT_CONTACT:
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

export default contactReducer;
