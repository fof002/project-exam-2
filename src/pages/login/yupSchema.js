import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .matches("@stud.noroff.no", "You must entar a valid @stud.noroff.no")
    .required("Please enter a valid @stud.noroff.no email"),
  password: yup
    .string()
    .min(8, "Your password must be minimum 8 characters")
    .required("Please enter a password"),
});
