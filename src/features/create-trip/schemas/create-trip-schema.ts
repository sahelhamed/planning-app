
import { z } from "zod";

export const createTripSchema = z
  .object({
    origin: z
      .string()
      .trim()
      .min(2, "Origin must be at least 2 characters."),

    destination: z
      .string()
      .trim()
      .min(2, "Destination must be at least 2 characters."),

    startDate: z.iso.date("Please select a valid start date."),

    endDate: z.iso.date("Please select a valid end date."),

    travelers: z
      .number()
      .int("Travelers must be a whole number.")
      .min(1, "At least one traveler is required.")
      .max(20, "Maximum 20 travelers are allowed."),

    transportation: z
      .string()
      .min(1, "Please select transportation.")
      .pipe(
        z.enum([
          "bus",
          "train",
          "taxi",
          "personal-car",
          "airplane",
        ])
      ),

    budget: z.object({
      min: z.number().min(0, "Minimum budget cannot be negative."),
      max: z.number().min(0, "Maximum budget cannot be negative."),
      currency: z.string().default("USD"),
    }),

    additionalNotes: z
      .string()
      .max(1000, "Additional notes cannot exceed 1000 characters.")
      .default(""),
  })
  .refine(
    (data) => new Date(data.endDate) >= new Date(data.startDate),
    {
      message: "End date must be after or equal to start date.",
      path: ["endDate"],
    }
  )
  .refine((data) => data.budget.max >= data.budget.min, {
    message: "Maximum budget must be greater than or equal to minimum budget.",
    path: ["budget", "max"],
  });

export type CreateTripFormValues = z.infer<typeof createTripSchema>;
