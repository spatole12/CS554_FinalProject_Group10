import React, { Component } from 'react';
import './App.css';
import RestaurantContainer from './components/RestaurantContainer';
import DefaultContainer from './components/DefaultContainer';
import { Link } from 'react-router-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';

import fire from './config/Fire';

import UserLoginButton from './components/UserLoginButton';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: {},
      useremail:'',
      userLevel: 1
      
    }
  }

  componentWillUpdate(nextProps,nextState){
    localStorage.setItem("email",JSON.stringify(nextState.useremail));
    localStorage.setItem("userLevel",JSON.stringify(nextState.userLevel));
}

  componentWillMount(){
    localStorage.getItem('email') && this.setState({
      useremail : JSON.parse(localStorage.getItem('email'))
    });

    localStorage.getItem('userLevel') && this.setState({
      userLevel : JSON.parse(localStorage.getItem('userLevel'))
    })
  }


  componentDidMount(){
    this.authListener();
  }

  renderDefaultContainer() {
    return (props) => <DefaultContainer {...props} isAuthed={true} AuthLevel={this.state.userLevel} userId={this.state.useremail}/>;
  }

  renderRestaurantContainer() {
    return (props) => <RestaurantContainer {...props} isAuthed={true} AuthLevel={this.state.userLevel} userId={this.state.useremail}/>;
  }

  showModal = () =>{
    this.setState({
      ...this.state,
      show: !this.state.show
    })
  }

  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user});
      }
      else{
        this.setState({user: null});
      }
    });
  }

  myCallback=(email, userLevel)=>{
    console.log(email);
    this.setState({useremail:email, userLevel: userLevel});


  }

//change auth level to differentiate between a normal user and restaurant owner, also maintain user id (some kind of unique id) for each user
 
render() {

  let button;
  // this.setState({user:{}});
  // console.log(this.state.user);
  if(this.state.user)
  {
    // this.state.show = false;
    button = <UserLoginButton user = {this.state.user} show = {this.state.show} email = {this.state.useremail}/>
      
  }else{
    let usrname = this.state.useremail;
    button = <button id="login" className="btn btn-success navbar-btn"  onClick = {this.showModal} value = "Show Modal" >
    {this.state.user ? usrname :"Log In"}</button>
  }


    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <nav className="navbar navbar-default" style={{ "minHeight": "60px" }}>
              <div className="container">
              <div className="navbar-right">
              <Link className="btn btn-primary" to={`/`}>
                      Food Explore
                      </Link>
                      </div>
                <div className="navbar-right">
                  {button}
                </div>
               
              </div>
              
            </nav>
            <Login onClose={this.showModal} show= {this.state.show} callbackFromParent={this.myCallback}>
                  This is a modal
                  </Login>
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