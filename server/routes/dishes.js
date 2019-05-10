const express = require("express");
const router = express.Router();
const data = require("../data");
const dishesData = data.dishes;

router.get("/:restaurantId", async (req, res) => {
  try {
    const dishesList = await dishesData.getAllDishesForRestaurantById(req.params.restaurantId);
    
    res.json(dishesList);
  } catch (e) {
    res.status(422).json({ error: e });
  }
});



module.exports = router;