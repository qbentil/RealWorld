import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FC } from "react";
import _ from "lodash";
import { classNames } from "@/utils";

interface TextInputProps {
    id: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    type?: ("number" | "text" | "email" | "date" | "password");
    values: any;
    handleChange: any;
    handleBlur: any;
    errors?: any;
    touched?: any;
    step?: number;
    min?: number | string;
    max?: number | string;
    labelHidden?: boolean;
    maxLength?: number;
    minLength?: number;
    postText?: string;
}

const TextInput: FC<TextInputProps> = ({ id, type, step, values, handleChange, handleBlur, placeholder, label, errors, touched, required, maxLength, minLength, disabled, min, max, labelHidden, postText }) => {

    return (
        <>
            {!labelHidden && (
                <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                    {label} {required ? <span className="text-red-500">*</span> : ""}
                </label>
            )}
            <div className={classNames(
                labelHidden ? "" : "mt-1",
                "relative"
            )}>
                <input
                    type={type ?? "text"}
                    name={id}
                    id={id}
                    value={_.get(values, id)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={disabled}
                    required={required}
                    placeholder={placeholder ?? ""}
                    step={step}
                    min={min}
                    max={max}
                    maxLength={maxLength}
                    minLength={minLength}
                    style={{
                        paddingRight: (postText?.length || 0) * 12
                    }}
                    className={classNames(
                        _.get(errors, id) && _.get(touched, id) ? "text-red-500 focus:ring-red-500 focus:border-red-500 border-red-600" : "focus:ring-primary-500  border-gray-300 focus:border-primary-500 text-primary-500",
                        disabled ? "cursor-not-allowed bg-gray-100" : "",
                        "shadow-sm block w-full sm:text-sm rounded placeholder:font-light placeholder:text-xs h-[38px] border border-gray-200 pl-5 text-lg outline-none"
                    )}
                />
                {_.get(errors, id) && _.get(touched, id) ? (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <AiOutlineExclamationCircle className="h-5 w-5 text-red-500" aria-hidden="true" />
                    </div>) : null
                }
                {postText && (
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <span className="text-gray-500 sm:text-sm" id="price-currency">
                            {postText}
                        </span>
                    </div>
                )}
            </div>
            {_.get(errors, id) && _.get(touched, id) ? (
                <p className="mt-2 text-sm text-red-600" id={`${id}-error`}>
                    {_.get(errors, id)}
                </p>) : null
            }
        </>
    )
}

export default TextInput;