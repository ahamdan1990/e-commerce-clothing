import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import {selectCartItems , hiddenSelector} from '../../redux/cart/cart.selectors';
import './cart.dropdown.styles.scss';

const CartDropdown = ({hidden,cartItems}) => (
    <div className={`cart-dropdown ${hidden ? 'not-visible' : 'visible'}`}  >
        <div className="cart-items">
            {cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem} />
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = state => ({
    hidden:hiddenSelector(state),
    cartItems: selectCartItems(state),
})
export default connect(mapStateToProps)(CartDropdown);