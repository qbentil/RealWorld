import * as Yup from "yup";

import { LockCircle, Security } from "iconsax-react";

import CHangepassword from "./password";
import React from "react";
import TextInput from "@/components/core/text-input";
import { useFormik } from "formik";
import SelectInput from "@/components/core/select-input";

const PasswordPolicyInitialState = {
  minLength: 8,
  requireUppercase: "Yes",
  requireLowercase: "Yes",
  requireSpecialCharacter: "Yes",
  requireNumber: "Yes",
};

const SecurityContent = () => {
  const { handleSubmit, ...form } = useFormik({
    initialValues: PasswordPolicyInitialState,
    validationSchema: Yup.object().shape({
      minLength: Yup.number().min(8).required(),
      requireUppercase: Yup.string().oneOf(["Yes", "No"]).required(),
      requireLowercase: Yup.string().oneOf(["Yes", "No"]).required(),
      requireSpecialCharacter: Yup.string().oneOf(["Yes", "No"]).required(),
      requireNumber: Yup.string().oneOf(["Yes", "No"]).required(),
    }),
    onSubmit: (values) => console.log(values),
  });
  return (
    <div className="w-full gap-x-6 flex  justify-center h-full py-4">
      {/* Change password */}
      <CHangepassword />
      <div className="w-1/2 px-4 py-1 border rounded">
        <div className="text-sm gap-x-2 border-b font-semibold text-gray-700 mb-4 flex flex-row-reverse justify-end py-4 items-center w-full">
          Password Policy
          <Security />
        </div>
        <div className="w-full flex flex-col gap-y-4">
          <div className="w-full flex flex-col gap-y-2">
            <TextInput
              id="minLength"
              label="Minimum Length"
              type="text"
              placeholder="eg. 9"
              {...form}
            />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <SelectInput
              id="requireUppercase"
              label="Require Uppercase"
              placeholder="Require Uppercase"
              options={["Yes", "No"]}
              {...form}
            />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <SelectInput
              id="requireLowercase"
              label="Require Lowercase"
              placeholder="Require Lowercase"
              options={["Yes", "No"]}
              {...form}
            />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <SelectInput
              id="requireSpecialCharacter"
              label="Require Special Character"
              placeholder="Require Special Character"
              options={["Yes", "No"]}
              {...form}
            />
          </div>
          <div className="w-full flex flex-col gap-y-2">
            <SelectInput
              id="requireNumber"
              label="Require Number"
              placeholder="Require Number"
              options={["Yes", "No"]}
              {...form}
            />
          </div>
          <div className="w-full flex justify-end">
            <button className="bg-primary-600 text-white px-4 py-2 rounded-md">
              Update Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityContent;
