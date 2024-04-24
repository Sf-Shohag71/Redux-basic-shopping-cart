import { combineReducers, createStore } from "redux";
import cartReducer, { decreaseCartItem, increaseCartItem } from "./cartReducer";
import productsReducer from "./productsReducer";
import wishListReducer, { addWishListItem, removeWishListItem } from "./wishListReducer";

const reducer = combineReducers({
  products: productsReducer,
  cartItems: cartReducer,
  wishList: wishListReducer,
});

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
