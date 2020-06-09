import { types } from '../actions';

const reducer = (state, action) => {
  switch (action.type) {
    case types.INSTANCE_SOCKET:
      return {
        ...state,
        instanceSocket: action.payload,
      };
    case types.END_SCRAPING:
      return {
        ...state,
        scraping: false,
      };
    case types.START_SCRAPING:
      return {
        ...state,
        scraping: true,
      };
    default:
      return state;
  }
};

export default reducer;
