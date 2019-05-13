const mongoCollections = require("../config/mongoCollections");
const reviews = mongoCollections.reviews;
const restaurantReviewsMap = mongoCollections.restaurantReviewsMap;
const restDetails = require("./restaurantDetails");
const uuid = require("node-uuid");

const exportedMethods = {
  async getAllReviewsForRestaurantById(restaurantId) {

    if (restaurantId === undefined) throw "Invalid Value, Restaurant Id must be specified";
    const restaurantReviewsCollection = await restaurantReviewsMap();
    const restaurantReviews = await restaurantReviewsCollection.findOne({ restaurant_id: restaurantId });

    const reviewsCollection = await reviews();

    let restaurantReviewsDetails =[];
    for(var i=0; i<restaurantReviews.reviews.length; i++){
      restaurantReviewsDetails.push(await this.getreviewById(restaurantReviews.reviews[i]));
    }

    return restaurantReviewsDetails;
  },
  async getReviewById(reviewId) {

    if (reviewId === undefined) throw "Invalid Value, review Id must be specified";
    const reviewsCollection = await reviews();
    const review = await reviewsCollection.findOne({ id: reviewId });

    if (!review) throw "review not found";
    return review;
  },
  async addReviews(review) {
    const reviewsCollection = await reviews();

    const newInsertInformation = await reviewsCollection.insertOne(review);
    if(newInsertInformation.insertedCount === 0) throw "Could not create a review";
    return await this.getReviewById(review.id);
  },



  async addRestaurantDetailsReview(reviewData) {
    console.log('service called', reviewData);
    const restaurantDet = await restDetails.getRestaurantDetailsById(reviewData.restaurant_id);
    // console.log('restaurantDet: ', restaurantDet);

    const reviews_of_rest = restaurantDet.reviews;

    const newReview = {
      "id": uuid(),
      "url": '',
      "text": reviewData.review,
      "rating": 5,
     "time_created": Date.now(),
     "user": {
      "id": reviewData.user_id,
      "profile_url": '',
      "image_url": '',
      "name": ''
    }
    };

    reviews_of_rest.push(newReview);
    const restData = await restDetails.updateRestaurantDetails(reviews_of_rest, reviewData.restaurant_id);

    return await restData;
  }
};

module.exports = exportedMethods;