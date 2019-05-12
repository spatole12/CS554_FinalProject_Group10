import React from 'react';
import '../App.css';    
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
                        <form style={{"textAlign": "left"}}>
                            <div className="form-group row">
                                <label htmlFor="emailadd" 
                                className="col-sm-4 col-form-label">Email address</label>
                                <div className="col-sm-8">
                                    <input className="form-control" 
                                    value = {this.state.email} onChange={this.handleChange} type="email" name="email"  id="emailadd" aria-describedby="emailHelp" placeholder="Enter email" required></input>
                                </div>
                            </div>
                            <div  className="form-group row">
                                <label htmlFor="passwordid"
                                    className="col-sm-4 col-form-label">Password</label>
                                <div className="col-sm-8">
                                    <input  className="form-control" value = {this.state.password} onChange={this.handleChange} type="password" name="password" id="passwordid" aria-describedby="emailHelp" placeholder="Enter Password" required></input>
                                </div>
                            </div>
                            <div className='validation-error'>
                                {this.state.fieldError}
                                {this.state.error.message}
                            </div>
                            <div className="row justify-content-center">
                            <button type="submit " onClick = {this.login} className="btn-primary" >Login as User </button>
                            <button type="submit " onClick = {this.login} className="btn-primary" >Login as Restraunt Owner </button>
                            </div>
                        </form>
            </div>
      );
    }
  }