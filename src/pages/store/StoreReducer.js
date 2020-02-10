const INITIAL_STATE = {
  services: [],
  professionals: [],
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_STORE_INFO':
      return {...state, loading: true, services: INITIAL_STATE.services};

    case 'GET_STORE_INFO_SUCCESS':
      return {
        ...state,
        loading: false,
        services: action.payload.services,
        professionals: action.payload.professionals,
      };

    case 'GET_STORE_INFO_FAILUED':
      return {...state, loading: false};

    default:
      return state;
  }
};
