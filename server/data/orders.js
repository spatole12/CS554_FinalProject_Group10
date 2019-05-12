const mongoCollections = require("../config/mongoCollections");
const orders = mongoCollections.orders;
const uuid = require("node-uuid");
const ObjectId = require('mongodb').ObjectId; 


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
  async getAllOrdersForRestaurant(restaurant_id) {
    
    const orderCollection = await orders();
    return await orderCollection.find({ restaurant_id: restaurant_id, completed: false }).toArray();
  },
  async getAllOrdersForUser(user_id) {
    //console.log(user_id);
    const orderCollection = await orders();
    return await orderCollection.find({ user_id: parseInt(user_id)}).toArray();
  },
  
  async getOrderById(id) {

    if (id === undefined) throw "Invalid Value, Order Id must be specified";

    const orderCollection = await orders();
    const order = await orderCollection.findOne({ _id: new ObjectId(id)});

    if (!order) throw "Order not found";
    return order;
  },
  async patchTask(id, patchData) {
    if (id === undefined) throw "Invalid Value, Order Id must be specified";
    if (Object.keys(patchData).length === 0) throw `You must provide atleast one field to patch data`;

    const orderCollection = await orders();
    const patchTaskData = {};

    if (patchData.completed !== undefined) {
      if (typeof patchData.completed !== "boolean") throw "Invalid Type, Completed must be a boolean"
      patchTaskData.completed = patchData.completed;
    }
    
    let patchCommand = {
      $set: patchTaskData
    };

    const query = {
      _id: new ObjectId(id)
    };

    const patchInfo = await orderCollection.updateOne(query, patchCommand);
    if (patchInfo.modifiedCount === 0) throw "Could not patch the order";

    return await this.getOrderById(id);
  }
};

module.exports = exportedMethods;