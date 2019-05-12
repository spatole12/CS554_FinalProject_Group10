import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class RestaurantUserReservation extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            data: undefined,
            loading: false,
            error: undefined,
            reservationId:undefined
        };
    }

    async getRestaurantUserReservationList() {
        try {
                const response = await axios.get(`http://localhost:3001/reservations/restaurantReservations/user/${this.props.match.params.user_id}`);
                this.setState({ data: response.data});
            
        } catch (e) {
            console.log(e);
            this.setState({
                error: "404 - No Reservations for this User Found!",
                loading: false
            });
        }
    }

    componentDidMount() {
        this.getRestaurantUserReservationList();
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
                    <h1>User Reservations History</h1>
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
                this.state.data.map(reservation => (

<div className="card">
                
                <div>
                    <p >Reservation ID: {reservation._id}</p>
                    <p >Restaurant Name: {reservation.restaurant_name}</p>
                    <p >Date: {reservation.date}</p>
                    <p >Time: {reservation.time}</p>
                    <p >No of Guests: {reservation.no_of_guests}</p>
                    <p >Status: {reservation.status}</p>
                    
                     </div>

                <br /><br/>
            </div>
            
                ));

            body = (
                <div className="black-color">
                    <h1>User Reservations History</h1>
                    <ul className="list-unstyled">{li}</ul>
                    
                    <Link className="btn btn-primary" to={`/` }>Go to Home Page</Link>
                </div>
            );
        }
        return body;
    }
}

export default RestaurantUserReservation;
