
export type TripStatus =
  | "pending"
  | "processing"
  | "completed"
  | "failed";

export type Transportation =
  | "bus"
  | "train"
  | "taxi"
  | "personal-car"
  | "airplane";

export interface TripBudget {
  min: number;
  max: number;
  currency: string;
}

export interface Trip {
  id: string;
  title: string;
  origin: string;
  destination: string;
  startDate: string;
  endDate: string;
  duration: number;
  travelers: number;
  transportation: Transportation;
  status: TripStatus;
  coverImage: string;
  createdAt: string;
  budget?: TripBudget;
  additionalNotes?: string;
}
