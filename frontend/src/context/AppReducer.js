const AppReducer = (state, action) => {
  switch (action.type) {
    case "FULL_SEARCH":
      return {
        ...state,
        employees: action.payload,
        quick: false,
      };
    case "QUICK_SEARCH":
      return {
        ...state,
        employees: action.payload,
        quick: true,
      };
    case "SEARCH_STR":
      return {
        ...state,
        searchStr: action.payload,
      };
    default:
      return state;
  }
};

export default AppReducer;
