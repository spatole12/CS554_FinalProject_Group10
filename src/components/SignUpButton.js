import React from 'react';
import '../App.css';    
import fire from '../config/Fire';
export default class SignUpButton extends React.Component {

    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.signup = this.signup.bind(this);
      
      this.state = {
        username:'',
        email: '',
        password:'',
        error:'',
        fieldError:''
      };
    }
  
    handleChange(e){
      this.setState({[e.target.name]: e.target.value});
  }
  onClose = (e) =>{
    this.props.onClose && this.props.onClose(e);
}
    signup(e){
      e.preventDefault();
      fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(this.onClose ).then((u)=>{
      }).catch((error)=>{
          if(!this.state.email || !this.state.password || !this.state.username){
            console.log(error);
            this.setState({fieldError:"Fields cannot be left empty!"});
            }else{
            console.log("in else");
            this.setState({error:error});
            }
      });
      this.props.callbackFromParent(this.state.email);

  }
  
    render() {
      return (
        <div>
                <form style={{"textAlign": "left"}}>
                <div className="form-group row">
                  <label htmlFor="username" className="col-sm-4 col-form-label">Username</label>
                  <div className="col-sm-8">
                    <input type="text" name="username" className="form-control" value = {this.state.username} onChange={this.handleChange} placeholder="Username"/>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="email" className="col-sm-4 col-form-label">Email</label>
                  <div className="col-sm-8">
                    <input type="text" name="email" className= "form-control" value = {this.state.email} onChange={this.handleChange} placeholder="Email"/>
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="password" className="col-sm-4 col-form-label">Password</label>
                  <div className="col-sm-8">
                    <input type="password" className="form-control" value = {this.state.password} name="password" onChange={this.handleChange} placeholder="Password"/>
                  </div>
                </div>
                <div className='validation-error'>
                    {this.state.fieldError}
                    {this.state.error.message}
                </div>
                <div className="row justify-content-center">
                  <button type="submit " onClick = {this.signup} className="btn-primary" > SignUp</button>
                </div>
                </form>
            </div>
      );
    }
  }