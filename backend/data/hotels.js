const hotels = [
  {
    name: "Grand Hotel",
    description:
      "A luxurious hotel with stunning views and top-notch amenities.",
    location: {
      address: "123 Grand St",
      city: "Rabat",
      state: "CA",
      country: "Morocco",
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
    images: [
      "https://picsum.photos/200/300?random=19",
      "https://picsum.photos/200/300?random=2",
      "https://picsum.photos/200/300?random=3",
      "https://picsum.photos/200/300?random=4",
      "https://picsum.photos/200/300?random=5",
      "https://picsum.photos/200/300?random=6",
      "https://picsum.photos/200/300?random=7",
      "https://picsum.photos/200/300?random=8",
      "https://picsum.photos/200/300?random=9",
    ],
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
    images: [
      "https://picsum.photos/200/300?random=10",
      "https://picsum.photos/200/300?random=2",
      "https://picsum.photos/200/300?random=3",
      "https://picsum.photos/200/300?random=4",
      "https://picsum.photos/200/300?random=5",
      "https://picsum.photos/200/300?random=6",
      "https://picsum.photos/200/300?random=7",
      "https://picsum.photos/200/300?random=8",
      "https://picsum.photos/200/300?random=9",
    ],
    rating: 4.0,
  },
  {
    name: "Beachside Resort",
    description: "A beautiful resort by the beach with stunning ocean views.",
    location: {
      address: "789 Beach Blvd",
      city: "Miami",
      state: "FL",
      country: "USA",
      zipCode: "33101",
    },
    rooms: [
      {
        roomType: "Ocean View",
        numberOfBeds: 2,
        pricePerNight: 250,
        amenities: ["WiFi", "TV", "Air Conditioning", "Balcony"],
        availability: true,
      },
      {
        roomType: "Penthouse",
        numberOfBeds: 4,
        pricePerNight: 500,
        amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar", "Balcony"],
        availability: true,
      },
    ],
    amenities: ["Pool", "Beach Access", "Spa"],
    images: [
      "https://picsum.photos/200/300?random=1",
      "https://picsum.photos/200/300?random=2",
      "https://picsum.photos/200/300?random=3",
      "https://picsum.photos/200/300?random=4",
      "https://picsum.photos/200/300?random=5",
      "https://picsum.photos/200/300?random=6",
      "https://picsum.photos/200/300?random=7",
      "https://picsum.photos/200/300?random=8",
      "https://picsum.photos/200/300?random=9",
    ],
    rating: 4.7,
  },
  {
    name: "Mountain Lodge",
    description: "A charming lodge in the mountains with cozy cabins.",
    location: {
      address: "321 Mountain Rd",
      city: "Rabat",
      state: "MO",
      country: "Morocco",
      zipCode: "81611",
    },
    rooms: [
      {
        roomType: "Cabin",
        numberOfBeds: 2,
        pricePerNight: 180,
        amenities: ["WiFi", "Fireplace"],
        availability: true,
      },
      {
        roomType: "Lodge Suite",
        numberOfBeds: 3,
        pricePerNight: 300,
        amenities: ["WiFi", "TV", "Fireplace", "Mini Bar"],
        availability: true,
      },
    ],
    amenities: ["Hot Tub", "Ski Access", "Hiking Trails"],
    images: [
      "https://picsum.photos/200/300?random=11",
      "https://picsum.photos/200/300?random=2",
      "https://picsum.photos/200/300?random=3",
      "https://picsum.photos/200/300?random=4",
      "https://picsum.photos/200/300?random=5",
      "https://picsum.photos/200/300?random=6",
      "https://picsum.photos/200/300?random=7",
      "https://picsum.photos/200/300?random=8",
      "https://picsum.photos/200/300?random=9",
    ],
    rating: 4.6,
  },
  {
    name: "City Central Hotel",
    description:
      "A modern hotel in the heart of the city with excellent amenities.",
    location: {
      address: "987 City Center",
      city: "New York",
      state: "NY",
      country: "USA",
      zipCode: "10001",
    },
    rooms: [
      {
        roomType: "Standard",
        numberOfBeds: 1,
        pricePerNight: 220,
        amenities: ["WiFi", "TV", "Air Conditioning"],
        availability: true,
      },
      {
        roomType: "Executive Suite",
        numberOfBeds: 2,
        pricePerNight: 400,
        amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar"],
        availability: true,
      },
    ],
    amenities: ["Gym", "Business Center", "Restaurant"],
    images: [
      "https://picsum.photos/200/300?random=12",
      "https://picsum.photos/200/300?random=2",
      "https://picsum.photos/200/300?random=3",
      "https://picsum.photos/200/300?random=4",
      "https://picsum.photos/200/300?random=5",
      "https://picsum.photos/200/300?random=6",
      "https://picsum.photos/200/300?random=7",
      "https://picsum.photos/200/300?random=8",
      "https://picsum.photos/200/300?random=9",
    ],
    rating: 4.3,
  },
  {
    name: "Countryside Inn",
    description: "A peaceful inn in the countryside with charming rooms.",
    location: {
      address: "654 Countryside Ln",
      city: "Nashville",
      state: "TN",
      country: "USA",
      zipCode: "37201",
    },
    rooms: [
      {
        roomType: "Standard",
        numberOfBeds: 1,
        pricePerNight: 120,
        amenities: ["WiFi", "TV"],
        availability: true,
      },
      {
        roomType: "Deluxe",
        numberOfBeds: 2,
        pricePerNight: 180,
        amenities: ["WiFi", "TV", "Air Conditioning"],
        availability: true,
      },
    ],
    amenities: ["Free Breakfast", "Garden", "WiFi"],
    images: [
      "https://picsum.photos/200/300?random=13",
      "https://picsum.photos/200/300?random=2",
      "https://picsum.photos/200/300?random=3",
      "https://picsum.photos/200/300?random=4",
      "https://picsum.photos/200/300?random=5",
      "https://picsum.photos/200/300?random=6",
      "https://picsum.photos/200/300?random=7",
      "https://picsum.photos/200/300?random=8",
      "https://picsum.photos/200/300?random=9",
    ],
    rating: 4.2,
  },
  {
    name: "Lakeview Hotel",
    description: "A serene hotel by the lake with picturesque views.",
    location: {
      address: "987 Lake St",
      city: "Seattle",
      state: "WA",
      country: "USA",
      zipCode: "98101",
    },
    rooms: [
      {
        roomType: "Lake View",
        numberOfBeds: 2,
        pricePerNight: 240,
        amenities: ["WiFi", "TV", "Air Conditioning", "Balcony"],
        availability: true,
      },
      {
        roomType: "Presidential Suite",
        numberOfBeds: 3,
        pricePerNight: 600,
        amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar", "Balcony"],
        availability: true,
      },
    ],
    amenities: ["Pool", "Gym", "Restaurant"],
    images: [
      "https://picsum.photos/200/300?random=14",
      "https://picsum.photos/200/300?random=2",
      "https://picsum.photos/200/300?random=3",
      "https://picsum.photos/200/300?random=4",
      "https://picsum.photos/200/300?random=5",
      "https://picsum.photos/200/300?random=6",
      "https://picsum.photos/200/300?random=7",
      "https://picsum.photos/200/300?random=8",
      "https://picsum.photos/200/300?random=9",
    ],
    rating: 4.8,
  },
  {
    name: "Desert Oasis",
    description: "A unique hotel in the desert with luxurious amenities.",
    location: {
      address: "123 Desert Rd",
      city: "Phoenix",
      state: "AZ",
      country: "USA",
      zipCode: "85001",
    },
    rooms: [
      {
        roomType: "Standard",
        numberOfBeds: 1,
        pricePerNight: 150,
        amenities: ["WiFi", "TV", "Air Conditioning"],
        availability: true,
      },
      {
        roomType: "Luxury Suite",
        numberOfBeds: 2,
        pricePerNight: 300,
        amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar"],
        availability: true,
      },
    ],
    amenities: ["Pool", "Spa", "Restaurant"],
    images: [
      "https://picsum.photos/200/300?random=15",
      "https://picsum.photos/200/300?random=2",
      "https://picsum.photos/200/300?random=3",
      "https://picsum.photos/200/300?random=4",
      "https://picsum.photos/200/300?random=5",
      "https://picsum.photos/200/300?random=6",
      "https://picsum.photos/200/300?random=7",
      "https://picsum.photos/200/300?random=8",
      "https://picsum.photos/200/300?random=9",
    ],
    rating: 4.4,
  },
  {
    name: "Historic Hotel",
    description: "A historic hotel with elegant rooms and classic decor.",
    location: {
      address: "456 History Ln",
      city: "Boston",
      state: "MA",
      country: "USA",
      zipCode: "02101",
    },
    rooms: [
      {
        roomType: "Classic Room",
        numberOfBeds: 1,
        pricePerNight: 200,
        amenities: ["WiFi", "TV", "Air Conditioning"],
        availability: true,
      },
      {
        roomType: "Heritage Suite",
        numberOfBeds: 2,
        pricePerNight: 350,
        amenities: ["WiFi", "TV", "Air Conditioning", "Mini Bar"],
        availability: true,
      },
    ],
    amenities: ["Gym", "Restaurant", "WiFi"],
    images: [
      "https://picsum.photos/200/300?random=16",
      "https://picsum.photos/200/300?random=2",
      "https://picsum.photos/200/300?random=3",
      "https://picsum.photos/200/300?random=4",
      "https://picsum.photos/200/300?random=5",
      "https://picsum.photos/200/300?random=6",
      "https://picsum.photos/200/300?random=7",
      "https://picsum.photos/200/300?random=8",
      "https://picsum.photos/200/300?random=9",
    ],
    rating: 4.5,
  },
  {
    name: "Island Paradise",
    description:
      "A tropical paradise on a private island with luxurious villas.",
    location: {
      address: "789 Island Dr",
      city: "Rabat",
      state: "MO",
      country: "Morocco",
      zipCode: "96801",
    },
    rooms: [
      {
        roomType: "Villa",
        numberOfBeds: 2,
        pricePerNight: 400,
        amenities: [
          "WiFi",
          "TV",
          "Air Conditioning",
          "Balcony",
          "Private Pool",
        ],
        availability: true,
      },
      {
        roomType: "Royal Villa",
        numberOfBeds: 4,
        pricePerNight: 1000,
        amenities: [
          "WiFi",
          "TV",
          "Air Conditioning",
          "Mini Bar",
          "Balcony",
          "Private Pool",
        ],
        availability: true,
      },
    ],
    amenities: ["Private Beach", "Spa", "Restaurant"],
    images: [
      "https://picsum.photos/200/300?random=18",
      "https://picsum.photos/200/300?random=2",
      "https://picsum.photos/200/300?random=3",
      "https://picsum.photos/200/300?random=4",
      "https://picsum.photos/200/300?random=5",
      "https://picsum.photos/200/300?random=6",
      "https://picsum.photos/200/300?random=7",
      "https://picsum.photos/200/300?random=8",
      "https://picsum.photos/200/300?random=9",
    ],
    rating: 4.9,
  },
];

export default hotels;
