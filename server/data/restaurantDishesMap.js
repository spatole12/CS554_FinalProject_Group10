const mongoCollections = require("../config/mongoCollections");
const restaurantDishesMap = mongoCollections.restaurantDishesMap;
const uuid = require("node-uuid");

const exportedMethods = {
  async getRestaurantDishesById(restaurantId) {
    
    if (restaurantId === undefined) throw "Invalid Value, Restaurant Id must be specified";
    
    const restaurantDishesMapCollection = await restaurantDishesMap();
    const restaurantDishes = await restaurantDishesMapCollection.findOne({ restaurant_id: restaurantId });

    if (!restaurantDishes) throw "Restaurant not found";
    return restaurantDishes;
  },
  async addMaps(map) {
    const restaurantDishesMapCollection = await restaurantDishesMap();
    
    const newInsertInformation = await restaurantDishesMapCollection.insertOne(map);
    if(newInsertInformation.insertedCount === 0) throw "Could not create a map";
    const newId = newInsertInformation.insertedId;
    return await this.getRestaurantDishesById(map.restaurant_id);
  }
};

module.exports = exportedMethods;