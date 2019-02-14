const clap_num = 0;

export const clap_article = () => ({
  type: 'CLAP_ARTICLE',
});

export const success = message => ({
  type: 'success',
  message,
});

export const error = message => ({
  type: 'error',
  message,
});

export const clear = () => ({
  type: 'clear',
});
export const login = () => ({
  type: 'LOGIN',
});
export const logout = () => ({
  type: 'LOGOUT',
});
export const signUp = (name, password) => ({
  type: 'SIGNUP',
  name,
  password,
});
