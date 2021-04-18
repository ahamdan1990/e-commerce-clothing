import React from 'react';
import { Switch,Route } from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

import  HomePage  from './pages/homepage/homepage.component';
import  ShopPage  from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


import Header from './components/header/header.component';

//here we're importing the auth method that we define it in the firebase utils files so we know if a user have been authenticated to our app and what to do with this authenticatin 
import {auth,createUserProfileDocument} from './firebase/firebase.utils';

import {setCurrentUser} from './redux/user/user.actions';

//Demostrating the Link 
// const HatsPage = (props) => (
//   <div>
//     <h1>HATS PAGE</h1>
//     {/* <Link to="/">Home</Link>
//     <button onClick={()=>props.history.push('/')}>Home</button> */}
//   </div>
// )

class App extends React.Component {

  //we're defining a null variable
  unsbscribeFromAuth = null;
  
  componentDidMount() {

    const {setCurrentUser} = this.props;
    //this is a method from the firebase auth library that will take a function that have a param of the user state on the auth at our firebase project and get back a function that lets us unsubscribe from the listener we just instantiated which we are store it into the unsbscibeFromAuth so we can stop the onAuthStateChange listener after we get authenticated
    this.unsbscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {

          setCurrentUser({
            id:snapshot.id,
            ...snapshot.data(),
          });

        })
      } else {
        //when logout we want to set the state to null 
        setCurrentUser(userAuth);
      }
      

    });
  }

  componentWillUnmount() {
    //get back a function that lets us unsubscribe from the listener we just instantiated which is the below method
    this.unsbscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        {/* <HomePage /> */}

        {/* When we place component outside the Switch component it will always be rendered onto the screen and will not be part of the route thing  */}
        <Header />

        <Switch>
        
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />

        </Switch>
      </div>
    );
  }

}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

//We passed nul for the first function because we don't need any state from our reducer we only want to set the reducer
export default connect(null,mapDispatchToProps)(App);
