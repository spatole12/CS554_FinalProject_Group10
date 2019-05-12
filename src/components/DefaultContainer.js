import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DefaultContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
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

  render() {
    let body = null;

    if (this.state.loading) {
      body = (
        <div>{this.props.isAuthed}


          <div className="container-fluid text-center main-container">

            <h1>Food Explore</h1>


            <form className="form-horizontal row" >

              <div className="col-md-offset-3 col-md-6">

                <div className="input-group input-group-lg" id="search-input-group">

                  <input required type="text" className="form-control"
                    placeholder="Search for restaurant, cuisine or a dish..."
                    id="search-input" />
                  <span className="input-group-btn">
                    <button type="submit" className="btn btn-lg btn-primary">
                      Search
                </button>
                  </span>
                </div>
              </div>

            </form>

            <br />

            <div>

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
      );
    }
    return body;
  }
}

export default DefaultContainer;
