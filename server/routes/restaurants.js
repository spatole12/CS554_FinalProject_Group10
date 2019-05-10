const express = require("express");
const router = express.Router();
const data = require("../data");
const restaurantsData = data.restaurants;

router.get("/", async (req, res) => {
  try {
    const restaurantList = await restaurantsData.getAllRestaurants(req.query.offset, req.query.limit);
    
    res.json(restaurantList);
  } catch (e) {
    res.status(422).json({ error: e });
  }
});

/*router.get("/:id", async (req, res) => {
  try {
    const task = await taskData.getTaskById(req.params.id);
    res.json(task);
  } catch (e) {
    res.status(404).json({ error: e });
  }
});

router.post("/", async (req, res) => {
  const taskPostData = req.body;
  try {
    const { title, description, hoursEstimated, completed, comments } = taskPostData;
    const newTask = await taskData.addTask(title, description, hoursEstimated, completed, comments);

    res.json(newTask);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.put("/:id", async (req, res) => {
  const updateTaskData = req.body;
  try {
    const task = await taskData.getTaskById(req.params.id);
  } catch (e) {
    res.status(404).json({ error: e });
  }

  try {
    const updatedTaskDetails = await taskData.updateTask(req.params.id, updateTaskData);
    res.json(updatedTaskDetails);
  } catch (e) {
    res.status(500).json({ error: e });
  }

});

router.patch("/:id", async (req, res) => {
  const PatchTaskData = req.body;

  if (!PatchTaskData) {
    res.status(400).json({ error: "You must provide data to patch task" });
  }

  try {
    const task = await taskData.getTaskById(req.params.id);
  } catch (e) {
    res.status(404).json({ error: e });
  }

  try {
    const PatchTaskDetails = await taskData.patchTask(req.params.id, PatchTaskData);
    res.json(PatchTaskDetails);
  } catch (e) {
    res.status(500).json({ error: e });
  }

});

router.post("/:id/comments", async (req, res) => {
  const commentPostData = req.body;

  try {
    const task = await taskData.getTaskById(req.params.id);
  } catch (e) {
    res.status(404).json({ error: e });
  }

  try {
    const { name, comment } = commentPostData;
    const newComment = await taskData.addCommentToTask(req.params.id, name, comment);
    
    res.json(newComment);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.delete("/:taskId/:commentId", async (req, res) => {
  try {
    const task = await taskData.getTaskById(req.params.taskId);
  } catch (e) {
    res.status(404).json({ error: e });
  }

  try {
    const newTask = await taskData.deleteCommentFromTask(req.params.taskId, req.params.commentId);
    res.json(newTask);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});*/

module.exports = router;