import * as types from "../constants/shop";

const initialState = {
  shops: {},
  error: null,
  isFetching: false,
  isFailure: false
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REQUEST_FETCH_SHOPS:
    case types.REQUEST_DELETE_SHOP:
    case types.REQUEST_ADD_SHOP:
    case types.REQUEST_EDIT_SHOP:
      return {
        ...state,
        isFetching: true,
        isFailure: false
      };

    case types.SUCCESS_FETCH_SHOPS:
      return {
        ...state,
        shops: action.payload,
        isFetching: false,
        isFailure: false
      };
    case types.SUCCESS_DELETE_SHOP:
    case types.SUCCESS_ADD_SHOP:
    case types.SUCCESS_EDIT_SHOP:
      return {
        ...state,
        isFetching: false,
        isFailure: false
      };
    case types.FAIL_FETCH_SHOPS:
    case types.FAIL_DELETE_SHOP:
    case types.FAIL_ADD_SHOP:
    case types.FAIL_EDIT_SHOP:
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

export default shopReducer;
