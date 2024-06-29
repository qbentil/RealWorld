'use client'

import * as Yup from "yup";

import { MdEdit, MdRemove } from "react-icons/md";
import React, { ChangeEvent, useState } from "react";

import { FaCameraRetro } from "react-icons/fa";
import { GalleryEdit } from "iconsax-react";
import { IUser } from "@/interface";
import Image from "next/image";
import TextAreaInput from "../core/textarea-input";
import TextInput from "../core/text-input";
import UserService from "@/services/user.service";
import { setUser } from "@/hooks/localStorage";
import toasts from "@/utils/toasts";
import { useFormik } from "formik";
import { useStateValue } from "@/context/StateProvider";

const Profile = () => {
  const [{ user }, dispatch] = useStateValue()
  const [loading, setLoading] = useState<boolean>(false)
  const { handleSubmit, ...form } = useFormik({
    initialValues: {
      username: user.username,
      email: user.email,
      bio: user.bio
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required("Username is required"),
      email: Yup.string().required("Email is required"),
      bio: Yup.string().required("Bio is required"),
    }),
    onSubmit: (values) => {
      setLoading(true)
      const updated: IUser = {
        ...user, ...values,
      }
      UserService.update(updated, (error, data) => {
        console.log({ error, data })
        setLoading(false)
        if (error) {
          toasts.error("", error)
          return
        }
        dispatch({
          type: "SET_USER",
          payload: data
        })

        // store user in local storage
        setUser(data)
        toasts.success("Success", "Profile updated successfully", {
          toastId: "profile-update"
        })
      })
    },
  });
  const [imageSrc, setImageSrc] = useState<string>(user.image);
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
                  <FaCameraRetro className="text-3xl" />
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
            id="username"
            type="text"
            label="User Name"
            required
            placeholder="username"
            {...form}
          />
        </div>
        <div>
          <TextInput
            id="email"
            type="email"
            label="Email"
            required
            placeholder="email"
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
            disabled={loading}
            className="w-1/2 border border-primary-500 hover:bg-primary-500 hover:text-white text-primary-500 py-2 px-4 rounded-md"
          >
            {
              loading ? "Hang on..." : "Save Changes"
            }
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
