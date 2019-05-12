const express = require("express");
const router = express.Router();
const data = require("../data");
const elasticSearchData = data.elasticSearch;

router.get("/", async (req, res) => {
  try {
    const index = await elasticSearchData.createIndex("restaurants");
    
    res.json(index);
  } catch (e) {
    res.status(422).json({ error: e });
  }
});

router.get("/:searchTerm", async (req, res) => {
  try {
    const restaurantList = await elasticSearchData.search(req.params.searchTerm);
    console.log(restaurantList);
    res.json(restaurantList);
  } catch (e) {
    console.log(e);
    res.status(422).json({ error: e });
  }
});


module.exports = router;