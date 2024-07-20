import express from "express";
const router = express.Router();
import {
  createBooking,
  getUserBookings,
  getBookingById,
  getBookings,
} from "../controllers/bookingController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Private
router.route("/").post(protect, createBooking);

// @desc    Get logged-in user's bookings
// @route   GET /api/bookings/mybookings
// @access  Private
router.route("/mybookings").get(protect, getUserBookings);

// @desc    Get booking by ID
// @route   GET /api/bookings/:id
// @access  Private
router.route("/:id").get(protect, getBookingById);

// @desc    Get all bookings
// @route   GET /api/bookings
// @access  Private/Admin
router.route("/").get(protect, admin, getBookings);

export default router;
