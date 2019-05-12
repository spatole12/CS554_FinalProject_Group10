import React from 'react';
import '../App.css';
import SignUpButton from './SignUpButton';
import LogInButton from './LogInButton';
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
           
            // <div className="card">
            //     <div className ="card-body">
            //         {this.props.children}
                
            //         <div className = "footerModal">
            //             <button onClick={(e)=>{this.onClose(e)}}>
            //             Close</button>
            //         </div>
            //     </div>
            // </div>
            <div>
                <div className="box-controller">
                <div
                    className={"controller " + (this.state.isLogin ? "selected-controller": "")}
                    onClick={this.showLoginBox.bind(this)}>
                    Login
                </div>
                <div
                    className={"controller " + (this.state.isSignUp ? "selected-controller" : "")}
                    onClick={this.showSignUpBox.bind(this)}>
                    SignUp
                </div>
                </div>
                
                <div>
                {this.state.isLogin && <LogInButton onClose={this.props.onClose} callbackFromParent={this.myemailCallback}/>}
                {this.state.isSignUp && <SignUpButton onClose ={this.props.onClose} callbackFromParent={this.myemailCallback}/>}
                </div>
            </div>
        )
    }
}
