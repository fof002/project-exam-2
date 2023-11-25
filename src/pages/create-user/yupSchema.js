import * as yup from "yup";

export const schema = yup.object({
  username: yup
    .string()
    .min(3, "Your username must be at least 3 characters.")
    .max(10, "Your username cannot be longer than 10 characters")
    .required("Please enter a username"),
  password: yup
    .string()
    .min(8, "Your password must be minimum 8 characters")
    .required("Please enter a password"),
  email: yup
    .string()
    .matches("@stud.noroff.no", "You must entar a valid @stud.noroff.no")
    .required("Please enter a valid @stud.noroff.no email"),
});
