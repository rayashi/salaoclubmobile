const INITIAL_STATE = {
  services: [],
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_SERVICES':
      return {...state, loading: true};

    case 'GET_SERVICES_SUCCESS':
      return {...state, loading: false, services: action.payload};

    case 'GET_SERVICES_FAILUED':
      return {...state, loading: false};

    default:
      return state;
  }
};
