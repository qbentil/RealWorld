import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FC } from "react";
import _ from "lodash";
import { classNames } from "@/utils";

interface TextAreaProps {
    id: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    values: any;
    handleChange: any;
    handleBlur: any;
    errors?: any;
    touched?: any;
    labelHidden?: boolean;
    postText?: string;
}

const TextAreaInput: FC<TextAreaProps> = ({ id, values, handleChange, handleBlur, placeholder, label, errors, touched, required, disabled, labelHidden, postText }) => {

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
                <textarea
                    name={id}
                    id={id}
                    value={_.get(values, id)}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={disabled}
                    required={required}
                    placeholder={placeholder ?? ""}
                    style={{
                        paddingRight: (postText?.length || 0) * 12
                    }}
                    className={classNames(
                        _.get(errors, id) && _.get(touched, id) ? "text-red-500 focus:ring-red-500 focus:border-red-500 border-red-600" : "focus:ring-primary-500  border-gray-300 focus:border-primary-500 text-primary-500",
                        disabled ? "cursor-not-allowed bg-gray-100" : "",
                        "shadow-sm block w-full h-36 sm:text-sm rounded placeholder:font-light placeholder:text-xs  border border-gray-200 pl-5 py-2 text-lg outline-none resize-none"
                    )}
                    rows={4} // Adjust the number of rows as needed
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

export default TextAreaInput;
