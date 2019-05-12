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


router.get("/restaurantOrders/:restaurant_id", async (req, res) => {
  try {
    const orderList = await ordersData.getAllOrdersForRestaurant(req.params.restaurant_id);
    
    res.json(orderList);
  } catch (e) {
    res.status(422).json({ error: e });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const order = await ordersData.getOrderById(req.params.id);
    
    res.json(order);
  } catch (e) {
    res.status(422).json({ error: e });
  }
});

router.patch("/:id", async (req, res) => {
  const PatchTaskData = req.body;

  if (!PatchTaskData) {
    res.status(400).json({ error: "You must provide data to patch task" });
  }

  try {
    const order = await ordersData.getOrderById(req.params.id);
    //console.log("mansi = "+order);
  } catch (e) {
    res.status(404).json({ error: e });
  }

  try {
    const OrderDetails = await ordersData.patchTask(req.params.id, PatchTaskData.patch_data);
    res.json(OrderDetails);
  } catch (e) {
    res.status(500).json({ error: e });
  }

});

module.exports = router;