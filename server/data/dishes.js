const mongoCollections = require("../config/mongoCollections");
const dishes = mongoCollections.dishes;
const restaurantDishesMap = mongoCollections.restaurantDishesMap;
const uuid = require("node-uuid");

const exportedMethods = {
  async getAllDishesForRestaurantById(restaurantId) {

    if (restaurantId === undefined) throw "Invalid Value, Restaurant Id must be specified";
    const restaurantDishesCollection = await restaurantDishesMap();
    const restaurantDishes = await restaurantDishesCollection.findOne({ restaurant_id: restaurantId });

    const dishesCollection = await dishes();

    let restaurantDishesDetails =[];
    for(var i=0; i<restaurantDishes.dishes.length; i++){
      restaurantDishesDetails.push(await this.getDishById(restaurantDishes.dishes[i]));
    }

    return restaurantDishesDetails;
  },
  async getDishById(dishId) {

    if (dishId === undefined) throw "Invalid Value, Dish Id must be specified";
    const dishesCollection = await dishes();
    const dish = await dishesCollection.findOne({ id: dishId });

    if (!dish) throw "Dish not found";
    return dish;
  },
  async addDishes(dish) {
    const dishesCollection = await dishes();

    const newInsertInformation = await dishesCollection.insertOne(dish);
    if(newInsertInformation.insertedCount === 0) throw "Could not create a dish";
    return await this.getDishById(dish.id);
  }
};

module.exports = exportedMethods;