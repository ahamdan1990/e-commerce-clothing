import React, {useEffect} from 'react';
import { Switch,Route,Redirect } from 'react-router-dom';
import {connect} from 'react-redux';

import './App.css';

import  HomePage  from './pages/homepage/homepage.component';
import  ShopPage  from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';


import Header from './components/header/header.component';

// import { toggleCartHidden } from './redux/cart/cart.actions';
//here we're importing the auth method that we define it in the firebase utils files so we know if a user have been authenticated to our app and what to do with this authenticatin 

// we added the addCollectionAndDocuments utils from firbase here just to add the shop_data so we don't add them manually
// import {auth,createUserProfileDocument/*,addCollectionAndDocuments*/} from './firebase/firebase.utils';

// import {setCurrentUser} from './redux/user/user.actions';
import {selectCurrentUser} from './redux/user/user.selector';
import {hiddenSelector} from './redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';

import {checkUserSession} from './redux/user/user.actions';

// import {selectCollectionForPreview} from './redux/shop/shop.selector';

//Demostrating the Link 
// const HatsPage = (props) => (
//   <div>
//     <h1>HATS PAGE</h1>
//     {/* <Link to="/">Home</Link>
//     <button onClick={()=>props.history.push('/')}>Home</button> */}
//   </div>
// )

// class App extends React.Component {

//   //we're defining a null variable
//   unsbscribeFromAuth = null;
  
//   componentDidMount() {

//     const {checkUserSession} = this.props;
//     checkUserSession();
//   //   // const {setCurrentUser/*,collectionsArray*/} = this.props;
//   //   //this is a method from the firebase auth library that will take a function that have a param of the user state on the auth at our firebase project and get back a function that lets us unsubscribe from the listener we just instantiated which we are store it into the unsbscibeFromAuth so we can stop the onAuthStateChange listener after we get authenticated
//   //   // this.unsbscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
//   //   //   if (userAuth) {
//   //   //     const userRef = await createUserProfileDocument(userAuth);

//   //   //     userRef.onSnapshot(snapshot => {

//   //   //       setCurrentUser({
//   //   //         id:snapshot.id,
//   //   //         ...snapshot.data(),
//   //   //       });

//   //   //     });
//   //   //   } else {
//   //   //     //when logout we want to set the state to null 

//   //   //     setCurrentUser(userAuth);
//   //   //   }

//   //   //   // we added the addCollectionAndDocuments utils from firbase here just to add the shop_data so we don't add them manually

//   //   //   // addCollectionAndDocuments('collections',collectionsArray.map(({title,items}) => ({title,items})));

//   //   // });
//   }

//   // componentWillUnmount() {
//   //   //get back a function that lets us unsubscribe from the listener we just instantiated which is the below method
//   //   // this.unsbscribeFromAuth();
//   // }

//   // handleOnClick = () => {
//   //   // if (!this.props.hidden) {
//   //   //   this.props.toggleCartHidden()
//   //   // }
//   // }

//   render() {
//     return (
//       <div className="App" onClick={this.handleOnClick}>
//         {/* <HomePage /> */}

//         {/* When we place component outside the Switch component it will always be rendered onto the screen and will not be part of the route thing  */}
//         <Header />

//         <Switch>
        
//           <Route exact path='/' component={HomePage} />
//           <Route path='/shop' component={ShopPage} />
//           <Route exact path='/checkout' component={CheckoutPage} />

//           <Route 
//             exact 
//             path='/signin' 
//             render={
//               ()=>this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)
//             } 
//           />

//         </Switch>
//       </div>
//     );
//   }

// }

const App = ({checkUserSession,currentUser}) => {
  useEffect(() => {
    checkUserSession();
  },[checkUserSession]);
  return (
    <div className="App">

      <Header />

      <Switch>
      
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />

        <Route 
          exact 
          path='/signin' 
          render={
            ()=> currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)
          } 
        />

      </Switch>

    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: hiddenSelector,
  //collectionsArray: selectCollectionForPreview
})

// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user)),
//   toggleCartHidden: () => dispatch(toggleCartHidden()),
// })

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession()),
})

//We passed nul for the first function because we don't need any state from our reducer we only want to set the reducer
export default connect(mapStateToProps,mapDispatchToProps)(App);
