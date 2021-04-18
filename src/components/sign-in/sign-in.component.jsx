import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from  '../custom-button/custom-button.component';

import {auth, signInWithGoogle} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {email,password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({
                email:'',
                password:''
            })
        }
        catch(e) {
            console.log(e);
        }

        this.setState({email:'',password:''});
    }

    handleChange = event => {
        const {value,name} = event.target;
        this.setState({
            [name]:value
        })
    }

    render() {
        const {handleSubmit,handleChange} = this;
        const {email,password} = this.state;
        return (
            <div className="sign-in">
                <h2 className="title">
                    I already have an account
                </h2>
                <span>Sign in with you email and password</span>

                <form onSubmit={handleSubmit}>

                    <FormInput 
                        type="email" 
                        name="email" 
                        value={email}
                        handleChange={handleChange}
                        label="email"  
                        required
                    />

                    <FormInput 
                        type="password" 
                        name="password"
                        value={password}
                        handleChange={handleChange}
                        label="password" 
                        required
                        autoComplete="on"
                    />
                    
                    <div className="buttons">
                        <CustomButton type="submit">
                            SIGN IN
                        </CustomButton>

                        {/* here we're using signInWithGoogle method that we define it in the firebase utils  */}
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
                            SIGN IN with google
                        </CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;