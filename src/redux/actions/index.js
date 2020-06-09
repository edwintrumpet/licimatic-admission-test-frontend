export const types = {
  INSTANCE_SOCKET: 'INSTANCE_SOCKET',
  END_SCRAPING: 'END_SCRAPING',
  START_SCRAPING: 'START_SCRAPING',
};

export const changeText = (payload) => ({
  payload,
  type: 'CHANGE_TEXT',
});

export const setError = (payload) => ({
  payload,
  type: 'SET_ERROR',
});

export const instanceSocket = (payload) => ({
  payload,
  type: types.INSTANCE_SOCKET,
});

export const endScraping = (payload) => ({
  payload,
  type: types.END_SCRAPING,
});

export const startScraping = (payload) => ({
  payload,
  type: types.START_SCRAPING,
});

export const fetchText = () => async (dispatch) => {
  try {
    const response = await fetch('https://govmatic-api-dev.herokuapp.com');
    const data = await response.json();
    return dispatch(changeText(data.message));
  } catch (err) {
    return dispatch(setError(err));
  }
};
