import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
// import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.styles.scss';
import {connect} from 'react-redux';
import { singUpStart } from '../../redux/user/user.actions';

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName:'',
            email: '',
            password: '',
            confirmPassowrd:'',
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const {displayName,email,password,confirmPassowrd} = this.state;
        const {signUpStart} = this.props;

        if (password !== confirmPassowrd) {
            alert('Password don\'t match');
            return;
        }

        const userCredentials = {
            displayName,
            email,
            password
        }

        signUpStart(userCredentials);

        this.setState({
            displayName:'',
            email: '',
            password: '',
            confirmPassowrd:'',
        })

        // try {
        //     const { user } = await auth.createUserWithEmailAndPassword(email,password);

        //     console.log(user);
            
        //     await createUserProfileDocument(user,{displayName});

        //     this.setState({
        //         displayName:'',
        //         email: '',
        //         password: '',
        //         confirmPassowrd:'',
        //     })
        // }
        // catch(e) {
        //     console.log(e);
        // }
    }

    handleChange = event => {
        const {name,value} =event.target;

        this.setState({
            [name]:value,
        })
    }

    render() {
        const {displayName,email,password,confirmPassowrd} = this.state;
        const {handleSubmit,handleChange} = this;
        return (
            <div className="sign-up">
                <h2 className="title">
                    I do not have an account
                </h2>
                <span>Sign Up with your email and password</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        label='Password'
                        required
                        autoComplete="on"
                    />
                    <FormInput
                        type='password'
                        name='confirmPassowrd'
                        value={confirmPassowrd}
                        onChange={handleChange}
                        label='Confirm Password'
                        required
                        autoComplete="on"
                    />
                    
                    <CustomButton type='submit' >
                        Sign Up
                    </CustomButton>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart:(userCredentials)=>dispatch(singUpStart(userCredentials))
})

export default connect(null,mapDispatchToProps)(SignUp);