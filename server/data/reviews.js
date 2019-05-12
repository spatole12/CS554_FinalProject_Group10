const mongoCollections = require("../config/mongoCollections");
const reviews = mongoCollections.reviews;
// const restaurantDetails = mongoCollections.restaurantDetails;
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
    
    // var date = new Date();
    const newReview = {
      "id": uuid(),
    "url": "https://www.yelp.com/biz/the-halal-guys-new-york-2?adjust_creative=RaHE0BYRotui1mKSr45cEw&hrid=bN4I_mmp_0IkdDclGdV5OQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_reviews&utm_source=RaHE0BYRotui1mKSr45cEw",
    "text": reviewData.review,
    "rating": 5,
    "time_created": Date.now(),
    "user": {
      "id": reviewData.user_id,
      "profile_url": "https://www.yelp.com/user_details?userid=mgytZAasaiBf-END4aZD9w",
      "image_url": "https://s3-media1.fl.yelpcdn.com/photo/5X7P5P58Utr1_ePDxnFj6A/o.jpg",
      "name": "Cat N."
    }
    };

    reviews_of_rest.push(newReview);
    restaurantDet.reviews = reviews_of_rest;

    const restData = restDetails.updateRestaurantDetails(reviews_of_rest, reviewData.restaurant_id);
    console.log('Data added: ', restData);


    return '';
  }
};

module.exports = exportedMethods;