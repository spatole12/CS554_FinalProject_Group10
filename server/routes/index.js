const restaurantsRoutes = require("./restaurants");
const restaurantDetailsRoutes = require("./restaurantDetails");
const dishesRoutes = require("./dishes");
const ordersRoutes = require("./orders");

const constructorMethod = app => {
  app.use("/restaurants", restaurantsRoutes);
  app.use("/restaurantDetails", restaurantDetailsRoutes);
  app.use("/restaurant/dishes", dishesRoutes);
  app.use("/orders", ordersRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
