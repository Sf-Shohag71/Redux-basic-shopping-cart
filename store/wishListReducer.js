export const addWishListItem = "cart/addWishListItem";
export const removeWishListItem = "cart/removeWishListItem";

function wishListReducer(state = [], action) {
  switch (action.type) {
    case addWishListItem:
      return [...state, action.payload];

    case removeWishListItem:
      return state.filter(
        (item) => item.productId !== action.payload.productId
      );

    default:
      return state;
  }
}

export default wishListReducer;
