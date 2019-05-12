const express = require("express");
const router = express.Router();

const bluebird = require("bluebird");
const redis = require("redis");
const client = redis.createClient();
const flat = require("flat");
const unflatten = flat.unflatten;

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

router.get("/", async (req, res) => {
  try {
    
    let restaurantsList = (await client.lrangeAsync("popularRestaurants", 0, 4)).map(JSON.parse);
    
  res.json(restaurantsList);
  } catch (e) {
    console.log(e);
    res.status(404).json({ error: e });
  }
});

module.exports = router;