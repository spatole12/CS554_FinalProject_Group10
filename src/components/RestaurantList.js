import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class RestaurantList extends Component {

    constructor(props) {
        
        super(props);
        //this.API_KEY = "ou624q0okuv_MSkjkb0-gXv-o9K3gi-e75adIovbe0mf86dAoqEd0QUdEgQVhgYX9roDNKBiqGJT3n04TTvbZ81-3WAjWbBqg0naS7S09qBfq6HZGFwlb3L790rUXHYx";
        this.state = {
            category: undefined,
            data: undefined,
            loading: false,
            count: undefined,
            error: undefined
        };
    }

    async getRestaurant() {
        try {
            //this.category = this.props.match.params.category;
            if (this.props.match.params.page === "0") {
                const response = await axios.get(`http://localhost:3001/restaurants?limit=20`);
                this.setState({ data: response.data, count: 50 });
            }
            else {
                let offset = parseInt(this.props.match.params.page) * 20;
                const response = await axios.get(`http://localhost:3001/restaurants?limit=20&offset=${offset}` );
                this.setState({ data: response.data, count: 50 });
            }
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
        const pageCount = Math.ceil(this.state.count / 20);
<<<<<<< HEAD

=======
        
>>>>>>> parent of ddd29dd... Added review functionality
        const page = this.props.match.params.page;
        const currentPage = parseInt(page) || 0;

        let prevPage;
        let nextPage;

        prevPage = this.state.data && currentPage>0 && currentPage<pageCount && <td><Link onClick={() => window.location.refresh()} to={`/restaurant/list/${currentPage - 1}`}>Prev Page</Link></td>
        nextPage = this.state.data && currentPage>=0 && currentPage<pageCount-1 && <td><Link onClick={() => window.location.refresh()} to={`/restaurant/list/${currentPage + 1}`}>Next Page</Link></td>

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
        } else if (currentPage < 0 || currentPage > pageCount - 1) {
            body = (
                <div>
                    <h1>404 - No Restaurants Found!</h1>
                </div>
            );
        }
        else {

            let maxlimit = 24;

            li =
                this.state.data &&
                this.state.data.map(restaurant => (

<div id={restaurant.id} className="card">
                <img className="card-img-top" src={restaurant.image_url} alt="Restaurant" />
                <div className="card-body">
                    <p className="card-title">{((restaurant.name).length > maxlimit) ? 
                        (((restaurant.name).substring(0,maxlimit-3)) + '...') : restaurant.name}</p>
                    <p className="card-text">{restaurant.location.display_address[0]}</p>
                    <Link className="btn btn-primary" to={`/restaurant/${restaurant.id}`}>Details</Link>
                </div>
            </div>

            
                ));

            body = (
                <div className="black-color">
                    <h1>Restaurants</h1>
                    <table>
                        <tbody>
                            <tr>
                                {prevPage}
                                {nextPage}
                            </tr>
                        </tbody>
                    </table>
                    <ul className="list-unstyled">{li}</ul>
                </div>
            );
        }
        return body;
    }
}

export default RestaurantList;
