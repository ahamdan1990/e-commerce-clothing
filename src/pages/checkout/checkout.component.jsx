import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';

import {CheckoutContainer,CheckoutHeader,CheckoutHeaderBlock,CheckoutTextWarning,CheckoutPayButton,CheckoutTotal} from './checkout.styles';

const checkoutPage = ({cartItems,total}) => (
    <CheckoutContainer>

        <CheckoutHeader>

            <CheckoutHeaderBlock>
                <span>Product</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Description</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Quantity</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Price</span>
            </CheckoutHeaderBlock>
            <CheckoutHeaderBlock>
                <span>Remove</span>
            </CheckoutHeaderBlock>

        </CheckoutHeader>

        {
            cartItems.map(cartItem => 
                <CheckoutItem key={cartItem.id} item={cartItem} />
            )
        }

        <CheckoutTotal className="total">
            <span>Total: ${total}</span>
        </CheckoutTotal>

        <CheckoutTextWarning>
            *Please use the following test credit card for payments*
            <br/> 
            4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
        </CheckoutTextWarning>
        
        <CheckoutPayButton>
            <StripeCheckoutButton price={total} />
        </CheckoutPayButton>

    </CheckoutContainer>
);

const mapStateToProps = createStructuredSelector({
    total:selectCartTotal,
    cartItems: selectCartItems,

});

export default connect(mapStateToProps)(checkoutPage);