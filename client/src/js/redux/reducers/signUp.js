const signUp = (state = {}, action) => {
  switch (action.type) {
    case 'SIGNUp':
      return Object.assign({}, state, { name: action.name, password: action.password });
    default:
      return state;
  }
};

export default signUp;
