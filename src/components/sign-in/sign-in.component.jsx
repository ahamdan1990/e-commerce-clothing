import React, {useState} from 'react';

import {connect} from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from  '../custom-button/custom-button.component';

// import {auth /*, signInWithGoogle */} from '../../firebase/firebase.utils';

import './sign-in.styles.scss';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';

// class SignIn extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             email:'',
//             password:''
//         }
//     }

//     handleSubmit = async event => {
//         event.preventDefault();

//         const {email,password} = this.state;
//         const {emailSignInStart} = this.props;

//         emailSignInStart({
//             email,
//             password
//         })


//         // try {
//         //     await auth.signInWithEmailAndPassword(email,password);
//         //     this.setState({
//         //         email:'',
//         //         password:''
//         //     })
//         // }
//         // catch(e) {
//         //     console.log(e);
//         // }

//         this.setState({email:'',password:''});
//     }

//     handleChange = event => {
//         const {value,name} = event.target;
//         this.setState({
//             [name]:value
//         })
//     }

//     render() {

const SignIn = ({emailSignInStart,googleSignInStart}) => {

    const [userCredentials, setCredentials] = useState({email:'' , password: ''});

    const handleSubmit = async event => {
        event.preventDefault();
        emailSignInStart(userCredentials);
    }

    const handleChange = event => {
        const {value, name} = event.target;

        setCredentials({...userCredentials, [name] : value});
    }

    const {email,password} = userCredentials;

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
                    <CustomButton 
                        type="button" 
                        onClick={googleSignInStart} isGoogleSignIn
                    >
                        SIGN IN with google
                    </CustomButton>
                </div>

            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (enailAndPassword) => dispatch(emailSignInStart(enailAndPassword))
})

export default connect(null,mapDispatchToProps)(SignIn);