import React from 'react';
import { Switch,Route } from 'react-router-dom';

import './App.css';

import  HomePage  from './pages/homepage/homepage.component';
import  ShopPage  from './pages/shop/shop.component';

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
      <Switch>
      
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />

      </Switch>
    </div>
  );
}

export default App;
