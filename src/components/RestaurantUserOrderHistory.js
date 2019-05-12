import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class RestaurantUserOrder extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            data: undefined,
            loading: false,
            error: undefined,
            orderId:undefined
        };
    }

    async getRestaurantUserOrderList() {
        try {
                const response = await axios.get(`http://localhost:3001/orders/restaurantOrders/user/${this.props.match.params.user_id}`);
                this.setState({ data: response.data});
            
        } catch (e) {
            console.log(e);
            this.setState({
                error: "404 - No Orders for this User Found!",
                loading: false
            });
        }
    }

    componentDidMount() {
        this.getRestaurantUserOrderList();
    }

    onSubmit(e) {
        e.preventDefault();

    }

    render() {
        let body = null;
        let li = null;

        
        if (this.state.loading) {
            body = (
                <div>
                    <h1>User Order History</h1>
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
        } 
        else {


            li =
                this.state.data &&
                this.state.data.map(order => (

<div className="card">
                
                <div>
                    <p >Order ID: {order._id}</p>
                    <p >Restaurant Name: {order.restaurant_name}</p>
                    
                    <ul>
                    {
                order.order_details.map( order_details => <li>
                    <p >Dish: {order_details.dish.title}</p>
                    
                    <p >Quantity: {order_details.quantity} </p>
                </li>)
            }
                    </ul>
                    <p >Completed: {order.completed.toString()} </p>
                    </div>

                <br /><br/>
            </div>
            
                ));

            body = (
                <div className="black-color">
                    <h1>User Order History</h1>
                    <ul className="list-unstyled">{li}</ul>
                    
                    <Link className="btn btn-primary" to={`/` }>Go to Home Page</Link>
                </div>
            );
        }
        return body;
    }
}

export default RestaurantUserOrder;
