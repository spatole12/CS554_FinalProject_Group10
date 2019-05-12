import React, { Component } from 'react';
import axios from 'axios';

class RestaurantReserveTable extends Component {

    constructor(props) {
        
        super(props);
        this.state = {
            date: new Date(),
            time: "--:--",
            noOfGuests: undefined,
            loading: false,
            error: undefined
        };
    }

    componentDidMount() {
        
    }

    onSubmit(e) {
        e.preventDefault();

    }

    async reserveTable() {
        
        const search = this.props.location.search; 
        const params = new URLSearchParams(search);
        const restaurant_name = params.get('restaurant_name');

        let post_data = {
            "restaurant_id": this.props.match.params.restaurant_id,
            "restaurant_name": restaurant_name,
            "user_id":this.props.userId,
            "no_of_guests":this.refs.guests.value,
            "time": this.refs.time.value,
            "date": this.refs.date.value,
            "status": "Pending"
        };
        
        try {
            const response = await axios.post('http://localhost:3001/reservations/', post_data);
            this.props.history.push(`/restaurant/reservationCompleted/${response.data._id}`);
            
          } catch (e) {
            console.log(`😱 Axios request failed: ${e}`);
          }
    }


    render() {
        let body = null;

        
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
            let today = new Date(),
    day = today.getDate(),
    month = today.getMonth()+1, //January is 0
    year = today.getFullYear();
         if(day<10){
                day='0'+day
            } 
        if(month<10){
            month='0'+month
        }
        today = year+'-'+month+'-'+day;

        const search = this.props.location.search; 
        const params = new URLSearchParams(search);
        const restaurant_name = params.get('restaurant_name');

            body = (
                <div className="black-color">
                    <h1>Book a Table</h1>
                    <h2>{restaurant_name}</h2>
                    
                    <input type="date" ref="date"  min = {today}/>
<br />
      <select  ref="time" >
      <option value="--:--" selected="selected" disabled="disabled">--:--</option>
  <option value="10:00 AM">10:00 AM</option>
  <option value="10:30 AM">10:30 AM</option>
  <option value="11:00 AM">11:00 AM</option>
  <option value="11:30 AM">11:30 AM</option>
  <option value="12:00 PM">12:00 PM</option>
  <option value="12:30 PM">12:30 PM</option>
  <option value="12:30 PM">12:30 PM</option>
  <option value="1:00 PM">1:00 PM</option>
  <option value="1:30 PM">1:30 PM</option>
  <option value="2:00 PM">2:00 PM</option>
  <option value="2:30 PM">2:30 PM</option>
  <option value="3:00 PM">3:00 PM</option>
  <option value="3:30 PM">3:30 PM</option>
  <option value="4:00 PM">4:00 PM</option>
  <option value="4:30 PM">4:30 PM</option>
  <option value="5:00 PM">5:00 PM</option>
  <option value="5:30 PM">5:30 PM</option>
  <option value="6:00 PM">6:00 PM</option>
  <option value="6:30 PM">6:30 PM</option>
  <option value="7:00 PM">7:00 PM</option>
  <option value="7:30 PM">7:30 PM</option>
  <option value="8:00 PM">8:00 PM</option>
  <option value="8:30 PM">8:30 PM</option>
  <option value="9:00 PM">9:00 PM</option>
  <option value="9:30 PM">9:30 PM</option>
</select>

<br />
<input type="number" default="0" ref="guests" ></input>
<br />
<br />         
                    
                    <button type="button" className="btn btn-primary" onClick={e=>this.reserveTable()}>Reserve Table</button>
                </div>
            );
        }
        return body;
    }
}

export default RestaurantReserveTable;
