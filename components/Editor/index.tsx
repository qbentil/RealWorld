import React, { FC } from "react";

import { AiOutlineExclamationCircle } from "react-icons/ai";
import MDEditor from "@uiw/react-md-editor";
import _ from "lodash";
import { classNames } from "@/utils";
import rehypeSanitize from 'rehype-sanitize';

interface TextEditorProps {
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
}

const TextEditor: FC<TextEditorProps> = ({ id, values, handleChange, handleBlur, placeholder, label, errors, touched, required, disabled, labelHidden }) => {

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
                <div data-color-mode="light" className="h-full w-full">
                    <div className="wmde-markdown-var"> </div>
                    <MDEditor
                        id={id}
                        value={_.get(values, id) || ""}
                        onChange={(e) => handleChange({ target: { name: id, value: e } })}
                        onBlur={handleBlur}
                        className="min-h-[25rem]"
                        previewOptions={{
                            rehypePlugins: [[rehypeSanitize]], // important to sanitize the HTML to avoid XSS attacks
                        }}
                        // disabled={disabled}
                        // placeholder={placeholder}
                    />
                </div>
                {_.get(errors, id) && _.get(touched, id) ? (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        <AiOutlineExclamationCircle className="h-5 w-5 text-red-500" aria-hidden="true" />
                    </div>) : null
                }
            </div>
            {_.get(errors, id) && _.get(touched, id) ? (
                <p className="mt-2 text-sm text-red-600" id={`${id}-error`}>
                    {_.get(errors, id)}
                </p>) : null
            }
        </>
    );
}

export default TextEditor;
