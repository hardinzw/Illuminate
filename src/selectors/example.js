const getReadableExample = ({ state }) =>
  state.example;

const getFetchError = ({ state }) =>
  state.error;

export {
  getReadableExample,
  getFetchError,
};