import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RestaurantReservationCompleted extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            loading: false,
            error: undefined
        };
    }

    componentDidMount() {
        
    }

    onSubmit(e) {
        e.preventDefault();

    }

    render() {
        let body = null;
        
        if (this.state.loading) {
            body = (
                <div>
                    <h1>Reservation Request Successful</h1>
                    <br />
                    Loading...
                   </div>
            );
        } else if (this.state.error) {
            body = (
                <div>
                    <h1>{this.state.error}</h1>
                </div>
            );
        } else {

            body = (
                <div className="black-color">
                    <h1>Reservation Request Successful. Your request has been sent to the restaurant , the status of your reservation should update soon..</h1>
                    <p>Your reservation id is: {this.props.match.params.id}</p>
                    <button type="button" className="btn btn-primary"><Link to={`/` }>Go to Home Page</Link></button>
                </div>
            );
        }
        return body;
    }
}

export default RestaurantReservationCompleted;
