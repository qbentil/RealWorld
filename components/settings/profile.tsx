import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "../core/text-input";
import { FaCameraRetro } from "react-icons/fa";

const PasswordPolicyInitialState = {
  minLength: 8,
  requireUppercase: "Yes",
  requireLowercase: "Yes",
  requireSpecialCharacter: "Yes",
  requireNumber: "Yes",
};

const Site = () => {
  const { handleSubmit, ...form } = useFormik({
    initialValues: PasswordPolicyInitialState,
    validationSchema: Yup.object().shape({
      minLength: Yup.number().min(8).required("Minimum length is required"),
      requireUppercase: Yup.string()
        .oneOf(["Yes", "No"])
        .required("This field is required"),
      requireLowercase: Yup.string()
        .oneOf(["Yes", "No"])
        .required("This field is required"),
      requireSpecialCharacter: Yup.string()
        .oneOf(["Yes", "No"])
        .required("This field is required"),
      requireNumber: Yup.string()
        .oneOf(["Yes", "No"])
        .required("This field is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <main className="w-full md:w-2/3 h-full py-20 px-4 flex flex-row justify-between gap-8">
      <div className="w-full space-y-6">
        <div className="w-full flex justify-between items-center space-x-20">
          <h1 className=" w-[15%] text-nowrap text-base">Company Name</h1>
          <div className=" flex-1 w-full ">
            <TextInput
              id="conpanyName"
              type="text"
              placeholder="AskPBS"
              {...form}
            />
          </div>
        </div>
        <div className="w-full flex justify-between items-center space-x-20">
          <h1 className=" w-[15%] text-nowrap text-base">Tageline</h1>
          <div className="w-full flex-1 ">
            <TextInput
              id="tageline"
              type="text"
              placeholder="Official Website"
              {...form}
            />
            <p className=" py-2 text-primary-200 ">
              In a few words, express what this site is about. Example:
              “E-commerce Website”
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between items-center space-x-20">
          <h1 className=" w-[15%] text-nowrap text-base">Phone</h1>
          <div className=" flex-1 w-full">
            <TextInput
              id="phone"
              type="number"
              placeholder="+233 556 081 4869"
              {...form}
            />
          </div>
        </div>
        <div className="w-full flex justify-between items-center space-x-20">
          <h1 className=" w-[15%] text-nowrap text-base">Email</h1>
          <div className=" flex-1 w-full">
            <TextInput
              id="email"
              type="email"
              placeholder="bentilshadrack72@gmail.com"
              {...form}
            />
          </div>
        </div>
        <div className="w-full flex justify-between items-center space-x-20">
          <h1 className=" w-[15%] text-nowrap text-base">Logo</h1>
          <div className=" flex-1 w-full ">
            <button className=" flex gap-3 text-primary-200">
              {" "}
              <FaCameraRetro size={24} /> Add Photo/An Image{" "}
            </button>
          </div>
        </div>
        <div className="w-full flex justify-between items-center space-x-20">
          <h1 className="w-[15%] text-nowrap text-base">Site Address</h1>
          <div className=" flex-1 w-full">
            <TextInput
              id="site_address"
              type="text"
              placeholder="http://AskPBS.com"
              {...form}
            />
          </div>
        </div>
      </div>
    </main>
  );
};
export default Site;
