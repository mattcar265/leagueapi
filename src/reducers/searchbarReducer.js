export const searchbarReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_PLAYER":
      return action.payload;
    case "CLICK_PLAYER":
      return action.payload;
    default:
      return state;
  }
};
