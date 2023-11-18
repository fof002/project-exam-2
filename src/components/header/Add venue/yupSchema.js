import * as yup from "yup";

export const schema = yup.object({
  name: yup
    .string()
    .min(3, "Your username must be at least 3 characters.")
    .max(10, "Your username cannot be longer than 10 characters")
    .required("Please enter a username"),
});
