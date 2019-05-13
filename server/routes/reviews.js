const express = require("express");
const router = express.Router();
const data = require("../data");
const reviewsData = data.reviews;

router.get("/", async (req, res) => {
  try {
    console.log('Calling reviews');
    const restaurantList = await reviewsData.getAllReviewsForRestaurantById(req.params.restaurantId);
    
    res.json(restaurantList);
  } catch (e) {
    res.status(422).json({ error: e });
  }
});


router.get("/:restaurantId", async (req, res) => {
  try {
    const reviewsList = await reviewsData.getAllReviewsForRestaurantById(req.params.restaurantId);
    
    res.json(reviewsList);
  } catch (e) {
    res.status(422).json({ error: e });
  }
});

router.post("/", async (req, res) => {
  const postedReview = req.body;
  try {
    console.log('postedReview: ', postedReview);
    const newReview = await reviewsData.addRestaurantDetailsReview(postedReview.posted_data);
   
     res.json(await newReview);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});


module.exports = router;