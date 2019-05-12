import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DefaultContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {


      loading: false,
      searchTerm: "",
      searchLink: "/restaurant/list/0"

    };
  }

  componentWillMount() {
    document.body.style.background = "url('images/landing-bg.jpg') no-repeat";
    document.body.style.backgroundSize = "cover";
    this.setState({
      loading: true
    });
    console.log(this.props)
  }

  componentWillUnmount() {
    document.body.style.background = null;
  }



  updateSearchTerm(e){
    this.setState({searchTerm: e.target.value});
    if(this.state.searchTerm===""){
      this.setState({searchLink: `/restaurant/list/0`});
    } else {
      this.setState({searchLink: `/restaurant/search/${this.state.searchTerm}`});
    }
  }

  render() {

    console.log("auth level = "+this.props.AuthLevel);
    console.log("userId = "+this.props.userId);
    let body = null;

    if (this.state.loading) {
      body = (
        <div>


          <div className="fancy-image">
          <div className="container-fluid text-center">

            <h1>Food Explore</h1>


            <form className="form-horizontal row justify-content-center">

              <div className="col-md-6">

                <div className="input-group input-group-lg" id="search-input-group">

                  <input required type="text" className="form-control"
                    placeholder="Search for restaurant, cuisine or a dish..."
                    id="search-input" onChange={e => this.updateSearchTerm(e)}/>
                  <span className="input-group-btn">
                    <button type="submit" className="btn btn-lg btn-primary">

                    <Link className="btn btn-primary" to={this.state.searchLink}>

                      Search
                      </Link>
                </button>
                  </span>
                </div>
              </div>

            </form>

            <br />

            <div>


            <div class="btn-group">
            {this.props.AuthLevel===1 && <Link className="btn btn-primary" to={`/restaurant/userOrders/${this.props.userId}`}>Orders History</Link>}
               
            {this.props.AuthLevel===1 && <Link className="btn btn-primary" to={`/restaurant/userReservations/${this.props.userId}`}>Reservations History</Link>}
              </div>



              <div className="container" id="quick-search">
                <h2>Quick Searches</h2>

                <Link className="showlink" to="/restaurant/popular/trending">
                  Trending
        </Link>

                <Link className="showlink" to="/restaurant/search/breakfast_brunch">
                  Breakfast & Brunch
        </Link>

                <Link className="showlink" to="/restaurant/search/buffets">
                  Buffets
        </Link>

                <Link className="showlink" to="/restaurant/search/vegan">
                  Vegan
        </Link>

                <Link className="showlink" to="/restaurant/search/cafes">
                  Cafes
        </Link>

                <Link className="showlink" to="/restaurant/search/night_food">
                  Night Food
        </Link>

              </div>

            </div>

          </div>
        </div>
        </div>
      );
    }
    return body;
  }
}

export default DefaultContainer;
