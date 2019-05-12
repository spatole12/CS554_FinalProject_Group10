const restaurantsData = require("./restaurants");
const restaurantDetailsData = require("./restaurantDetails");
const dishesData = require("./dishes");
const restaurantDishesMapData = require("./restaurantDishesMap");
const ordersData = require("./orders");
const reviewsData = require("./reviews");
const restaurantReviewsMapData = require("./restaurantReviewsMap");


module.exports = {
  restaurants: restaurantsData,
  restaurantDetails: restaurantDetailsData,
  dishes: dishesData,
  restaurantDishesMap: restaurantDishesMapData,
  reviews: reviewsData,
  restaurantReviewsMapData: restaurantReviewsMapData,
  orders: ordersData
};

