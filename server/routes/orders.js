const express = require("express");
const router = express.Router();
const data = require("../data");
const ordersData = data.orders;

router.get("/", async (req, res) => {
  try {
    const orderList = await ordersData.getAllOrders();
    
    res.json(orderList);
  } catch (e) {
    res.status(422).json({ error: e });
  }
});

router.post("/", async (req, res) => {
  const orderPostData = req.body;
  try {
    
    const newOrder = await ordersData.addOrder(orderPostData.posted_data);

    res.json(newOrder);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});



module.exports = router;