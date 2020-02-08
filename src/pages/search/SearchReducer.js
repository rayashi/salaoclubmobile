const INITIAL_STATE = {
  stores: [],
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_STORES':
      return {...state, loading: true};

    case 'GET_STORES_SUCCESS':
      return {...state, loading: false, stores: action.payload};

    case 'GET_STORES_FAILUED':
      return {...state, loading: false};

    default:
      return state;
  }
};
