const restaurantsRoutes = require("./restaurants");
const restaurantDetailsRoutes = require("./restaurantDetails");
const dishesRoutes = require("./dishes");
const ordersRoutes = require("./orders");
const reservationRoutes = require("./reservations");
const restaurantPopularRoutes = require("./restaurantPopular");
const elasticSearchRoutes = require("./elasticSearch");

const constructorMethod = app => {
  app.use("/restaurants", restaurantsRoutes);
  app.use("/restaurantDetails", restaurantDetailsRoutes);
  app.use("/restaurant/dishes", dishesRoutes);
  app.use("/orders", ordersRoutes);
  app.use("/reservations", reservationRoutes);
  app.use("/restaurantPopular", restaurantPopularRoutes);
  app.use("/elasticSearch", elasticSearchRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
