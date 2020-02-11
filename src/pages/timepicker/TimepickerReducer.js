const INITIAL_STATE = {
  times: [],
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_AVAILABLE_TIMES':
      return {...state, loading: true};

    case 'GET_AVAILABLE_TIMES_SUCCESS':
      return {...state, loading: false, times: action.payload};

    case 'GET_AVAILABLE_TIMES_FAILUED':
      return {...state, loading: false};

    default:
      return state;
  }
};
