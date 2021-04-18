import React from 'react';
import {Link} from 'react-router-dom';

// connect is a higher order component that gets either one of 2 functions the first one we can call it mapStateToProps which gives us the ability to retreive the state from the rootReducer based on our needs 
//and the second one 
import {connect} from 'react-redux';

import {auth} from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header  = ({currentUser}) => (
    <div className="header">
        <Link to='/' className='logo-container'>
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
        </nav>
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
})

export default connect(mapStateToProps)(Header);