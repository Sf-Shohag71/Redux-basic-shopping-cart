import { createStore } from "redux";
import { productsList } from "./productsList";

const cartAddItem = "cart/addItem";
const cartRemoveItem = "cart/removeItem";
const increaseCartItem = "cart/increaseCartItem";
const decreaseCartItem = "cart/decreaseCartItem";
const addWishListItem = "cart/addWishListItem";
const removeWishListItem = "cart/removeWishListItem";

const initialState = {
  products: productsList,
  cartItems: [],
  wishList: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case cartAddItem:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case cartRemoveItem:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.productId !== action.payload.productId
        ),
      };
    case increaseCartItem:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.productId === action.payload.productId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }).filter((cartItem) => cartItem.quantity > 0),
      };
    case decreaseCartItem:
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.productId === action.payload.productId) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }),
      };
    case addWishListItem:
      return {
        ...state,
        wishList: [...state.wishList, action.payload],
      };
    case removeWishListItem:
      return {
        ...state,
        wishList: state.wishList.filter(
          (item) => item.productId !== action.payload.productId
        ),
      };

    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store);

store.dispatch({
  type: "cart/addItem",
  payload: { productId: 1, quantity: 1 },
});
store.dispatch({
  type: "cart/addItem",
  payload: { productId: 15, quantity: 1 },
});
store.dispatch({
  type: "cart/removeItem",
  payload: { productId: 15 },
});
store.dispatch({
  type: increaseCartItem,
  payload: { productId: 1 },
});
store.dispatch({
  type: increaseCartItem,
  payload: { productId: 1 },
});
store.dispatch({
  type: increaseCartItem,
  payload: { productId: 1 },
});
store.dispatch({
  type: decreaseCartItem,
  payload: { productId: 1 },
});
store.dispatch({
  type: addWishListItem,
  payload: { productId: 1 },
});
store.dispatch({
  type: addWishListItem,
  payload: { productId: 3 },
});
store.dispatch({
  type: addWishListItem,
  payload: { productId: 4 },
});
store.dispatch({
  type: addWishListItem,
  payload: { productId: 5 },
});
store.dispatch({
  type: removeWishListItem,
  payload: { productId: 1 },
});
