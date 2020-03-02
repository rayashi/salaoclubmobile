const INITIAL_STATE = {
  user: null,
  token: null,
  loading: false,
  initialLoading: true,
  error: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {...state, loading: true};

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        user: action.payload,
        initialLoading: false,
      };

    case 'LOGIN_FAILED':
      return {...state, loading: false, error: true};

    case 'INITIAL_LOAD_FAILED':
      return {...state, loading: false, initialLoading: false};

    case 'LOGOUT_SUCCESS':
      return INITIAL_STATE;

    default:
      return state;
  }
};
