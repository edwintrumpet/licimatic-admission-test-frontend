const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        ...state,
        text: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
