const TMRZ_STATE = "TMRZ_STATE";

// Load state
export const loadState = () => {
  try {
    // Grab the state from local storage
    const serializedState = localStorage.getItem(TMRZ_STATE);
    if (serializedState === null) {
      return undefined;
    }
    // Parse the string into JSON for the Redux store
    return JSON.parse(serializedState);
  } catch(err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    // convert the state from JSON into a string
    const serializeState = JSON.stringify(state);
    // save the state to local storage
    localStorage.setItem(TMRZ_STATE, serializeState);
  } catch (error) {
    console.log("Error saving data to local storage")
  }
};
