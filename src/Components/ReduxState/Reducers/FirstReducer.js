const initailState = {
  allProducts: [],
  cart: [],
  selectedItem: {},
};
export const FirstReducer = (state = initailState, action) => {
  if (action.type === "ALL_PRODUCTS") {
    return { ...state, allProducts: action.data };
  }
  if (action.type === "ADD_TO_CART") {
    return { ...state, cart: [...state.cart, {...action.data, key: state.cart.length} ] };
  }
  if (action.type === "SELECTED_ITEM") {
    return { ...state, selectedItem: action.data };
  }
  if (action.type === "REMOVE_ITEM") {
    const filtered = state.cart.filter((item) => item.key !== action.data.key)
    return { ...state, cart: filtered };
  }
  return state;
};
