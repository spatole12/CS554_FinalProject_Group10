import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import RestaurantList from './RestaurantList';
import RestaurantSearchList from './RestaurantSearchList';
import Restaurant from './Restaurant';
import RestaurantOrderList from './RestaurantOrderList';
import RestaurantOrderCompleted from './RestaurantOrderCompleted';
import RestaurantOwnerOrder from './RestaurantOwnerOrder';
import RestaurantOwnerReservation from './RestaurantOwnerReservation';
import RestaurantReserveTable from './RestaurantReserveTable';
import RestaurantReservationCompleted from './RestaurantReservationCompleted'; 
import RestaurantPopular from './RestaurantPopular';

class RestaurantContainer extends Component {

    renderRestaurantListContainer() {
        return (props) => <RestaurantList {...props} isAuthed={this.props.isAuthed} AuthLevel={this.props.AuthLevel} userId={this.props.userId}/>;
      }

      renderRestaurantSearchListContainer() {
        return (props) => <RestaurantSearchList {...props} isAuthed={this.props.isAuthed} AuthLevel={this.props.AuthLevel} userId={this.props.userId}/>;
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

      renderRestaurantOwnerOrderContainer() {
        return (props) => <RestaurantOwnerOrder {...props} isAuthed={this.props.isAuthed} AuthLevel={this.props.AuthLevel} userId={this.props.userId}/>;
      }

      renderRestaurantReserveTableContainer() {
        return (props) => <RestaurantReserveTable {...props} isAuthed={this.props.isAuthed} AuthLevel={this.props.AuthLevel} userId={this.props.userId}/>;
      }

      renderRestaurantReservationCompletedContainer() {
        return (props) => <RestaurantReservationCompleted {...props} isAuthed={this.props.isAuthed} AuthLevel={this.props.AuthLevel} userId={this.props.userId}/>;
      }

      renderRestaurantOwnerReservationsContainer() {
        return (props) => <RestaurantOwnerReservation {...props} isAuthed={this.props.isAuthed} AuthLevel={this.props.AuthLevel} userId={this.props.userId}/>;
      }

      renderRestaurantPopularContainer() {
        return (props) => <RestaurantPopular {...props} isAuthed={this.props.isAuthed} AuthLevel={this.props.AuthLevel} userId={this.props.userId}/>;
      }


    render() {
        return (
            <div>{this.props.isAuthed}
                <Switch>
                    <Route exact path="/restaurant/search/:searchTerm" render={this.renderRestaurantSearchListContainer()} />
                    <Route exact path="/restaurant/list/:page" render={this.renderRestaurantListContainer()} />
                    <Route exact path="/restaurant/:id" render={this.renderRestaurantContainer()} />
                    <Route exact path="/restaurant/popular/trending" render={this.renderRestaurantPopularContainer()} />
                    <Route exact path="/restaurant/orderCompleted/:id" render={this.renderRestaurantOrderCompletedContainer()} />
                    <Route exact path="/restaurant/order/:id" render={this.renderRestaurantOrderContainer()} />
                    <Route exact path="/restaurant/ownerOrders/:restaurant_id" render={this.renderRestaurantOwnerOrderContainer()} />
                    <Route exact path="/restaurant/reserveTable/:restaurant_id" render={this.renderRestaurantReserveTableContainer()} />
                    <Route exact path="/restaurant/reservationCompleted/:id" render={this.renderRestaurantReservationCompletedContainer()} />
                    <Route exact path="/restaurant/ownerReservations/:restaurant_id" render={this.renderRestaurantOwnerReservationsContainer()} />
                    
                </Switch>
            </div>
        );
    }
}

export default RestaurantContainer;
