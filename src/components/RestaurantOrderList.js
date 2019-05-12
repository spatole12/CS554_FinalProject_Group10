import React, { Component } from 'react';
import axios from 'axios';

class RestaurantList extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            data: undefined,
            loading: false,
            order: [],
            error: undefined,
            orderId:undefined
        };
    }

    async getRestaurantOrder() {
        try {
                const response = await axios.get(`http://localhost:3001/restaurant/dishes/${this.props.match.params.id}`);
                this.setState({ data: response.data});
            
        } catch (e) {
            console.log(e);
            this.setState({
                error: "404 - No Restaurants Dishes Found!",
                loading: false
            });
        }
    }

    componentDidMount() {
        this.getRestaurantOrder();
    }

    onSubmit(e) {
        e.preventDefault();

    }

    async handleChange(e, dishId, dish, price) {

        var dishUpdate={};
        if(this.state.order.length===0){
            dishUpdate = {
                "dish_id":dishId,
                "dish": dish,
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
                "dish": dish,
                "price": price,
                "quantity": e.target.value
            }
            this.state.order.push(dishUpdate);
        }
        }

        const search = this.props.location.search; 
        const params = new URLSearchParams(search);
        const restaurant_name = params.get('restaurant_name');

        this.state.postOrder = {
            "restaurant_id": this.props.match.params.id,
            "restaurant_name": restaurant_name,
            "user_id":this.props.userId,
            "completed":false,
            "order_details":this.state.order
        }

    }

    async placeOrder() {

        try {
            const response = await axios.post('http://localhost:3001/orders/', { posted_data: this.state.postOrder });
            
            this.state.orderId = response.data._id;

            let cost = 0;
            for(var i=0; i<response.data.order_details.length; i++){
                cost = cost + (parseFloat(response.data.order_details[i].price) * parseFloat(response.data.order_details[i].quantity));
            }

            this.props.history.push(`/restaurant/orderCompleted/${this.state.orderId}?cost=${cost}`);
            
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
                    <h1>Restaurant Menu</h1>
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
                this.state.data.map(dish => (

                <tr>
                
                        <td>{dish.title}</td>
                        <td>{((dish.description).length > 0 ? dish.description : '-')}</td>
                        <td>{dish.price}</td>
                        <td>
                            <input type="number" default="0" id={dish.id} 
                            onChange={e => this.handleChange(e, dish.id, dish.price)}></input>
                        </td>                        
                </tr>
            
                ));

            body = (
                <div className="black-color">
                    <h1>Restaurant Menu</h1>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {li}
                        </tbody>
                    </table>
                    
                    <button type="button" className="btn btn-primary" onClick={e=>this.placeOrder()}>Place Order</button>
                </div>
            );
        }
        return body;
    }
}

export default RestaurantList;
