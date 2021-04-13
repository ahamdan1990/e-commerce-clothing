import React from 'react';
import './App.css';
import { HomePage } from './pages/homepage/homepage.component';
import { Switch,Route,Link } from 'react-router-dom';

const HatsPage = (props) => (
  <div>
    <h1>HATS PAGE</h1>
    {/* <Link to="/">Home</Link>
    <button onClick={()=>props.history.push('/')}>Home</button> */}
  </div>
)

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
