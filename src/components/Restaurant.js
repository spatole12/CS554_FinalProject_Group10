import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Restaurant extends Component {
   constructor(props) {
      super(props);
      //this.API_KEY = "ou624q0okuv_MSkjkb0-gXv-o9K3gi-e75adIovbe0mf86dAoqEd0QUdEgQVhgYX9roDNKBiqGJT3n04TTvbZ81-3WAjWbBqg0naS7S09qBfq6HZGFwlb3L790rUXHYx";
      this.state = {
         data: undefined,
         loading: false,
         error: undefined
      };
   }

   componentWillMount() {
      this.getRestaurant();
   }

   async getRestaurant() {    
      this.setState({
         loading: true
      });
      try {
         const response = await axios.get(`http://localhost:3001/restaurantDetails/${this.props.match.params.id}`);
         this.setState({
            data: response.data,
            loading: false
         });
      } catch (e) {
        this.setState({
           error: "404 - Restaurant Not Found!",
           loading: false
        });
      }
   }

   render() {
      let body = null;
      
      if (this.state.loading) {
         body = (
            <div>
               <h1>Restaurant</h1>
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
         let img = <img alt="Restaurant" src={this.state.data.image_url} />;

         var categories = [],
        category;

        
    for (var i = 0; i < this.state.data.categories.length ; i++) {
      if (i === this.state.data.categories.length - 1) {
        category = <span>{this.state.data.categories[i].title}</span>;
      } else {
        category = <span>{this.state.data.categories[i].title}<span>, </span></span>;
      }
      categories.push(category);
      
    }

    var displayAddress = [],
        address;

    for ( i = 0; i < this.state.data.location.display_address.length; i++) {
      if (i === this.state.data.location.display_address.length - 1) {
        address = <span>{this.state.data.location.display_address[i]}</span>;
      } else {
        address = <span>{this.state.data.location.display_address[i]}<span>, </span></span>;
      }
      displayAddress.push(address);
    }

    var displayReviews = [],
    review;


for ( i = 0; i < this.state.data.reviews.length; i++) {
  review = <li>{this.state.data.reviews[i].text}</li>
  displayReviews.push(review);
}
         
         body = (
            <div className="black-color" style={{"margin-bottom":"20px"}} >
               <h2 className="cap-first-letter"> 
                  {this.state.data && this.state.data.name}
               </h2>
               {img} 
               <br />
               <br />
               <p>
                  Rating: {this.state.data && this.state.data.rating} 
                  <br />
                  Price: {this.state.data && this.state.data.price} 
                  <br />
                  Contact Number: {this.state.data && this.state.data.display_phone} 
                  <br /> 
               </p>

               <b>Categories</b>:
               
               <p>{categories}</p>
               
               <b>Address</b>:
               <p>{displayAddress}</p>

  
               <b>Reviews</b>:
               <p>{displayReviews}</p><br/>
    


<div class="btn-group">
{this.props.AuthLevel===1 && <Link className="btn btn-primary" to={`/restaurant/order/${this.props.match.params.id}?restaurant_name=${this.state.data.name}`}>Order Now</Link>}
{this.props.AuthLevel===1 && <Link className="btn btn-primary" to={`/restaurant/reviews/${this.props.match.params.id}`}>Post Review</Link>}
{this.props.AuthLevel===1 && <Link className="btn btn-primary" to={`/restaurant/reserveTable/${this.props.match.params.id}?restaurant_name=${this.state.data.name}`}>Reserve Table</Link>}
               
{this.props.AuthLevel===2 && <Link className="btn btn-primary" to={`/restaurant/ownerOrders/${this.props.match.params.id}`}>Orders Owner</Link>}
               
{this.props.AuthLevel===2 && <Link className="btn btn-primary" to={`/restaurant/ownerReservations/${this.props.match.params.id}`}>Reservations Owner</Link>}
               </div>  

            </div>
         );
      }
      return body;
   }
}

export default Restaurant;
