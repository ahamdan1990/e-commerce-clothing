import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import {connect} from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden,cartItems}) => {
    let quantity=0;
    return (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className="item-count">
            {cartItems.forEach(cartItem => {
                quantity += cartItem.quantity
            })}
            {quantity}
        </span>
    </div>
)
}

// it will give these properties as props for our CartItem component so we can use them and fire our action as we need
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = ({cart:{cartItems}}) => ({
    cartItems,
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);