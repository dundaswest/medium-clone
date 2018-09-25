const login = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state, { loggedIn: !state.loggedIn });
    default:
      return state;
  }
};

export default login;
