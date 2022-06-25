import * as Yup from "yup";

const requiredString = Yup.string().required("Required");
// const requiredDate = Yup.date().required("Required");
const email = requiredString.email("Email is not valid");
// const phoneNumber = requiredString.matches(
//   /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/,
//   "Phone number is not valid"
// );
// const validUrl = Yup.string().url("Link is not valid");

export const contactSchema = Yup.object({
  name: requiredString,
  email,
  message: requiredString,
});
