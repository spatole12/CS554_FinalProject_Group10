const restaurantsRoutes = require("./restaurants");
const restaurantDetailsRoutes = require("./restaurantDetails");

const constructorMethod = app => {
  app.use("/restaurants", restaurantsRoutes);
  app.use("/restaurantDetails", restaurantDetailsRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
