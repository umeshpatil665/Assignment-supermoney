import * as Yup from "yup";

export interface UserFormData {
  fullName: string;
  email: string;
  contactNumber: string;
  addressLine: string;
  city: string;
  state: string;
  pincode: string;
}
export const IinitialValues: UserFormData = {
  fullName: "",
  email: "",
  contactNumber: "",
  addressLine: "",
  city: "",
  state: "",
  pincode: "",
};

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  contactNumber: Yup.string()
    .required("Contact Number is required")
    .matches(/^\d+$/, "Contact Number should contain only numbers")
    .length(10, "Contact Number must be exactly 10 digits"),
  addressLine: Yup.string().required("Address Line is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  pincode: Yup.string()
    .matches(/^\d+$/, "Contact Number should contain only numbers")
    .length(6, "Pincode must be exactly 6 digits")
    .required("Pincode is required"),
});

export const states = ["Maharashtra", "Gujarat", "Karnataka", "Delhi", "Tamil Nadu", "West Bengal"].map((cur) => {
  return { label: cur, value: cur };
});
