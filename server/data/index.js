const restaurantsData = require("./restaurants");
const restaurantDetailsData = require("./restaurantDetails");
const dishesData = require("./dishes");
const restaurantDishesMapData = require("./restaurantDishesMap");
const ordersData = require("./orders");
const reservationsData = require("./reservations");
const elasticSearchData = require("./elasticSearch");

module.exports = {
  restaurants: restaurantsData,
  restaurantDetails: restaurantDetailsData,
  dishes: dishesData,
  restaurantDishesMap: restaurantDishesMapData,
  orders: ordersData,
  reservations: reservationsData,
  elasticSearch: elasticSearchData
};

