const mongoCollections = require("../config/mongoCollections");
const reservations = mongoCollections.reservations;
const uuid = require("node-uuid");
const ObjectId = require('mongodb').ObjectId; 


const exportedMethods = {
  async getAllReservations() {
    const reservationCollection = await reservations();
    return await reservationCollection.find({}).toArray();
  },
  async addReservation(newReservation) {
    
    const reservationCollection = await reservations();
  
    const newInsertInformation = await reservationCollection.insertOne(newReservation);
    if(newInsertInformation.insertedCount === 0) throw "Could not create a reservation";
    const newId = newInsertInformation.insertedId;
    return await this.getReservationById(newId);
  },
  async getAllReservationsForRestaurant(restaurant_id) {
    
    const reservationCollection = await reservations();
    return await reservationCollection.find({ restaurant_id: restaurant_id, status: "Pending" }).toArray();
  },
  async getAllReservationsForUser(user_id) {
    
    const reservationCollection = await reservations();
    return await reservationCollection.find({ user_id: parseInt(user_id) }).toArray();
  },
  async getReservationById(id) {

    if (id === undefined) throw "Invalid Value, Reservation Id must be specified";

    const reservationCollection = await reservations();
    const reservation = await reservationCollection.findOne({ _id: new ObjectId(id)});

    if (!reservation) throw "Reservation not found";
    return reservation;
  },
  async patchTask(id, patchData) {
    if (id === undefined) throw "Invalid Value, Reservation Id must be specified";
    if (Object.keys(patchData).length === 0) throw `You must provide atleast one field to patch data`;

    const reservationCollection = await reservations();
    const patchReservationData = {};

    if (patchData.status !== undefined) {
      if (typeof patchData.status !== "string") throw "Invalid Type, Status must be a String"
      patchReservationData.status = patchData.status;
    }
    
    let patchCommand = {
      $set: patchReservationData
    };

    const query = {
      _id: new ObjectId(id)
    };

    const patchInfo = await reservationCollection.updateOne(query, patchCommand);
    if (patchInfo.modifiedCount === 0) throw "Could not patch the reservation";

    return await this.getReservationById(id);
  }
};

module.exports = exportedMethods;