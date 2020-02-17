const INITIAL_STATE = {
  token: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'LOGIN':
      return {...state, loading: true};

    case 'LOGIN_SUCCESS':
      return {...state, loading: false};

    case 'LOGIN_FAILED':
      return {...state, loading: false};

    default:
      return state;
  }
};
