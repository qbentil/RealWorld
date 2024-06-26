'use client'


import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import { MdEdit, MdRemove } from "react-icons/md";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "../core/text-input";
import TextAreaInput from "../core/textarea-input";
import { DocumentUpload, GalleryEdit, GalleryRemove } from "iconsax-react";
import toasts from "@/utils/toasts";

const PasswordPolicyInitialState = {
  lname: "",
  fname: "",
  phonenumber: "",
  email: "bentilshadrack72@gmail.com",
  bio: "",
};

const Profile = () => {
  const { handleSubmit, ...form } = useFormik({
    initialValues: PasswordPolicyInitialState,
    validationSchema: Yup.object().shape({
      lname: Yup.string().required("Last Name is required"),
      fname: Yup.string().required("First Name is required"),
      phonenumber: Yup.string().required("Phone Number is required"),
      email: Yup.string().required("Email is required"),
      bio: Yup.string().required("Bio is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      toasts.success("", "Profile Updated Successfully");
    },
  });
  const [imageSrc, setImageSrc] = useState<string>("/assets/avatar.jpeg");
  const [isHovered, setIsHovered] = useState<boolean>(false);


  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setImageSrc(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };
  const handleRemoveImage = () => {
    setImageSrc("/assets/photo-placeholder.png");
    setIsHovered(false);
  };

  return (
    <main className="w-full h-full py-2  flex flex-col md:flex-row justify-between  gap-8">
      {/* Edit Picture */}
      <div className="w-full md:w-1/2 flex flex-col gap-y-2 items-center">
        <div className="cursor-pointer relative border border-primary-100 p-6 rounded-md"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >

          <Image
            src={imageSrc}
            alt="Profile Picture"
            className="w-56 h-52 "
            width={224}
            height={224}
          />
          {isHovered && (
            <>
              <label htmlFor="file-input" className="absolute left-0 top-0 rounded-md bg-overlay-dark-10 w-full h-full z-10 flex items-center justify-center">
                <button
                  className=" absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                  onClick={handleRemoveImage}
                >
                  <MdRemove />
                </button>
                <label
                  className="  text-primary-600 text-3xl rounded-full"
                  htmlFor="file-input"
                >
                  <DocumentUpload className="text-3xl" />
                </label>
              </label>
            </>
          )}
        </div>
        <>
          <input type="file" id="file-input" className="hidden" accept="image/*" onChange={handleFileChange} />
          <button className="cursor-pointer border border-primary-500 hover:bg-primary-500 hover:text-white flex items-center gap-4 py-3 px-12 rounded-md text-primary-500 hap-x-3">
            <GalleryEdit variant="TwoTone" />Update Photo
          </button>
        </>
      </div>

      {/* Forms */}
      <form className="w-full flex flex-col gap-y-2 md:w-1/2 " onSubmit={handleSubmit}>
        <div>
          <TextInput
            id="fname"
            type="text"
            label="First Name"
            required
            placeholder="Shadrack"
            {...form}
          />
        </div>
        <div>
          <TextInput
            id="lname"
            type="text"
            label="Last Name"
            required
            placeholder="Bentil"
            {...form}
          />
        </div>
        <div>
          <TextInput
            id="phonenumber"
            type="text"
            label="Phone Number"
            required
            placeholder="+233 556 081 4869"
            {...form}
          />
        </div>
        <div>
          <TextInput
            id="email"
            type="email"
            label="Email"
            required
            placeholder="bentilshadrack72@gmail.com"
            {...form}
            disabled
          />
        </div>
        <div>
          <TextAreaInput
            id="bio"
            label="Bio"
            required
            placeholder="I am a software engineer"
            {...form}
          />
        </div>
        {/* submit button */}
        <div className="w-full flex  justify-end items-end py-4 gap-x-4">
          <button
            className="w-1/2 border border-primary-500 hover:bg-primary-500 hover:text-white text-primary-500 py-2 px-4 rounded-md"
          >
            Save Changes
          </button>
          <button
            type="reset"
            className="w-1/2 hover:bg-gray-500 hover:text-white  text-gray-500 border border-gray-500 py-2 px-5 rounded-md">
            Cancel
          </button>
        </div>
      </form>
    </main>
  );
};

export default Profile;
