import * as Yup from "yup";
export const signUpSchema = Yup.object({
    email : Yup.string().email("Invalid Email Id").required("Email Field Required"),
    password : Yup.string().min(10).max(12).required("Password Field Required")
});