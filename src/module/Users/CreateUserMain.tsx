import React from "react";
import { useFormik } from "formik";
import { IinitialValues, states, UserFormData, validationSchema } from "./moduls";
import { Button } from "@/components/ui/button";
import InputComp from "@/components/common/FromComponent/InputComp";
import { Card } from "@/components/ui/card";
import Dropdown from "@/components/common/Dropdown/Dropdown";
import { useNavigate } from "react-router-dom";
import { setFormValue } from "@/helpers/crud-helper/formsetValue";
const CreateUserMain = () => {
  const navigate = useNavigate();

  const formik = useFormik<UserFormData>({
    initialValues: IinitialValues,
    onSubmit: (values, { resetForm }) => {
      setFormValue(values);
      resetForm();
      navigate("/users");
      console.log(values);
    },
    validationSchema: validationSchema,
  });

  return (
    <Card className="w-full h-full p-4">
      <h1 className="text-lg font-semibold mb-4">Create User</h1>

      <form onSubmit={formik.handleSubmit}>
        {/* Grid layout for responsive fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2">
          <InputComp
            onchange={(e) => formik.setFieldValue("fullName", e)}
            type="text"
            placeholder="Enter Your Full Name"
            errorMessage={formik.touched.fullName && formik.errors.fullName ? formik.errors.fullName : ""}
            value={formik.values.fullName}
            lable="Full Name"
            lableClass="required"
          />

          <InputComp
            onchange={(e) => formik.setFieldValue("email", e)}
            type="text"
            placeholder="Enter Your Email"
            errorMessage={formik.touched.email && formik.errors.email ? formik.errors.email : ""}
            value={formik.values.email}
            lable="Email Address"
            lableClass="required"
          />

          <InputComp
            onchange={(e) => formik.setFieldValue("contactNumber", e)}
            type="tel"
            placeholder="Enter Your Contact Number"
            errorMessage={
              formik.touched.contactNumber && formik.errors.contactNumber ? formik.errors.contactNumber : ""
            }
            value={formik.values.contactNumber}
            lable="Contact Number"
            lableClass="required"
            // regex={"/^d{10}$/"}
          />

          <InputComp
            onchange={(e) => formik.setFieldValue("addressLine", e)}
            type="text"
            placeholder="Enter Your Address"
            errorMessage={formik.touched.addressLine && formik.errors.addressLine ? formik.errors.addressLine : ""}
            value={formik.values.addressLine}
            lable="Address Line"
            lableClass="required"
          />

          <Dropdown
            dataQAkey=""
            name="Select States"
            isLoading={false}
            options={states || []}
            onChange={(e) => formik.setFieldValue("state", e)}
            errorMessage={formik.touched.state && formik.errors.state ? formik.errors.state : ""}
            value={formik.values.state}
            lable="State"
            lableClass="required"
          />

          <InputComp
            onchange={(e) => formik.setFieldValue("city", e)}
            type="text"
            placeholder="Enter Your City"
            errorMessage={formik.touched.city && formik.errors.city ? formik.errors.city : ""}
            value={formik.values.city}
            lable="City"
            lableClass="required"
          />

          <InputComp
            onchange={(e) => formik.setFieldValue("pincode", e)}
            type="text"
            placeholder="Enter Your Pincode"
            errorMessage={formik.touched.pincode && formik.errors.pincode ? formik.errors.pincode : ""}
            value={formik.values.pincode}
            lable="Pincode"
            lableClass="required"
            // regex={/^[1-9][0-9]{5}$/}
          />
        </div>

        <div className="mt-6 flex justify-end">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Card>
  );
};

export default CreateUserMain;
