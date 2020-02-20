export const login = ({email, password}) => ({
  type: 'LOGIN',
  payload: {email, password},
});

export const loginSuccess = stores => ({
  type: 'LOGIN_SUCCESS',
  payload: stores,
});

export const loginFailed = () => ({type: 'LOGIN_FAILED'});

export const startInitialLoad = () => ({type: 'START_INITIAL_LOAD'});

export const logout = () => ({type: 'LOGOUT'});

export const logoutSuccess = () => ({type: 'LOGOUT_SUCCESS'});
