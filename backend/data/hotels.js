const hotels = [
  {
    name: "Grand Hotel",
    description:
      "A luxurious hotel with stunning views and top-notch amenities.",
    location: {
      address: "123 Grand St",
      city: "Los Angeles",
      state: "CA",
      country: "USA",
      zipCode: "90001",
    },
    rooms: [
      {
        roomType: "Deluxe",
        numberOfBeds: 2,
        pricePerNight: 200,
        amenities: ["WiFi", "TV", "Air Conditioning"],
        availability: true,
      },
      {
        roomType: "Suite",
        numberOfBeds: 3,
        pricePerNight: 350,
        amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar"],
        availability: true,
      },
    ],
    amenities: ["Pool", "Gym", "Spa"],
    images: ["image1.jpg", "image2.jpg"],
    rating: 4.5,
  },
  {
    name: "Cozy Inn",
    description:
      "A cozy place to stay with family-friendly amenities and great service.",
    location: {
      address: "456 Cozy Ave",
      city: "San Francisco",
      state: "CA",
      country: "USA",
      zipCode: "94103",
    },
    rooms: [
      {
        roomType: "Standard",
        numberOfBeds: 1,
        pricePerNight: 100,
        amenities: ["WiFi", "TV"],
        availability: true,
      },
      {
        roomType: "Family",
        numberOfBeds: 3,
        pricePerNight: 150,
        amenities: ["WiFi", "TV", "Air Conditioning"],
        availability: true,
      },
    ],
    amenities: ["Free Breakfast", "Parking", "WiFi"],
    images: ["image3.jpg", "image4.jpg"],
    rating: 4.0,
  },
];

export default hotels;
