import { FC } from "react";
import _ from "lodash";
import { classNames } from "@/utils";
import { upperFirst } from "lodash"

interface Option {
  label: string;
  value: string | number;
}

interface SelectInputProps {
  id: string;
  label: string;
  labelHidden?: boolean;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  values: any;
  handleChange: any;
  handleBlur: any;
  errors?: any;
  touched?: any;
  options: (string | Option)[]
}

const SelectInput: FC<SelectInputProps> = ({ id, disabled, required, options, values, handleChange, handleBlur, placeholder, label, errors, touched, labelHidden }) => {

  return (
    <>
      {!labelHidden && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label} {required ? <span className="text-red-500">*</span> : ""}
        </label>
      )}
      <div className={classNames(labelHidden ? "mt-0" : "mt-1")}>
        <select
          name={id}
          id={id}
          value={_.get(values, id, "")}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={disabled}
          required={required}
          // style={{
          //   paddingRight: (postText?.length || 0) * 12
          // }}
          className={classNames(
            _.get(errors, id) && _.get(touched, id) ? "text-red-500 focus:ring-red-500 focus:border-red-500 border-red-600" : "focus:ring-primary-500  border-gray-300 focus:border-primary-500 text-primary-500",
            disabled ? "cursor-not-allowed bg-gray-100" : "",
            "shadow-sm block w-full sm:text-sm rounded placeholder:font-light placeholder:text-xs h-[38px] border border-gray-200 pl-3 text-lg outline-none"
          )}
        >
          <option value={""}>{placeholder}</option>
          {options?.map((option, idx) => (
            <option key={idx} value={(option as Option)?.value ?? option}>{(option as Option)?.label ?? option}</option>
          ))}
        </select>
      </div>
      {_.get(errors, id) && _.get(touched, id) ? (
        <p className="mt-2 text-sm text-red-600" id={`${id}-error`}>
          {_.get(errors, id)}
        </p>) : null
      }
    </>
  )
}

export default SelectInput;