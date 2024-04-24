export const cartAddItem = "cart/addItem";
export const cartRemoveItem = "cart/removeItem";
export const increaseCartItem = "cart/increaseCartItem";
export const decreaseCartItem = "cart/decreaseCartItem";

function cartReducer(state = [], action) {
  switch (action.type) {
    case cartAddItem:
      return [...state, action.payload];
    case cartRemoveItem:
      return state.filter(
        (cartItem) => cartItem.productId !== action.payload.productId
      );
    case increaseCartItem:
      return state.map((cartItem) => {
        if (cartItem.productId === action.payload.productId) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
    case decreaseCartItem:
      return state.map((cartItem) => {
        if (cartItem.productId === action.payload.productId) {
          return { ...cartItem, quantity: cartItem.quantity - 1 };
        }
        return cartItem;
      })

    default:
      return state;
  }
}

export default cartReducer;
