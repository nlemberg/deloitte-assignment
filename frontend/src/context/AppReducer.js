const AppReducer = (state, action) => {
  switch (action.type) {
    case "GET_ALL":
      return {
        ...state,
        employees: action.payload,
      };
    case "SET_RESULTS":
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
