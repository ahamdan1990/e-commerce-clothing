import React from 'react';
import {Link} from 'react-router-dom';

// connect is a higher order component that gets either one of 2 functions the first one we can call it mapStateToProps which gives us the ability to retreive the state from the rootReducer based on our needs 
//and the second one 
import {connect} from 'react-redux';

import {auth} from '../../firebase/firebase.utils';

import {selectCurrentUser} from '../../redux/user/user.selector';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import {hiddenSelector} from '../../redux/cart/cart.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdrown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';
import { createStructuredSelector } from 'reselect';

const Header  = ({currentUser,dispatch,hidden}) => (
    <div className="header"> 
        <Link to='/' className='logo-container' onClick={()=>hidden ? null : dispatch(toggleCartHidden())}>
            <Logo className='logo' />
        </Link>
        <nav className="options">
            <Link className="option" to='/shop'>
                Shop
            </Link>
            <Link className="option" to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? 
                <div 
                    className="option" 
                    onClick={()=>auth.signOut()}
                >
                    Sign Out
                </div>
                :
                <Link className="option" to='/signin'>
                    Sign IN
                </Link>
            }
            <CartIcon />
        </nav>
        <CartDropdown />
    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden: hiddenSelector,

})

// const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => {
//     console.log(currentUser,hidden);
//     return {
//         currentUser: currentUser,
//     }
// }

export default connect(mapStateToProps)(Header);