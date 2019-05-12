import React, { Component } from 'react';
import axios from 'axios';
// import { POINT_CONVERSION_COMPRESSED } from 'constants';

class ReviewsList extends Component {

    
    constructor(props) {
        
        super(props);
        this.state = {
            data: undefined,
            loading: false,
            reviews: [],
            error: undefined
        };
        // console.log('Props: ', props, ' this. state: ', this.state);
        // console.log('restaurant ID: ', props.match.params.id);
        // console.log('user id: ', props.userId);
    }

    // async getRestaurantOrder() {
    //     try {
            
    //             const response = await axios.get(`http://localhost:3001/restaurant/dishes/${this.props.match.params.id}`);
    //             this.setState({ data: response.data});
            
    //     } catch (e) {
    //         console.log(e);
    //         this.setState({
    //             error: "404 - No Restaurants Dishes Found!",
    //             loading: false
    //         });
    //     }
    // }

    // async getReviewData() {
    //     this.setState({ data: "Some data"});
    // }

    componentDidMount() {
        // this.getReviewData();
        // this.getRestaurantOrder();
    }

    onSubmit(e) {
        console.log('Default');
        e.preventDefault();

    }

    // async handleChange(e, review) {

    //     console.log('e: ', e, 'reviewid: ', review);
        // var dishUpdate={};
        // if(this.state.order.length===0){
        //     dishUpdate = {
        //         "dish_id":dishId,
        //         "price": price,
        //         "quantity": e.target.value
        //     }
        //     this.state.order.push(dishUpdate);
        // }
        // for(var i=this.state.order.length-1; i>=0; i--){
        //     if(this.state.order[i].dish_id===dishId){
        //         this.state.order.splice(i, 1);
        //     }
        //     if(!(e.target.value==="" || e.target.value===0)){
        //     dishUpdate = {
        //         "dish_id":dishId,
        //         "price": price,
        //         "quantity": e.target.value
        //     }
        //     this.state.order.push(dishUpdate);
        // }
        // }

        // this.state.postOrder = {
        //     "restaurant_id": this.props.match.params.id,
        //     "user_id":this.props.userId,
        //     "completed":false,
        //     "order_details":this.state.order
        // }

    // }

    async handleChange(e){
        // console.log('e', e);
        this.setState({ reviews: e.target.value });
      }

    async postReview() {

        try {
            // console.log('Post method called: Review entered is ', this.state.reviews, this.props.match.params.id, this.props.userId);

            this.state.postReview = {
            "restaurant_id": this.props.match.params.id,
            "user_id":this.props.userId,
            // "completed":false,
            "review":this.state.reviews
        }
        console.log('this.state.postReview: ', this.state.postReview);
            const response = await axios.post('http://localhost:3001/reviews/', { posted_data: this.state.postReview });
            console.log('response: ', response);
            // const response = await axios.post('http://localhost:3001/orders/', { posted_data: this.state.postOrder });
            // console.log('response: ', response);
            // this.state.orderId = response.data._id;

            // let cost = 0;
            // for(var i=0; i<response.data.order_details.length; i++){
            //     cost = cost + (parseFloat(response.data.order_details[i].price) * parseFloat(response.data.order_details[i].quantity));
            // }

            // this.props.history.push(`/restaurant/orderCompleted/${this.state.orderId}?cost=${cost}`);
            
          } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
          }
    }

    render() {
        let body = null;
        // let li = null;

        
        if (this.state.loading) {
            body = (
                <div>
                    <h1>Reviews</h1>
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

//             li =
//                 this.state.data &&
//                 this.state.data.map(review => (

// <div className="card">
                
//                 <div>
//                 <div><input type="text" rows='10' cols='10' id={review.id} placeholder='Please enter your review about the restaurant here...' onChange={e => this.handleChange(e, review.id)}></input></div>   
//                     {/* <input type="number" default="0" id={dish.id} onChange={e => this.handleChange(e, dish.id, dish.price)}></input> */}
                    
//                 </div>

//                 <br /><br/>
//             </div>
            
//                 ));

            body = (
                <div className="black-color">
                    <h1>Restaurant Review</h1>
                    {/* <ul className="list-unstyled">{li}</ul> */}
                    <div><textarea type="text" rows='5' cols='50' placeholder='Please enter your review about the restaurant here...' onChange={ e=>this.handleChange(e) }></textarea></div>
                    {/* <div><textarea rows='10' cols='10' placeholder='Please enter your review about the restaurant here...'></textarea></div>                     */}
                    <button type="button" className="btn btn-primary" onClick={e=>this.postReview()}>Post Review</button>
                </div>
            );
        }
        return body;
    }
}

export default ReviewsList;