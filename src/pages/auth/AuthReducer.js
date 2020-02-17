const INITIAL_STATE = {
  user: null,
  token: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case 'LOGIN':
      return {...state, loading: true};

    case 'LOGIN_SUCCESS':
      return {...state, loading: false, user: action.payload};

    case 'LOGIN_FAILED':
      return {...state, loading: false};

    default:
      return state;
  }
};
