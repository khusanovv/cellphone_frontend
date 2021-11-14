const categoryReducer = (
  state = {
    id: 0,
    title: "All products",
    route: "allproducts",
  },
  action
) => {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      return action.payload;
    default:
      return state;
  }
};

export default categoryReducer;
