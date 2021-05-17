import React from 'react';
// import {Link} from 'react-router-dom';

// connect is a higher order component that gets either one of 2 functions the first one we can call it mapStateToProps which gives us the ability to retreive the state from the rootReducer based on our needs 
//and the second one 
import {connect} from 'react-redux';

// import {auth} from '../../firebase/firebase.utils';

import {selectCurrentUser} from '../../redux/user/user.selector';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {hiddenSelector} from '../../redux/cart/cart.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdrown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

// import './header.styles.scss';
import { createStructuredSelector } from 'reselect';

import { HeaderContainer,LogoContainer,OptionsContainer,OptionLink } from './header.styles';

import {signOutStart} from '../../redux/user/user.actions';

const Header  = ({currentUser,dispatch,hidden,signOutStart}) => (

    <HeaderContainer>

        <LogoContainer to='/' onClick={()=>hidden ? null : dispatch(toggleCartHidden())}>
            <Logo />
        </LogoContainer>

        <OptionsContainer>

            <OptionLink to='/shop'>
                Shop
            </OptionLink>

            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {/* Here in the below we're using OptionLink as 'div' instead of declaring 2 component that have the same style */}
            {
                currentUser ?
                
                <OptionLink
                    as='div'
                    onClick={signOutStart}
                >
                    Sign Out
                </OptionLink>
                :
                <OptionLink to='/signin'>
                    Sign IN
                </OptionLink>
            }

            <CartIcon />

        </OptionsContainer>

        <CartDropdown /> 
        
    </HeaderContainer>
    
)

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden: hiddenSelector,

})

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

// const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => {
//     console.log(currentUser,hidden);
//     return {
//         currentUser: currentUser,
//     }
// }

export default connect(mapStateToProps,mapDispatchToProps)(Header);