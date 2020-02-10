export const getStoreInfo = storeId => ({
  type: 'GET_STORE_INFO',
  payload: storeId,
});

export const getStoreInfoSuccess = info => ({
  type: 'GET_STORE_INFO_SUCCESS',
  payload: info,
});

export const getStoreInfoFailed = () => ({type: 'GET_STORE_INFO_FAILED'});
