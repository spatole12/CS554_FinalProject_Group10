const mongoCollections = require("../config/mongoCollections");
const orders = mongoCollections.orders;
const uuid = require("node-uuid");



const exportedMethods = {
  async getAllOrders() {
    const orderCollection = await orders();
    return await orderCollection.find({}).toArray();
  },
  async addOrder(newOrder) {
    
    const orderCollection = await orders();
  
    const newInsertInformation = await orderCollection.insertOne(newOrder);
    if(newInsertInformation.insertedCount === 0) throw "Could not create a order";
    const newId = newInsertInformation.insertedId;
    return await this.getOrderById(newId);
  },
  async getAllOrdersForUser(user_id) {
    //console.log(user_id);
    const orderCollection = await orders();
    return await orderCollection.find({ user_id: parseInt(user_id)}).toArray();
  },
  
  async getOrderById(id) {

    if (id === undefined) throw "Invalid Value, Order Id must be specified";
    const orderCollection = await orders();
    const order = await orderCollection.findOne({ _id: id });

    if (!order) throw "Order not found";
    return order;
  }
};

module.exports = exportedMethods;