export const selectedMatchReducer = (state = [], action) => {
  switch (action.type) {
    case "SELECT_MATCH":
      return action.payload;
    default:
      return state;
  }
};
