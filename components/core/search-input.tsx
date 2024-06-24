

"use client"

import { FC, useState } from "react";

import { FaSearch } from "react-icons/fa";
import _ from "lodash";

interface SearchSelectInputProps {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  handleChange: (query: string) => void;
}

const SearchSelectInput: FC<SearchSelectInputProps> = ({ id, placeholder, label, disabled, handleChange }) => {

  return (

    <form className="w-full flex items-center mx-auto">
      <label htmlFor="simple-search" className="sr-only">Search</label>
      <div className="relative w-full">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <FaSearch className="text-gray-400" />
        </div>
        <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none block w-full ps-10 p-2.5   " placeholder="Search all..." required onChange={
          (e) => handleChange(e.target.value)
        } />
      </div>
    </form>

  )
}

export default SearchSelectInput;