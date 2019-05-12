import React, { Component } from 'react';
import {Dropdown} from 'react-bootstrap';
import fire from '../config/Fire';
class UserLoginButton extends Component {
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
        this.state={
            email:''
        }
    }
    logout(){
        fire.auth().signOut();
        
    }
    render() {
        return (
            <div>
            <Dropdown id="login" className="btn btn-success navbar-btn" onClick = {this.showModal} value = "Show Modal">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            {this.props.user ? this.props.email :"Log In"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={this.logout}><Link to={`/` }>Logout</Link></Dropdown.Item>
                {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </Dropdown.Menu>
            </Dropdown>;
            </div>

        );
    }
}

export default UserLoginButton;