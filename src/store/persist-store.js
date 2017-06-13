import pick from 'lodash/pick';

export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('redux.state');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state, persistedKeys = []) => {
  try {
    const serializedState = JSON.stringify(pick(state, persistedKeys));
    sessionStorage.setItem('redux.state', serializedState);
  } catch (ignored) {
    // ignore write errors
  }
};
