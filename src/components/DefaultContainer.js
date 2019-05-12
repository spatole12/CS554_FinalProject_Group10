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
    let body = null;

    if (this.state.loading) {
      body = (
        <div>{this.props.isAuthed}


          <div className="fancy-image">
          <div className="container-fluid text-center">

            <h1>Food Explore</h1>


            <form className="form-horizontal row justify-content-center">

              <div className="col-md-6">

                <div className="input-group input-group-lg" id="search-input-group">

                  <input required type="text" className="form-control"
                    placeholder="Search for restaurant, cuisine or a dish..."
                    id="search-input" />
                  <span className="input-group-btn">
                    <button type="submit" className="btn btn-lg btn-primary">

                    <Link className="btn btn-primary" to={this.state.searchLink}>

                      Search
                </button>
                  </span>
                </div>
              </div>

            </form>

            <br />

            <div>
            <div class="btn-group">
            <Link className="btn btn-primary" to={`/restaurant/userOrders/${this.props.userId}`}>Orders History</Link>
               
               <Link className="btn btn-primary" to={`/restaurant/userReservations/${this.props.userId}`}>Reservations History</Link>
              </div>

              <div className="container" id="quick-search">
                <h2>Quick Searches</h2>

                <Link className="showlink" to="/restaurant/list/0">
                  Breakfast & Brunch
        </Link>

                <Link className="showlink" to="/restaurant/list/0">
                  Buffets
        </Link>

                <Link className="showlink" to="/restaurant/list/0">
                  Vegan
        </Link>

                <Link className="showlink" to="/restaurant/list/0">
                  Cafes
        </Link>

                <Link className="showlink" to="/restaurant/list/0">
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
