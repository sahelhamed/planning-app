import type { TripItinerary } from "../types/itinerary";

export const mockItineraries: TripItinerary[] = [
  {
    tripId: "trip-001",
    accommodation: {
      name: "Old Town Boutique Stay",
      type: "Boutique Hotel",
      location: "Sultanahmet, Istanbul",
      estimatedCostPerNight: 85,
    },
    totalEstimatedCost: 850,
    currency: "USD",
    days: [
      {
        dayNumber: 1,
        date: "2026-12-12",
        title: "Arrival & Old City",
        activities: [
          {
            id: "activity-1",
            time: "10:00",
            title: "Visit Hagia Sophia",
            location: "Sultanahmet",
            description: "Explore the historic architecture and interior.",
            estimatedCost: 25,
          },
          {
            id: "activity-2",
            time: "14:00",
            title: "Explore the Grand Bazaar",
            location: "Beyazıt",
            description: "Walk through one of Istanbul's most famous markets.",
            estimatedCost: 0,
          },
        ],
        meals: [
          {
            type: "lunch",
            name: "Traditional Turkish Lunch",
            location: "Sultanahmet",
            estimatedCost: 20,
          },
          {
            type: "dinner",
            name: "Turkish Cuisine",
            location: "Old City",
            estimatedCost: 30,
          },
        ],
      },
      {
        dayNumber: 2,
        date: "2026-12-13",
        title: "Palaces & Bosphorus",
        activities: [
          {
            id: "activity-3",
            time: "09:30",
            title: "Visit Topkapi Palace",
            location: "Sultanahmet",
            description: "Discover the history of the Ottoman Empire.",
            estimatedCost: 35,
          },
          {
            id: "activity-4",
            time: "15:00",
            title: "Bosphorus Cruise",
            location: "Eminönü",
            description: "Enjoy views of Istanbul from the water.",
            estimatedCost: 30,
          },
        ],
        meals: [
          {
            type: "breakfast",
            name: "Hotel Breakfast",
            location: "Accommodation",
            estimatedCost: 0,
          },
          {
            type: "lunch",
            name: "Seafood Lunch",
            location: "Eminönü",
            estimatedCost: 25,
          },
          {
            type: "dinner",
            name: "Dinner by the Bosphorus",
            location: "Karaköy",
            estimatedCost: 35,
          },
        ],
      },
      {
        dayNumber: 3,
        date: "2026-12-14",
        title: "Modern Istanbul",
        activities: [
          {
            id: "activity-5",
            time: "10:00",
            title: "Explore Galata Tower",
            location: "Galata",
            description: "Enjoy panoramic views of the city.",
            estimatedCost: 20,
          },
          {
            id: "activity-6",
            time: "14:00",
            title: "Walk along Istiklal Avenue",
            location: "Beyoğlu",
            description: "Discover shops, cafés, and local culture.",
            estimatedCost: 0,
          },
        ],
        meals: [
          {
            type: "breakfast",
            name: "Hotel Breakfast",
            location: "Accommodation",
            estimatedCost: 0,
          },
          {
            type: "lunch",
            name: "Local Café",
            location: "Beyoğlu",
            estimatedCost: 18,
          },
          {
            type: "dinner",
            name: "Traditional Turkish Dinner",
            location: "Galata",
            estimatedCost: 28,
          },
        ],
      },
      {
        dayNumber: 4,
        date: "2026-12-15",
        title: "A Relaxed Morning & Departure",
        activities: [
          {
            id: "activity-7",
            time: "09:00",
            title: "Morning Walk",
            location: "Sultanahmet",
            description: "Enjoy a final walk through the historic streets.",
            estimatedCost: 0,
          },
        ],
        meals: [
          {
            type: "breakfast",
            name: "Hotel Breakfast",
            location: "Accommodation",
            estimatedCost: 0,
          },
        ],
      },
    ],
  },
];