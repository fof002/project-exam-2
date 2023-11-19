import * as yup from "yup";

export const schema = yup.object({
  name: yup
    .string()
    .min(3, "Venue name must be at least 3 characters.")
    .max(15, "Venue name cannot be longer than 15 characters")
    .required("Please enter a venue name"),
  description: yup
    .string()
    .min(10, "Desciption must be at least 10 characters.")
    .max(250, "Dscription cannot be longer than 150 characters")
    .required("Please enter a description"),
  price: yup
    .number()
    .typeError("Must be a number")
    .min(1, "Price cannot be lower than 1.")
    .max(100000, "Price cannot be highet than 100 000 per night")
    .required("Price is required"),
  maxGuests: yup
    .number()
    .typeError("Must be a number")
    .min(1, "cannot be less than 1.")
    .max(100, "You cannot have more guests than 99")
    .required("Max guests is required"),
  rating: yup
    .number()
    .typeError("Must be a number")
    .min(1, "cannot be less than 1.")
    .max(5, "Cannot have higher rating than 5")
    .required("Number between 1 to 5"),
});
