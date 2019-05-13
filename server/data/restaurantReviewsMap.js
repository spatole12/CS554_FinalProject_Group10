const mongoCollections = require("../config/mongoCollections");
const restaurantReviewsMap = mongoCollections.restaurantReviewsMap;
// const uuid = require("node-uuid");

const exportedMethods = {
  async getrestaurantReviewsById(restaurantId) {
    
    if (restaurantId === undefined) throw "Invalid Value, Restaurant Id must be specified";
    
    const restaurantReviewsMapCollection = await restaurantReviewsMap();
    const restaurantReviews = await restaurantReviewsMapCollection.findOne({ restaurant_id: restaurantId });

    if (!restaurantReviews) throw "Restaurant not found";
    return restaurantReviews;
  },
  async addMaps(map) {
    const restaurantReviewsMapCollection = await restaurantReviewsMap();
    
    const newInsertInformation = await restaurantReviewsMapCollection.insertOne(map);
    if(newInsertInformation.insertedCount === 0) throw "Could not create a map";
    const newId = newInsertInformation.insertedId;
    return await this.getrestaurantReviewsById(map.restaurant_id);
  }
};

module.exports = exportedMethods;