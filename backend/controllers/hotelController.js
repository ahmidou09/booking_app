import asyncHandler from "../middleware/asyncHandler.js";
import Hotel from "../models/hotelModel.js";

// @desc    Get all hotels
// @route   GET /api/hotels
// @access  Public
const getHotels = asyncHandler(async (req, res) => {
  const hotels = await Hotel.find({});
  res.status(200).json(hotels);
});

// @desc    Get hotel by ID
// @route   GET /api/hotels/:id
// @access  Public
const getHotelById = asyncHandler(async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);
  if (hotel) {
    res.status(200).json(hotel);
  } else {
    res.status(404);
    throw new Error("Hotel not found");
  }
});

// @desc    Create a hotel
// @route   POST /api/hotels
// @access  Private/Admin
const createHotel = asyncHandler(async (req, res) => {
  const { name, description, location, rooms, amenities, images } = req.body;

  const hotel = new Hotel({
    name,
    description,
    location,
    rooms,
    amenities,
    images,
  });

  const createdHotel = await hotel.save();
  res.status(201).json(createdHotel);
});

// @desc    Update a hotel
// @route   PUT /api/hotels/:id
// @access  Private/Admin
const updateHotel = asyncHandler(async (req, res) => {
  const { name, description, location, rooms, amenities, images } = req.body;

  const hotel = await Hotel.findById(req.params.id);

  if (hotel) {
    hotel.name = name || hotel.name;
    hotel.description = description || hotel.description;
    hotel.location = location || hotel.location;
    hotel.rooms = rooms || hotel.rooms;
    hotel.amenities = amenities || hotel.amenities;
    hotel.images = images || hotel.images;

    const updatedHotel = await hotel.save();
    res.status(200).json(updatedHotel);
  } else {
    res.status(404);
    throw new Error("Hotel not found");
  }
});

// @desc    Delete a hotel
// @route   DELETE /api/hotels/:id
// @access  Private/Admin
const deleteHotel = asyncHandler(async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);

  if (hotel) {
    await hotel.deleteOne();
    res.status(200).json({ message: "Hotel deleted" });
  } else {
    res.status(404);
    throw new Error("Hotel not found");
  }
});

// @desc    Search hotels by city
// @route   GET /api/hotels/search
// @access  Public
const searchHotels = asyncHandler(async (req, res) => {
  const { city } = req.query;
  if (city) {
    const hotels = await Hotel.find({
      "location.city": { $regex: city, $options: "i" },
    });
    res.status(200).json(hotels);
  } else {
    res.status(400);
    throw new Error("City is required");
  }
});

export {
  getHotels,
  getHotelById,
  createHotel,
  updateHotel,
  deleteHotel,
  searchHotels,
};
