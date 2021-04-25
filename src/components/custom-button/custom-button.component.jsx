import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children,isGoogleSignIn,inverted, ...otherProps}) => (
    <button  {...otherProps} className={`${inverted ? 'inverted':''} ${isGoogleSignIn ? 'google-sign-in':''} custom-button ${otherProps.className ? otherProps.className : ''}`}>
        {children}
    </button>
)

export default CustomButton;