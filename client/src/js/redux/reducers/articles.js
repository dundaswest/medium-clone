const articles = (state = 0, action) => {
  switch (action.type) {
    case 'CLAP_ARTICLE':
      return state + 1;
    default:
      return state;
  }
};

export default articles;
