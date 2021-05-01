import React from 'react';
// import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { connect } from 'react-redux';
import {selectCartItems , hiddenSelector} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {createStructuredSelector} from 'reselect';
// import './cart.dropdown.styles.scss';

import {CartDropdownContainer,CartDropdownItemsContainer,CartDropdownEmptyMessage,CartDropdownCheckoutButton} from './cart-dropdown.styles';

import {withRouter} from 'react-router-dom';

const CartDropdown = ({hidden,cartItems,history,dispatch}) => (
    <CartDropdownContainer hidden={hidden}>
        <CartDropdownItemsContainer>
            {
                cartItems.length ?

                cartItems.map(cartItem => (
                    <CartItem 
                        key={cartItem.id} 
                        item={cartItem} 
                    />
                ))

                :

                <CartDropdownEmptyMessage>
                    Your cart is empty
                </CartDropdownEmptyMessage>

            }
        </CartDropdownItemsContainer>
        <CartDropdownCheckoutButton 
            onClick={
                ()=>{
                    dispatch(toggleCartHidden());
                    history.push('/checkout');
                }
            }
        >
            GO TO CHECKOUT
        </CartDropdownCheckoutButton>
    </CartDropdownContainer>
)

// When we dont have a lot of selector we can use this approach where we pass in the whole state and just select whatever we need.

// const mapStateToProps = state => ({
//     hidden:hiddenSelector(state),
//     cartItems: selectCartItems(state),
// })

// But when we have so many selectors we can instead use the following 

const mapStateToProps= createStructuredSelector({
    cartItems: selectCartItems,
    hidden: hiddenSelector
})

// The way we usually do it is like the below 

// const mapDispatchToProps = dispatch => ({
//     toggleDropDown: () => dispatch(toggleCartHidden()),
// })

// Connect pass the dispatch into our componet as a prop if we don't supply a second parameter to connect(), so if we dont pass mapDispatchToProps into connect it will pass dispatch as a prop into our component which than we could use it there

export default withRouter(connect(mapStateToProps)(CartDropdown));