const dbConnection = require("./mongoConnection");

const getCollectionFn = collection => {
  let _col = undefined;

  return async () => {
    if (!_col) {
      const db = await dbConnection();
      _col = await db.collection(collection);
    }

    return _col;
  };
};

module.exports = {
  restaurants: getCollectionFn("restaurants"),
  restaurantDetails: getCollectionFn("restaurantDetails"),
  restaurantDishesMap: getCollectionFn("restaurantDishesMap"),
  dishes: getCollectionFn("dishes"),
  orders: getCollectionFn("orders")
};
