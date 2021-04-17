import React from 'react';
import { Switch,Route } from 'react-router-dom';

import './App.css';

import  HomePage  from './pages/homepage/homepage.component';
import  ShopPage  from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


import Header from './components/header/header.component';

//here we're importing the auth method that we define it in the firebase utils files so we know if a user have been authenticated to our app and what to do with this authenticatin 
import {auth,createUserProfileDocument} from './firebase/firebase.utils';

//Demostrating the Link 
// const HatsPage = (props) => (
//   <div>
//     <h1>HATS PAGE</h1>
//     {/* <Link to="/">Home</Link>
//     <button onClick={()=>props.history.push('/')}>Home</button> */}
//   </div>
// )

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      currentUser:null,
    }
  }

  unsbscribeFromAuth = null;
  
  componentDidMount() {
    //this is a method from the firebase auth library that will take a function that have a param of the user state on the auth at our firebase project
    this.unsbscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id:snapshot.id,
              ...snapshot.data(),
            }
          },()=>{
            console.log(this.state)
          });

        })
      } else {
        //when logout we want to set the state to null 
        this.setState({
          currentUser:userAuth,
        });

        console.log("the user has loggedout");
      }
      

    });
  }

  componentWillUnmount() {
    this.unsbscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        {/* <HomePage /> */}

        {/* When we place component outside the Switch component it will always be rendered onto the screen and will not be part of the route thing  */}
        <Header currentUser={this.state.currentUser}/>

        <Switch>
        
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />

        </Switch>
      </div>
    );
  }

}

export default App;
