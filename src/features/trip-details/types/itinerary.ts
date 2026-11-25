export interface ItineraryMeal {
  type: "breakfast" | "lunch" | "dinner";
  name: string;
  location: string;
  estimatedCost: number;
}

export interface ItineraryActivity {
  id: string;
  time: string;
  title: string;
  location: string;
  description: string;
  estimatedCost: number;
}

export interface Accommodation {
  name: string;
  type: string;
  location: string;
  estimatedCostPerNight: number;
}

export interface ItineraryDay {
  dayNumber: number;
  date: string;
  title: string;
  activities: ItineraryActivity[];
  meals: ItineraryMeal[];
}

export interface TripItinerary {
  tripId: string;
  accommodation: Accommodation;
  days: ItineraryDay[];
  totalEstimatedCost: number;
  currency: string;
}