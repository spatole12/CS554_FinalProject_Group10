import React from 'react';
import '../App.css';    
import {Modal} from 'react-bootstrap';
import fire from '../config/Fire';
export default class LogInButton extends React.Component {

    constructor(props) {
      super(props);
      this.login = this.login.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        email : '',
        password : '',
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

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then(this.onClose)
        .catch((error)=>{
            console.log(error);
            if(!this.state.email || !this.state.password){
                this.setState({fieldError:"Fields cannot be left empty!"});
            }else{
            this.setState({error:error});
            }
        });
        this.props.callbackFromParent(this.state.email);
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
                            <label htmlFor="emailadd">Email address</label>
                                <input value = {this.state.email} onChange={this.handleChange} type="email" name="email"  id="emailadd" aria-describedby="emailHelp" placeholder="Enter email" required></input>
                            </div>
                            <div>
                            <label htmlFor="passwordid">Password</label>
                            <input  value = {this.state.password} onChange={this.handleChange} type="password" name="password" id="passwordid" aria-describedby="emailHelp" placeholder="Enter Password" required></input>
                            </div>
                            <div className='validation-error'>
                                {this.state.fieldError}
                                {this.state.error.message}
                            </div>
                            <div>
                            <button type="submit " onClick = {this.login} className="btn-primary" >Login as User </button>
                            {} {} 
                            <button type="submit " onClick = {this.login} className="btn-primary" >Login as Restraunt Owner </button>
                            </div>
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