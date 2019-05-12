import React from 'react';
import '../App.css';
import SignUpButton from './SignUpButton';
import LogInButton from './LogInButton';
import {Modal} from 'react-bootstrap';

export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLogin: true,
            isSignUp: false,
            usernameEmail:''
            
        }
    }


    showLoginBox() {
        this.setState({isLogin: true, isSignUp: false});
      }
    
      showSignUpBox() {
        this.setState({isSignUp: true, isLogin: false});
      }

      myemailCallback= (email)=>{
        this.props.callbackFromParent(email);
        console.log(email);
      }

    render(){

        // console.log(this.props.loginButtonType);
        if(!this.props.show){
            return null;
        }
        console.log(this.props.show)
        return(
                <Modal {...this.props} animation={false} centered={true}>
                    <Modal.Header closeButton>
                        <Modal.Title className="login-title text-dark">Food Explore</Modal.Title>
                    </Modal.Header>
                    
                    <Modal.Body>
                        <div style={{ "color": "black" }}>
                            <div className="row justify-content-center" style={{ "marginBottom": "10px" }}>
                                <div
                                    className={"col-md-4 controller " + (this.state.isLogin ? "selected-controller": "")}
                                    style={{ "background": "rgba(255, 255, 255, 0.5)" }}  
                                    onClick={this.showLoginBox.bind(this)}>
                                    Login
                                </div>
                                <div
                                    className={"col-md-4 controller " + (this.state.isSignUp ? "selected-controller" : "")}
                                    style={{ "background": "rgba(255, 255, 255, 0.5)" }}
                                    onClick={this.showSignUpBox.bind(this)}>
                                    SignUp
                                </div>
                            </div>
                            <div>
                            {this.state.isLogin && <LogInButton onClose={this.props.onClose} callbackFromParent={this.myemailCallback}/>}
                            {this.state.isSignUp && <SignUpButton onClose ={this.props.onClose} callbackFromParent={this.myemailCallback}/>}
                            </div>

                        </div>
                    </Modal.Body> 

                </Modal>

        )
    }
}
