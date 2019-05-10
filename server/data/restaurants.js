const mongoCollections = require("../config/mongoCollections");
const restaurants = mongoCollections.restaurants;
const uuid = require("node-uuid");

function intOrNaN(x) {
  return /^\d+$/.test(x) ? +x : NaN
}

const exportedMethods = {
  async getAllRestaurants(skip, limit) {
    if (skip === undefined) skip = 0;
    if (isNaN(intOrNaN(skip))) throw "Invalid Type, Skip value must be an integer";

    if (limit === undefined) limit = 20;
    if (isNaN(intOrNaN(limit))) throw "Invalid Type, Take value must be an integer";

    skip = intOrNaN(skip);
    limit = intOrNaN(limit);
    if (limit > 100) limit = 100;

    const restaurantsCollection = await restaurants();
    return await restaurantsCollection.find({}).skip(skip).limit(limit).toArray();
  },
  async getRestaurantById(id) {

    if (id === undefined) throw "Invalid Value, Restaurant Id must be specified";
    const restaurantsCollection = await restaurants();
    const restaurant = await restaurantsCollection.findOne({ _id: id });

    if (!restaurant) throw "Restaurant not found";
    return restaurant;
  },
  async addRestaurant(restaurant) {
    const restaurantsCollection = await restaurants();

    const newInsertInformation = await restaurantsCollection.insertOne(restaurant);
    if(newInsertInformation.insertedCount === 0) throw "Could not create a task";
    const newId = newInsertInformation.insertedId;
    return await this.getRestaurantById(newId);
  }/*,
  async updateTask(id, updatedTask) {
    if (id === undefined) throw "Invalid Value, Task Id must be specified";

    const taskCollection = await tasks();
    const updateTaskData = {};

    if (updatedTask.title === undefined || typeof updatedTask.title !== "string") throw "Invalid Type, Title must be provided as a string";
    if (updatedTask.description === undefined || typeof updatedTask.description !== "string") throw "Invalid Type, Description must be provided as a string";
    if (updatedTask.hoursEstimated === undefined || typeof updatedTask.hoursEstimated !== "number") throw "Invalid Type, Hours Estimated must be provided as a number";
    if (updatedTask.completed === undefined || typeof updatedTask.completed !== "boolean") throw "Invalid Type, Completed must be provided as a boolean";
    if (updatedTask.comments !== undefined) throw "Invalid Data, Comments can not be a updated";

    updateTaskData.title = updatedTask.title;
    updateTaskData.description = updatedTask.description;
    updateTaskData.hoursEstimated = updatedTask.hoursEstimated;
    updateTaskData.completed = updatedTask.completed;

    let currentTask = await taskCollection.findOne({ _id: id });
    updateTaskData.comments = currentTask.comments;

    let updateCommand = {
      $set: updateTaskData
    };

    const query = {
      _id: id
    };

    const updateInfo = await taskCollection.updateOne(query, updateCommand);
    if (updateInfo.modifiedCount === 0) throw "Could not update the task";

    return await this.getTaskById(id);
  },
  async patchTask(id, patchData) {
    if (id === undefined) throw "Invalid Value, Task Id must be specified";
    if (Object.keys(patchData).length === 0) throw `You must provide atleast one field to patch data`;

    const taskCollection = await tasks();
    const patchTaskData = {};

    if (patchData.title !== undefined) {
      if (typeof patchData.title !== "string") throw "Invalid Type, Title must be a string"
      patchTaskData.title = patchData.title;
    }
    if (patchData.description !== undefined) {
      if (typeof patchData.description !== "string") throw "Invalid Type, Description must be a string"
      patchTaskData.description = patchData.description;
    }
    if (patchData.hoursEstimated !== undefined) {
      if (typeof patchData.hoursEstimated !== "number") throw "Invalid Type, Hours Estimated must be a number"
      patchTaskData.hoursEstimated = patchData.hoursEstimated;
    }
    if (patchData.completed !== undefined) {
      if (typeof patchData.completed !== "boolean") throw "Invalid Type, Completed must be a boolean"
      patchTaskData.completed = patchData.completed;
    }
    if (patchData.comments !== undefined) throw "Invalid Data, Comments can not be a patched";

    let patchCommand = {
      $set: patchTaskData
    };

    const query = {
      _id: id
    };

    const patchInfo = await taskCollection.updateOne(query, patchCommand);
    if (patchInfo.modifiedCount === 0) throw "Could not patch the task";

    return await this.getTaskById(id);
  },
  async addCommentToTask(id, name, comment) {
    if (name === undefined || typeof name !== "string") throw "Invalid Type, Name must be provided as a string";
    if (comment === undefined || typeof comment !== "string") throw "Invalid Type, Comment must be provided as a string";
    
    const taskCollection = await tasks();

    let newComment = {
      _id: uuid.v4(),
      name: name,
      comment: comment
    };

    let postCommand = {
      $push: { comments: newComment }
    };

    const query = {
      _id: id
    };

    const commentUpdateInfo = await taskCollection.updateOne(query, postCommand)
    if (commentUpdateInfo.modifiedCount === 0) throw `Could not add comments for the task with id ${id}`;

    return await this.getTaskById(id);
  },
  async deleteCommentFromTask(taskId, commentId) {
    if (taskId === undefined) throw "Invalid Value, Task Id must be specified";
    if (commentId === undefined) throw "Invalid Value, Comment Id must be specified";

    const taskCollection = await tasks();

    let deleteCommand = {
      $pull: { comments: { _id: commentId } }
    };

    const commentDeleteInfo = await taskCollection.updateOne({ _id: taskId }, deleteCommand)
    if (commentDeleteInfo.modifiedCount === 0) throw `Could not delete comment with id ${commentId} for the task with id ${taskId}`;

    return await this.getTaskById(taskId);
  }*/
};

module.exports = exportedMethods;