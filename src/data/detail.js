const Details = [
  {
    id: 1,
    name: "Toyota Corolla",
    location: "Gulshan-e-Iqbal, Karachi, Pakistan",
    rating: 4.8,
    reviews: 64,

    price: {
      rentPerDay: 8500,
      purchasePrice: 5800000,
    },

    specs: {
      brand: "Toyota",
      model: "2022",
      type: "Sedan",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: 5,
      mileage: "14 km/l",
    },

    description:
      "Toyota Corolla is one of the most reliable sedans in Pakistan, ideal for daily city driving and long routes with comfort and fuel efficiency.",

    features: [
      "Rear Camera",
      "Keyless Entry",
      "Push Start",
      "ABS",
      "Air Conditioning",
      "Bluetooth",
    ],

    images: {
      main: "/images/corolla.png",
      gallery: [
        "/images/corolla-1.png",
        "/images/corolla-2.png",
        "/images/corolla-3.png",
      ],
    },
  },

  {
    id: 2,
    name: "Honda Civic",
    location: "DHA Phase 6, Lahore, Pakistan",
    rating: 4.9,
    reviews: 52,

    price: {
      rentPerDay: 12000,
      purchasePrice: 9200000,
    },

    specs: {
      brand: "Honda",
      model: "2023",
      type: "Sedan",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: 5,
      mileage: "12 km/l",
    },

    description:
      "Honda Civic is a premium sedan offering powerful performance, modern interior, and smooth driving experience.",

    features: [
      "Sunroof",
      "Cruise Control",
      "Rear Camera",
      "Touch Screen",
      "Keyless Entry",
      "ABS",
    ],

    images: {
      main: "/images/civic.png",
      gallery: [
        "/images/civic-1.png",
        "/images/civic-2.png",
        "/images/civic-3.png",
      ],
    },
  },

  {
    id: 3,
    name: "Suzuki Alto",
    location: "University Road, Peshawar, Pakistan",
    rating: 4.5,
    reviews: 38,

    price: {
      rentPerDay: 4500,
      purchasePrice: 2800000,
    },

    specs: {
      brand: "Suzuki",
      model: "2022",
      type: "Hatchback",
      fuel: "Petrol",
      transmission: "Manual",
      seats: 4,
      mileage: "22 km/l",
    },

    description:
      "Suzuki Alto is a budget-friendly hatchback, perfect for city rides and economical daily usage.",

    features: [
      "Air Conditioning",
      "Power Steering",
      "ABS",
    ],

    images: {
      main: "/images/alto.png",
      gallery: [
        "/images/alto-1.png",
        "/images/alto-2.png",
      ],
    },
  },

  {
    id: 4,
    name: "Toyota Yaris",
    location: "Johar Town, Lahore, Pakistan",
    rating: 4.7,
    reviews: 46,

    price: {
      rentPerDay: 7500,
      purchasePrice: 4700000,
    },

    specs: {
      brand: "Toyota",
      model: "2023",
      type: "Sedan",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: 5,
      mileage: "15 km/l",
    },

    description:
      "Toyota Yaris offers modern design, comfortable interior, and excellent fuel economy for urban driving.",

    features: [
      "Rear Camera",
      "Push Start",
      "ABS",
      "Air Conditioning",
      "Bluetooth",
    ],

    images: {
      main: "/images/yaris.png",
      gallery: [
        "/images/yaris-1.png",
        "/images/yaris-2.png",
      ],
    },
  },

  {
    id: 5,
    name: "Toyota Fortuner",
    location: "F-10, Islamabad, Pakistan",
    rating: 4.9,
    reviews: 29,

    price: {
      rentPerDay: 25000,
      purchasePrice: 18500000,
    },

    specs: {
      brand: "Toyota",
      model: "2022",
      type: "SUV",
      fuel: "Diesel",
      transmission: "Automatic",
      seats: 7,
      mileage: "10 km/l",
    },

    description:
      "Toyota Fortuner is a powerful SUV, best suited for long trips, off-road adventures, and luxury travel.",

    features: [
      "4x4 Drive",
      "Cruise Control",
      "Leather Seats",
      "Rear Camera",
      "ABS",
    ],

    images: {
      main: "/images/fortuner.png",
      gallery: [
        "/images/fortuner-1.png",
        "/images/fortuner-2.png",
      ],
    },
  },

  {
    id: 6,
    name: "KIA Sportage",
    location: "Bahria Town, Rawalpindi, Pakistan",
    rating: 4.8,
    reviews: 41,

    price: {
      rentPerDay: 18000,
      purchasePrice: 11000000,
    },

    specs: {
      brand: "KIA",
      model: "2023",
      type: "SUV",
      fuel: "Petrol",
      transmission: "Automatic",
      seats: 5,
      mileage: "11 km/l",
    },

    description:
      "KIA Sportage is a modern SUV offering luxury, comfort, and strong road presence.",

    features: [
      "Panoramic Sunroof",
      "Adaptive Cruise",
      "Rear Camera",
      "Touch Screen",
      "ABS",
    ],

    images: {
      main: "/images/sportage.png",
      gallery: [
        "/images/sportage-1.png",
        "/images/sportage-2.png",
      ],
    },
  },

  {
    id: 7,
    name: "Suzuki Cultus",
    location: "Satellite Town, Gujranwala, Pakistan",
    rating: 4.6,
    reviews: 33,

    price: {
      rentPerDay: 5500,
      purchasePrice: 3900000,
    },

    specs: {
      brand: "Suzuki",
      model: "2022",
      type: "Hatchback",
      fuel: "Petrol",
      transmission: "Manual",
      seats: 5,
      mileage: "18 km/l",
    },

    description:
      "Suzuki Cultus is a reliable hatchback with good mileage and comfortable interior for city use.",

    features: [
      "Air Conditioning",
      "Power Steering",
      "ABS",
    ],

    images: {
      main: "/images/cultus.png",
      gallery: [
        "/images/cultus-1.png",
        "/images/cultus-2.png",
      ],
    },
  },

  {
    id: 8,
    name: "Toyota Hiace",
    location: "Airport Road, Karachi, Pakistan",
    rating: 4.7,
    reviews: 21,

    price: {
      rentPerDay: 20000,
      purchasePrice: 12500000,
    },

    specs: {
      brand: "Toyota",
      model: "2021",
      type: "Van",
      fuel: "Diesel",
      transmission: "Manual",
      seats: 14,
      mileage: "9 km/l",
    },

    description:
      "Toyota Hiace is ideal for group travel, tours, and corporate transport with spacious seating.",

    features: [
      "Air Conditioning",
      "Power Steering",
      "ABS",
    ],

    images: {
      main: "/images/hiace.png",
      gallery: [
        "/images/hiace-1.png",
      ],
    },
  },
];

export default Details;
