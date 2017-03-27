export const ACTION_TYPES = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  REGISTER_REQUEST: 'REGISTER_REQUEST',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAILURE: 'REGISTER_FAILURE',
  LOGOUT: 'LOGOUT',
};

function login(credentials, navigation) {
  return {
    type: ACTION_TYPES.LOGIN_REQUEST,
    credentials,
    navigation: navigation,
  };
}

function logout() {
  return {
    type: ACTION_TYPES.LOGOUT,
  };
}

function register(params) {
  return {
    type: ACTION_TYPES.REGISTER_REQUEST,
    params,
  };
}

export const ACTIONS = {
  login,
  register,
  logout,
};
