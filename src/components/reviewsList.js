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
     
    }


    componentDidMount() {
        // this.getReviewData();
        // this.getRestaurantOrder();
    }

    onSubmit(e) {
       
        e.preventDefault();

    }

   
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
            this.props.history.push(`/restaurant/${this.props.match.params.id}`);
            
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


            body = (
                <div className="black-color">
                    <h1>Restaurant Review</h1>
   
                    <div><textarea type="text" rows='5' cols='50' placeholder='Please enter your review about the restaurant here...' onChange={ e=>this.handleChange(e) }></textarea></div>
                    <button type="button" className="btn btn-primary" onClick={e=>this.postReview()}>Post Review</button>
                </div>
            );
        }
        return body;
    }
}

export default ReviewsList;