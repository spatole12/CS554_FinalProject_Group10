const express = require("express");
const router = express.Router();
const data = require("../data");
const reservationsData = data.reservations;

router.get("/", async (req, res) => {
  try {
    const reservationsList = await reservationsData.getAllReservations();
    
    res.json(reservationsList);
  } catch (e) {
    res.status(422).json({ error: e });
  }
});

router.post("/", async (req, res) => {
  const reservationPostData = req.body;
  try {
    
    const newReservation = await reservationsData.addReservation(reservationPostData);

    res.json(newReservation);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});


router.get("/restaurantReservations/:restaurant_id", async (req, res) => {
  try {
    const reservationList = await reservationsData.getAllReservationsForRestaurant(req.params.restaurant_id);
    
    res.json(reservationList);
  } catch (e) {
    res.status(422).json({ error: e });
  }
});

router.get("/restaurantReservations/user/:user_id", async (req, res) => {
  try {
    const reservationList = await reservationsData.getAllReservationsForUser(req.params.user_id);
    
    res.json(reservationList);
  } catch (e) {
    res.status(422).json({ error: e });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const reservation = await reservationsData.getReservationById(req.params.id);
    
    res.json(reservation);
  } catch (e) {
    res.status(422).json({ error: e });
  }
});

router.patch("/:id", async (req, res) => {
  const PatchReservationData = req.body;

  if (!PatchReservationData) {
    res.status(400).json({ error: "You must provide data to patch reservation" });
  }

  try {
    const reservation = await reservationsData.getReservationById(req.params.id);
    
  } catch (e) {
    res.status(404).json({ error: e });
  }

  try {
    const ReservationDetails = await reservationsData.patchTask(req.params.id, PatchReservationData);
    res.json(ReservationDetails);
  } catch (e) {
    res.status(500).json({ error: e });
  }

});

module.exports = router;