import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class RestaurantOwnerOrder extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            data: undefined,
            loading: false,
            error: undefined,
            orderId:undefined
        };
    }

    async getRestaurantOwnerOrderList() {
        try {
                const response = await axios.get(`http://localhost:3001/orders/restaurantOrders/${this.props.match.params.restaurant_id}`);
                this.setState({ data: response.data});
            
        } catch (e) {
            console.log(e);
            this.setState({
                error: "404 - No Orders for this Restaurant Found!",
                loading: false
            });
        }
    }

    componentDidMount() {
        this.getRestaurantOwnerOrderList();
    }

    onSubmit(e) {
        e.preventDefault();

    }

    async handleChange(e, dishId, price) {

        var dishUpdate={};
        if(this.state.order.length===0){
            dishUpdate = {
                "dish_id":dishId,
                "price": price,
                "quantity": e.target.value
            }
            this.state.order.push(dishUpdate);
        }
        for(var i=this.state.order.length-1; i>=0; i--){
            if(this.state.order[i].dish_id===dishId){
                this.state.order.splice(i, 1);
            }
            if(!(e.target.value==="" || e.target.value===0)){
            dishUpdate = {
                "dish_id":dishId,
                "price": price,
                "quantity": e.target.value
            }
            this.state.order.push(dishUpdate);
        }
        }

        this.state.postOrder = {
            "restaurant_id": this.props.match.params.id,
            "user_id":this.props.userId,
            "completed":false,
            "order_details":this.state.order
        }

    }

    async completeOrder(order_id) {

        try {
            const response = await axios.patch(`http://localhost:3001/orders/${order_id}`, { patch_data: {completed: true} });
            console.log(response);
            window.location.reload();
            
          } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
          }
    }

    render() {
        let body = null;
        let li = null;

        
        if (this.state.loading) {
            body = (
                <div>
                    <h1>Restaurant Orders</h1>
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

console.log(this.state.data);
            li =
                this.state.data &&
                this.state.data.map(order => (
                    

<div className="card">
                
                <div>
                    <p >Order ID : {order._id}</p>
                    
                    <ul>
                    {
                order.order_details.map( order_details => <li>
                    <p >Dish : {order_details.dish.title}</p>
                    
                    <p >Quantity : {order_details.quantity} </p>
                </li>)
            }
                    </ul>
                    <button type="button" className="btn btn-success" onClick={e=>this.completeOrder(order._id)}>Complete</button>
                </div>

                <br /><br/>
            </div>
            
                ));

            body = (
                <div className="black-color">
                    <h1>Restaurant Orders</h1>
                    <ul className="list-unstyled">{li}</ul>
                    
                    <Link className="btn btn-primary" to={`/` }>Go to Home Page</Link>
                </div>
            );
        }
        return body;
    }
}

export default RestaurantOwnerOrder;
