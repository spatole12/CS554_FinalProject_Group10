import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class RestaurantOwnerReservation extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            data: undefined,
            loading: false,
            error: undefined,
            reservationId:undefined
        };
    }

    async getRestaurantOwnerReservationList() {
        try {
                const response = await axios.get(`http://localhost:3001/reservations/restaurantReservations/${this.props.match.params.restaurant_id}`);
                this.setState({ data: response.data});
            
        } catch (e) {
            console.log(e);
            this.setState({
                error: "404 - No Reservations for this Restaurant Found!",
                loading: false
            });
        }
    }

    componentDidMount() {
        this.getRestaurantOwnerReservationList();
    }

    onSubmit(e) {
        e.preventDefault();

    }

    async updateReservation(reservation_id, status) {

        try {
            const response = await axios.patch(`http://localhost:3001/reservations/${reservation_id}`, {status: status} );
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
                    <h1>Restaurant Reservations</h1>
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
                    <p >Date: {reservation.date}</p>
                    <p >Time: {reservation.time}</p>
                    <p >No of Guests: {reservation.no_of_guests}</p>
                    
                    
                    <button type="button" className="btn btn-success" onClick={e=>this.updateReservation(reservation._id, "Approved")}>Approve</button>
                    <button type="button" className="btn btn-warning" onClick={e=>this.updateReservation(reservation._id, "Declined")}>Decline</button>
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

export default RestaurantOwnerReservation;
