import React from 'react';
import '../App.css';    
import {Modal} from 'react-bootstrap';
import fire from '../config/Fire';
export default class SignUpButton extends React.Component {

    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.signup = this.signup.bind(this);
      
      this.state = {
        email: '',
        password:''
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
          console.log(error);
      });

  }
  
    render() {
      return (
        <div>
          <Modal.Dialog>
            <Modal.Header>
                <Modal.Title className="login-title">Food Explore</Modal.Title>
            </Modal.Header>

            <Modal.Body className="modal-body">
                <form>
                <div>
                <label htmlFor="username">Username</label>
                <input type="text" name="username"onChange={this.handleChange} placeholder="Username"/>
                </div>
                <div>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" value = {this.state.email} onChange={this.handleChange} placeholder="Email"/>
                </div>
                <div>
                <label htmlFor="password">Password</label>
                <input type="password" value = {this.state.password} name="password" onChange={this.handleChange} placeholder="Password"/>
                </div>
                <button type="button" onClick={this.signup}>SignUp</button>
                </form>
            </Modal.Body>

            <Modal.Footer className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={(e)=>{this.onClose(e)}}>Close</button>

            </Modal.Footer>
            </Modal.Dialog>
        </div>
      );
    }
  }