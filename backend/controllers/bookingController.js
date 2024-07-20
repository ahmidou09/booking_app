import asyncHandler from "../middleware/asyncHandler.js";
import Booking from "../models/bookingModel.js";
import Hotel from "../models/hotelModel.js";

// @desc    Create a new booking
// @route   POST /api/bookings
// @access  Private
const createBooking = asyncHandler(async (req, res) => {
  const { hotelId, roomType, checkInDate, checkOutDate, guests, totalPrice } =
    req.body;

  const hotel = await Hotel.findById(hotelId);

  if (hotel) {
    const booking = new Booking({
      hotel: hotelId,
      user: req.user._id,
      roomType,
      checkInDate,
      checkOutDate,
      guests,
      totalPrice,
    });

    const createdBooking = await booking.save();
    res.status(201).json(createdBooking);
  } else {
    res.status(404);
    throw new Error("Hotel not found");
  }
});

// @desc    Get user bookings
// @route   GET /api/bookings/mybookings
// @access  Private
const getUserBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id }).populate(
    "hotel",
    "name location"
  );
  res.status(200).json(bookings);
});

// @desc    Get booking by ID
// @route   GET /api/bookings/:id
// @access  Private
const getBookingById = asyncHandler(async (req, res) => {
  const booking = await Booking.findById(req.params.id).populate(
    "hotel",
    "name location"
  );

  if (booking) {
    res.status(200).json(booking);
  } else {
    res.status(404);
    throw new Error("Booking not found");
  }
});

// @desc    Get all bookings
// @route   GET /api/bookings
// @access  Private/Admin
const getBookings = asyncHandler(async (req, res) => {
  const bookings = await Booking.find({}).populate("hotel", "name location");
  res.status(200).json(bookings);
});

export { createBooking, getUserBookings, getBookingById, getBookings };
