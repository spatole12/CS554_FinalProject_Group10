import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import RestaurantList from './RestaurantList';
import Restaurant from './Restaurant';

class RestaurantContainer extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/restaurant/category/:category/:page" exact component={RestaurantList} />
                    <Route path="/restaurant/:id" exact component={Restaurant} />
                </Switch>
            </div>
        );
    }
}

export default RestaurantContainer;
