export const userInitialState = {
  name: "",
  age: 0,
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.payload };
    case "CHANGE_AGE":
      return { ...state, age: action.payload };
    default:
      return state;
  }
};
