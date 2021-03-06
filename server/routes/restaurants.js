const express = require("express");
const router = express.Router();
const data = require("../data");
const restaurantsData = data.restaurants;

router.get("/", async (req, res) => {
  try {
    const restaurantList = await restaurantsData.getAllRestaurants(req.query.offset, req.query.limit);
    
    res.json(restaurantList);
  } catch (e) {
    res.status(422).json({ error: e });
  }
});


module.exports = router;