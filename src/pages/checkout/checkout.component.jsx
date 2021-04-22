import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';

const checkoutPage = ({cartItems,total}) => (
    <div className="checkout-page">
        <header className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </header>
        {
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} item={cartItem} />
            )
        }

        <div className="total">
            <span>Total: ${total}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    total:selectCartTotal,
    cartItems: selectCartItems,

});

export default connect(mapStateToProps)(checkoutPage);