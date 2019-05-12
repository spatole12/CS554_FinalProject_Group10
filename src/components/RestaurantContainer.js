import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import RestaurantList from './RestaurantList';
import Restaurant from './Restaurant';
import RestaurantOrderList from './RestaurantOrderList';
import RestaurantOrderCompleted from './RestaurantOrderCompleted';
import ReviewsList from './reviewsList';


class RestaurantContainer extends Component {

    renderRestaurantListContainer() {
        return (props) => <RestaurantList {...props} isAuthed={this.props.isAuthed} AuthLevel={this.props.AuthLevel} userId={this.props.userId}/>;
      }

      renderRestaurantContainer() {
        return (props) => <Restaurant {...props} isAuthed={this.props.isAuthed} AuthLevel={this.props.AuthLevel} userId={this.props.userId}/>;
      }

      renderRestaurantOrderContainer() {
        return (props) => <RestaurantOrderList {...props} isAuthed={this.props.isAuthed} AuthLevel={this.props.AuthLevel} userId={this.props.userId}/>;
      }

      renderRestaurantOrderCompletedContainer() {
        return (props) => <RestaurantOrderCompleted {...props} isAuthed={this.props.isAuthed} AuthLevel={this.props.AuthLevel} userId={this.props.userId}/>;
      }

      renderReviewsContainer() {
        return (props) => <ReviewsList {...props} isAuthed={this.props.isAuthed} AuthLevel={this.props.AuthLevel} userId={this.props.userId}/>;
      }


    render() {
        return (
            <div>{this.props.isAuthed}
                <Switch>
                    <Route exact path="/restaurant/list/:page" render={this.renderRestaurantListContainer()} />
                    <Route exact path="/restaurant/:id" render={this.renderRestaurantContainer()} />
                    <Route exact path="/restaurant/orderCompleted/:id" render={this.renderRestaurantOrderCompletedContainer()} />
                    <Route exact path="/restaurant/order/:id" render={this.renderRestaurantOrderContainer()} />
                    <Route exact path="/restaurant/reviews/:id" render={this.renderReviewsContainer()} />
                </Switch>
            </div>
        );
    }
}

export default RestaurantContainer;
