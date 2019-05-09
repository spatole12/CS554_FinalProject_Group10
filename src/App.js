import React, { Component } from 'react';
import './App.css';
import RestaurantContainer from './components/RestaurantContainer';
import DefaultContainer from './components/DefaultContainer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
<div className="App">
        
        <div className="App">
          <header className="App-header">
            
          <nav className="navbar navbar-default" style={{"minHeight": "60px"}}>
    <div className="container">
        <div className="navbar-right">
            
                        <button id="login" className="btn btn-success navbar-btn" >Log In
                            
                        </button>
        </div>
    </div>
</nav>
          </header>
          <br />
          <br />
          <div className="App-body">
            <Route exact path="/" component={DefaultContainer} />
            <Route path="/restaurant" component={RestaurantContainer} />
            
          </div>
        </div>
        </div>
      </Router>
    );
  }
}

export default App;
