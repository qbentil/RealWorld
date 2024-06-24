import { ToastOptions, toast } from "react-toastify";

import AlertError from "@/public/assets/AlertError.svg";
import AlertSuccess from "@/public/assets/AlertSuccess.svg";
import AppToast from "../../components/toasts"
import Image from "next/image";
import React from "react";
import Spinner from "@/public/assets/Spinner.svg";

const toasts = {
    success: (heading: React.ReactNode, body: React.ReactNode, options?: ToastOptions) => {
        return toast(<AppToast heading={heading} body={body} />, {
            icon: <Image src={AlertSuccess} alt="Alert Success Icon" />,
            ...options
        });
    },
    error: (heading: React.ReactNode, body: React.ReactNode, options?: ToastOptions) => {
        return toast(<AppToast heading={heading} body={body} />, {
            icon: <Image src={AlertError} alt="Alert Error icon" />,
            ...options
        });
    },
    promise: (promise: Promise<any>, loadingMessage: React.ReactNode, successMessage?: React.ReactNode, errorMessage?: React.ReactNode, options?: ToastOptions) => {
        // Show loading toast
        const loadingToastId = toast.loading(<AppToast heading="Loading" body={loadingMessage} />, {
            icon: <Image
                src={Spinner}
                alt="spinner"
                style={{ width: "40px", height: "40px" }}
            />,
            autoClose: false,
            closeButton: false,
            closeOnClick: false
        });

        // Execute the promise
        return promise
            .then((result) => {
                // Hide loading toast
                toast.dismiss(loadingToastId);

                // Show success toast
                successMessage && toast.success(<AppToast heading="Success" body={successMessage} />, {
                    icon: <Image src={AlertSuccess} alt="Alert Success Icon" />,
                    ...options
                });

                return result; // Forward the resolved value
            })
            .catch((error) => {
                // Hide loading toast
                toast.dismiss(loadingToastId);

                // Show error toast
                errorMessage && toast.error(<AppToast heading="Error" body={errorMessage} />, {
                    icon: <Image src={AlertError} alt="Alert Error Icon" />,
                    ...options
                });

                throw error; // Forward the error
            });
    }
};

export default toasts