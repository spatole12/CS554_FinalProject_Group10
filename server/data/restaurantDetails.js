const mongoCollections = require("../config/mongoCollections");
const restaurantDetails = mongoCollections.restaurantDetails;
const uuid = require("node-uuid");
const ObjectId = require('mongodb').ObjectID;

const exportedMethods = {
  /*async getAllRestaurants(skip, limit) {
    if (skip === undefined) skip = 0;
    if (isNaN(intOrNaN(skip))) throw "Invalid Type, Skip value must be an integer";

    if (limit === undefined) limit = 20;
    if (isNaN(intOrNaN(limit))) throw "Invalid Type, Take value must be an integer";

    skip = intOrNaN(skip);
    limit = intOrNaN(limit);
    if (limit > 100) limit = 100;

    const restaurantsCollection = await restaurants();
    return await restaurantsCollection.find({}).skip(skip).limit(limit).toArray();
  },*/
  async getRestaurantDetailsById(id) {

    if (id === undefined) throw "Invalid Value, Restaurant Id must be specified";
    const restaurantDetailsCollection = await restaurantDetails();
    const restaurant = await restaurantDetailsCollection.findOne({ id: id });

    if (!restaurant) throw "Restaurant not found";
    return restaurant;
  },
  async addRestaurantDetails(restaurantDetail) {
    const restaurantDetailsCollection = await restaurantDetails();

    const newInsertInformation = await restaurantDetailsCollection.insertOne(restaurantDetail);
    if(newInsertInformation.insertedCount === 0) throw "Could not create a restaurant detail";
    const newId = newInsertInformation.insertedId;
    return await this.getRestaurantDetailsById(restaurantDetail.id);
  },
  async updateRestaurantDetails(restaurantReviews, id) {
    const restaurantDetailsCollection = await restaurantDetails();

    // const newInsert = await restaurantDetailsCollection.findOneAndUpdate({_id: new ObjectId(id)}, {$set: {reviews: restaurantDetail}}, {upsert: true}, function(err,doc) {
    //   if (err) { console.log(err); }
    //   else { console.log("Updated", newInsert); }
    // });  

    //need help here. need to update the restaurantDetails collection with the new reviews. find by id and update the reviews part
    const newInsert = await restaurantDetailsCollection.updateOne({_id: new ObjectId(id)}, {$set: {reviews: restaurantReviews}}, function(err,doc) {
      if (err) { console.log(err); }
      else { console.log("Updated", newInsert); }
    });  

    console.log('newInsert: ', newInsert.id);
    return await this.getRestaurantDetailsById(newInsert.id);
  }
};

module.exports = exportedMethods;