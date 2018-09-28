const logout = (state = false, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return Object.assign({}, state, { loggedIn: false });
    default:
      return state;
  }
};

export default logout;
