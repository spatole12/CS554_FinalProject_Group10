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
  async getOrderById(id) {

    if (id === undefined) throw "Invalid Value, Order Id must be specified";
    const orderCollection = await orders();
    const order = await orderCollection.findOne({ _id: id });

    if (!order) throw "Order not found";
    return order;
  }
};

module.exports = exportedMethods;