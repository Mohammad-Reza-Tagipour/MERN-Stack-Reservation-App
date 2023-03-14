import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  // basically request what we are taking from user we can take any parameter like /:id or any query /:id?limit=5 or we can take body
  // basically it's gonna store our hotel information

  const newHotel = new Hotel(req.body);
  try {
    //is using the save() method to save a new hotel object to a database.
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/", async (req, res) => {
  try {
    const updateHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE

// GET

// GET ALL

export default router;
