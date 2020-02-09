export const getServices = storeId => ({
  type: 'GET_SERVICES',
  payload: storeId,
});

export const getServicesSuccess = stores => ({
  type: 'GET_SERVICES_SUCCESS',
  payload: stores,
});

export const getServicesFailed = () => ({type: 'GET_SERVICES_FAILED'});
