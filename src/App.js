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
      useremail:''

      
    }
  }

  componentWillUpdate(nextProps,nextState){
    localStorage.setItem("email",JSON.stringify(nextState.useremail));
}

  componentWillMount(){
    localStorage.getItem('email') && this.setState({
      useremail : JSON.parse(localStorage.getItem('email'))
    })
  }


  componentDidMount(){
    this.authListener();
  }

  renderDefaultContainer() {
    return (props) => <DefaultContainer {...props} isAuthed={true} AuthLevel={0} userId={0}/>;
  }

  renderRestaurantContainer() {
    return (props) => <RestaurantContainer {...props} isAuthed={true} AuthLevel={0} userId={0}/>;
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

  myCallback=(email)=>{
    console.log(email);
    this.setState({useremail:email});


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

      <Login onClose={this.showModal} onHide={this.showModal} show= {this.state.show} callbackFromParent={this.myCallback}>This is modal</Login>
      

        <header className="App-header">
        
          <nav className="navbar navbar-default justify-content-between" style={{ "minHeight": "60px" }}>
            <div className="">
            
              <Link className="btn btn-success" to={`/`}>
                      Food Explore
                      </Link>
                      
            </div>
      
            <div className="">
              {button}
            </div>
             
            
            
          </nav>
    
        </header>
        

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



