import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class RestaurantSearchList extends Component {

    constructor(props) {
        
        super(props);
        //this.API_KEY = "ou624q0okuv_MSkjkb0-gXv-o9K3gi-e75adIovbe0mf86dAoqEd0QUdEgQVhgYX9roDNKBiqGJT3n04TTvbZ81-3WAjWbBqg0naS7S09qBfq6HZGFwlb3L790rUXHYx";
        this.state = {
            category: undefined,
            data: undefined,
            loading: false,
            error: undefined
        };
    }

    async getRestaurant() {
        try {
            
                const response = await axios.get(`http://localhost:3001/elasticSearch/${this.props.match.params.searchTerm}`);
                this.setState({ data: response.data});
            
        } catch (e) {
            console.log(e);
            this.setState({
                error: "404 - No Restaurants Found!",
                loading: false
            });
        }
    }

    componentDidMount() {
        this.getRestaurant();
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
                    <h1>Restaurants</h1>
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
                this.state.data.map(restaurant => (

<div id={restaurant._source.id} className="card">
                <img className="card-img-top" src={restaurant._source.image_url} alt="Restaurant" />
                <div className="card-body">
                    <p className="card-title">{restaurant._source.name}</p>
                    <p className="card-text">{restaurant._source.location.display_address[0]}</p>
                    <button type="button" className="btn btn-primary"><Link to={`/restaurant/${restaurant._id}`}>Details</Link></button>
                </div>

                <br /><br/>
            </div>

            
                ));

            body = (
                <div className="black-color">
                    <h1>Restaurants</h1>
                    <ul className="list-unstyled">{li}</ul>
                </div>
            );
        }
        return body;
    }
}

export default RestaurantSearchList;
