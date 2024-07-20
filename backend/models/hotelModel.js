import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  roomType: { type: String, required: true },
  numberOfBeds: { type: Number, required: true },
  pricePerNight: { type: Number, required: true },
  amenities: [String],
  availability: { type: Boolean, default: true },
});

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  location: {
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    zipCode: { type: String, required: true },
  },
  rooms: [roomSchema],
  amenities: [String],
  images: [String],
  rating: { type: Number, default: 0 },
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
  createdAt: { type: Date, default: Date.now },
});

const Hotel = mongoose.model("Hotel", hotelSchema);
export default Hotel;
