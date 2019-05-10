const mongoCollections = require("../config/mongoCollections");
const restaurants = mongoCollections.restaurants;
const uuid = require("node-uuid");

function intOrNaN(x) {
  return /^\d+$/.test(x) ? +x : NaN
}

const exportedMethods = {
  async getAllRestaurants(skip, limit) {
    if (skip === undefined) skip = 0;
    if (isNaN(intOrNaN(skip))) throw "Invalid Type, Skip value must be an integer";

    if (limit === undefined) limit = 20;
    if (isNaN(intOrNaN(limit))) throw "Invalid Type, Take value must be an integer";

    skip = intOrNaN(skip);
    limit = intOrNaN(limit);
    if (limit > 100) limit = 100;

    const restaurantsCollection = await restaurants();
    return await restaurantsCollection.find({}).skip(skip).limit(limit).toArray();
  },
  async getRestaurantById(id) {

    if (id === undefined) throw "Invalid Value, Restaurant Id must be specified";
    const restaurantsCollection = await restaurants();
    const restaurant = await restaurantsCollection.findOne({ id: id });

    if (!restaurant) throw "Restaurant not found";
    return restaurant;
  },
  async addRestaurant(restaurant) {
    const restaurantsCollection = await restaurants();

    const newInsertInformation = await restaurantsCollection.insertOne(restaurant);
    if(newInsertInformation.insertedCount === 0) throw "Could not create a restaurant";
    const newId = newInsertInformation.insertedId;
    return await this.getRestaurantById(restaurant.id);
  }
};

module.exports = exportedMethods;