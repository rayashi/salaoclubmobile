export const login = ({email, password}) => ({
  type: 'LOGIN',
  payload: {email, password},
});

export const loginSuccess = stores => ({
  type: 'LOGIN_SUCCESS',
  payload: stores,
});

export const loginFailed = () => ({type: 'LOGIN_FAILED'});
