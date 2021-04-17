import React from 'react';
import { Switch,Route } from 'react-router-dom';

import './App.css';

import  HomePage  from './pages/homepage/homepage.component';
import  ShopPage  from './pages/shop/shop.component';
import Header from './components/header/header.component';

//Demostrating the Link 
// const HatsPage = (props) => (
//   <div>
//     <h1>HATS PAGE</h1>
//     {/* <Link to="/">Home</Link>
//     <button onClick={()=>props.history.push('/')}>Home</button> */}
//   </div>
// )

const App = () => {
  return (
    <div className="App">
      {/* <HomePage /> */}
      {/* When we place component outside the Switch component it will always be rendered onto the screen and will not be part of the route thing  */}
      <Header />
      <Switch>
      
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />

      </Switch>
    </div>
  );
}

export default App;
