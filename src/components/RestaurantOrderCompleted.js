import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string'

class RestaurantList extends Component {

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
                    <h1>Order Completed</h1>
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

            const values = queryString.parse(this.props.location.search)
            
            body = (
                <div className="black-color">
                    <h1>Order Completed. Thank you for your order.</h1>
                    <p>Your order id is: {this.props.match.params.id}</p>
                    <p>Total Amount: ${values.cost} </p>
                    <button type="button" className="btn btn-primary"><Link to={`/` }>Go to Home Page</Link></button>
                </div>
            );
        }
        return body;
    }
}

export default RestaurantList;
