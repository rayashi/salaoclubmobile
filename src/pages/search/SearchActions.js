export const getStores = () => (
  { type: 'GET_STORES' }
);

export const getStoresSuccess = stores => (
  { type: 'GET_STORES_SUCCESS', payload: stores }
);

export const getStoresFailed = () => (
  { type: 'GET_STORES_FAILED' }
);