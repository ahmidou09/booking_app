import express from "express";
const router = express.Router();
import {
  getHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel,
  searchHotels,
} from "../controllers/hotelController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// @desc    Get all hotels and create a hotel
// @route   GET /api/hotels OR POST /api/hotels
// @access  Public for GET, Private/Admin for POST
router.route("/").get(getHotels).post(protect, admin, createHotel);

// @desc    Search hotels by city
// @route   GET /api/hotels/search
// @access  Public
router.route("/search").get(searchHotels);

// @desc    Get, update, or delete a hotel by ID
// @route   GET /api/hotels/:id OR PUT /api/hotels/:id OR DELETE /api/hotels/:id
// @access  Public for GET, Private/Admin for PUT and DELETE
router
  .route("/:id")
  .get(getHotelById)
  .put(protect, admin, updateHotel)
  .delete(protect, admin, deleteHotel);

export default router;
