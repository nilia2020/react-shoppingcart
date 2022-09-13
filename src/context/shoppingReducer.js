import { TYPES } from "./actions";

export const shoppingInitialState = {
  products: [],
  cart: [],
};

export function shoppingReducer(state, action) {
  switch (action.type) {
    case TYPES.READ_STATE: {
      return {
        ...state,
        products: action.payload[0],
        cart: action.payload[1],
      };
    }

    case TYPES.ADD_TO_CART: {
      let newItem = state.products.find(
        (product) => product.name === action.payload
      );
      let itemInCart = state.cart.find((item) => item.name === newItem.name);

      return itemInCart
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.name === newItem.name
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          }
        : {
            ...state,
            cart: [...state.cart, { ...newItem, quantity: 1 }],
          };
    }
    case TYPES.REMOVE_ONE_PRODUCT: {
      console.log(action.payload[1]);
      console.log(action.payload[0]);
      console.log(state.cart[0].quantity);
      console.log(state.cart);

      return action.payload[1] > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.id === action.payload[0]
                ? { ...item, quantity: item.quantity }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload[0]),
          };
    }
    case TYPES.REMOVE_ALL_PRODUCTS: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    }
    case TYPES.CLEAR_CART: {
      return {
        ...state,
        cart: [],
      };
    }
    default:
      return state;
  }
}
