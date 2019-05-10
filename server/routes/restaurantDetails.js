const express = require("express");
const router = express.Router();
const data = require("../data");
const restaurantDetailsData = data.restaurantDetails;



router.get("/:id", async (req, res) => {
  try {
    
    const restaurantDetail = await restaurantDetailsData.getRestaurantDetailsById(req.params.id);
    res.json(restaurantDetail);
  } catch (e) {
    console.log(e);
    res.status(404).json({ error: e });
  }
});

module.exports = router;