import React from 'react';


import {connect} from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
// import './cart-icon.styles.scss';

import {ShoppingIconContainer,ShopIcon,ShoppingItemCount} from './cart-icon.styles';

import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

const CartIcon = ({toggleCartHidden,itemCount}) => {
    return (
    <ShoppingIconContainer onClick={toggleCartHidden}>
        <ShopIcon />
        <ShoppingItemCount>
            {itemCount}
        </ShoppingItemCount>
    </ShoppingIconContainer>
)
}

// it will give these properties as props for our CartItem component so we can use them and fire our action as we need
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount,
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);