const express = require("express");
const router = express.Router();
const data = require("../data");
const restaurantDetailsData = data.restaurantDetails;

const bluebird = require("bluebird");
const redis = require("redis");
const client = redis.createClient();
const flat = require("flat");
const unflatten = flat.unflatten;

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

router.get("/:id", async (req, res) => {
  try {
    
    const restaurantDetail = await restaurantDetailsData.getRestaurantDetailsById(req.params.id);
    let idExistsInCache = await client.existsAsync(req.params.id);

  if (!idExistsInCache) {
    await client.lpushAsync("popularRestaurants", JSON.stringify(restaurantDetail));
  }
    res.json(restaurantDetail);
  } catch (e) {
    console.log(e);
    res.status(404).json({ error: e });
  }
});



module.exports = router;