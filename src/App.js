import React, { Component } from 'react';
import './App.css';
import RestaurantContainer from './components/RestaurantContainer';
import DefaultContainer from './components/DefaultContainer';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  renderDefaultContainer() {
    return (props) => <DefaultContainer {...props} isAuthed={true} AuthLevel={0} userId={0}/>;
  }

  renderRestaurantContainer() {
    return (props) => <RestaurantContainer {...props} isAuthed={true} AuthLevel={0} userId={0}/>;
  }

  //change auth level to differentiate between a normal user and restaurant owner, also maintain user id (some kind of unique id) for each user

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <nav className="navbar navbar-default" style={{ "minHeight": "60px" }}>
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
            <Route exact path="/" render={this.renderDefaultContainer()} />
            <Route path="/restaurant" render={this.renderRestaurantContainer()} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

