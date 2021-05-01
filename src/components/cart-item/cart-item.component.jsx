import React from 'react';
// import './cart-item.styles.scss';
import {CartItemContainer,CartItemDetails,CartItemImage} from './cart-item.styled';

const CartItem = ({item: {imageUrl,price,name,quantity}}) => (
    <CartItemContainer>
        <CartItemImage src={imageUrl} alt="item"/>
        <CartItemDetails>
            <span>{name}</span>
            <span>{quantity} x ${price}</span>
        </CartItemDetails>
    </CartItemContainer>
)

export default CartItem;