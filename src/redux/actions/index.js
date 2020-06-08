export const changeText = (payload) => ({
  payload,
  type: 'CHANGE_TEXT',
});

export const setError = (payload) => ({
  payload,
  type: 'SET_ERROR',
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
