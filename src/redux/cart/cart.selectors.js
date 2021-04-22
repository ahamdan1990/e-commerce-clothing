import {createSelector} from 'reselect';

//input selector
const selectCart = state => state.cart;

//createSelector is a method that takes 2 arguments  the first one is the object or the state that we want to check with and the second one is a function that takes that selector and return it
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const hiddenSelector = createSelector(
    [selectCart],
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc,currElem)=>acc+currElem.quantity,0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((acc,currElem)=>acc+currElem.quantity * currElem.price,0)
)