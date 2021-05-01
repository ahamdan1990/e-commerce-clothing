import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import {SignInAndSignOutStyles} from './sing-in-and-sgin-up.styles';

const SignInAndSignUpPage = () => (
    <SignInAndSignOutStyles>
        <SignIn />
        <SignUp />
    </SignInAndSignOutStyles>
)

export default SignInAndSignUpPage;