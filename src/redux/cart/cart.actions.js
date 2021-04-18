import CartActionTypes from './cart.types';

// no need to pass a payload property cz we're not using it 
export const toggleCartHidden = () => ({
    type:CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type:CartActionTypes.ADD_ITEM,
    payload: item
})