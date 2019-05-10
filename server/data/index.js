const restaurantsData = require("./restaurants");
const restaurantDetailsData = require("./restaurantDetails");
const dishesData = require("./dishes");
const restaurantDishesMapData = require("./restaurantDishesMap");
const ordersData = require("./orders");

module.exports = {
  restaurants: restaurantsData,
  restaurantDetails: restaurantDetailsData,
  dishes: dishesData,
  restaurantDishesMap: restaurantDishesMapData,
  orders: ordersData
};

