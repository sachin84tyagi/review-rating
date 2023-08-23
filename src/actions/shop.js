import * as types from "../constants/shop";

export const requestShops = () => ({
  type: types.REQUEST_FETCH_SHOPS
});

export const getShopsSuccess = (shops) => ({
  type: types.SUCCESS_FETCH_SHOPS,
  payload: shops,
});

export const getShopsFail = (error) => ({
  type: types.FAIL_FETCH_SHOPS,
  payload: error,
});

export const requestDeleteShop = (id) => ({
  type: types.REQUEST_DELETE_SHOP,
  payload: id,
});

export const deleteShopSuccess = () => ({
  type: types.SUCCESS_DELETE_SHOP,
});

export const deleteShopFail = (error) => ({
  type: types.FAIL_DELETE_SHOP,
  payload: error,
});

export const requestAddShop = (shop) => ({
  type: types.REQUEST_ADD_SHOP,
  payload: shop,
});

export const addShopSuccess = () => ({
  type: types.SUCCESS_ADD_SHOP,
});

export const addShopFail = (error) => ({
  type: types.FAIL_ADD_SHOP,
  payload: error,
});

export const requestEditShop = (shopDetail) => ({
  type: types.REQUEST_EDIT_SHOP,
  payload: shopDetail,
});

export const editShopSuccess = () => ({
  type: types.SUCCESS_EDIT_SHOP,
});

export const editShopFail = (error) => ({
  type: types.FAIL_EDIT_SHOP,
  payload: error,
});
