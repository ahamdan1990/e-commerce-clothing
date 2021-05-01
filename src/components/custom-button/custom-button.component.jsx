import React from 'react';
// import './custom-button.styles.scss';

import {CustomButtonContainer} from './cutom-button.styles';

// without using styled component

// const CustomButton = ({ children,isGoogleSignIn,inverted, ...otherProps}) => (
//     <button  {...otherProps} className={`${inverted ? 'inverted':''} ${isGoogleSignIn ? 'google-sign-in':''} custom-button ${otherProps.className ? otherProps.className : ''}`}>
//         {children}
//     </button>
// )

// with styled component

const CustomButton = ({children,...props}) => (
    <CustomButtonContainer {...props} > 
        {children}
    </CustomButtonContainer>
)

export default CustomButton;