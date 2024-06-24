"use client"

import * as Yup from 'yup';

import React, { useEffect, useState } from "react"

import Link from 'next/link';
import TextInput from '@/components/core/text-input';
import toasts from '@/utils/toasts';
import { useFormik } from 'formik'
import { useRouter, } from 'next/navigation';

const VerificationPage = () => {
    const [timeLeft, setTimeLeft] = useState(180);

    const [loading, setLoading] = React.useState<boolean>(false)
    const router = useRouter()

    const { handleSubmit, ...form } = useFormik({
        initialValues: {
            otp: "",
        },
        validationSchema: Yup.object().shape({
            otp: Yup.number().required(),
        }),
        onSubmit: async (values) => {
            setLoading(true)
            console.log(values);

            const timer = setTimeout(() => {
                setLoading(false)
                router.push("/");
                toasts.success("OTP Verification", "Login successful");
            }, 3000); // 30000 milliseconds = 30 seconds

            return () => clearTimeout(timer);
        }
    })

    useEffect(() => {
        // Only start the timer if timeLeft is greater than 0
        if (timeLeft > 0) {
            // Set up an interval to update the timer every second
            const timerId = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);

            // Clean up the interval on component unmount or when timeLeft changes
            return () => clearInterval(timerId);
        }
    }, [timeLeft]);

    const formatTime = (seconds: number): string => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const getColorClass = () => {
        if (timeLeft > 180 * 0.5) {
            return 'text-green-500';
        } else if (timeLeft > 180 * 0.2) {
            return 'text-yellow-500';
        } else {
            return 'text-red-500';
        }
    };

    return (
        <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="text-left">
                <h2 className="text-xl font-extrabold text-gray-900">Enter OTP</h2>
                <p className="mt-2 text-sm text-gray-600">
                    We have sent a 6 digit code to your email. Type in the code to verify your account
                </p>
            </div>

            <div className="mt-8">

                <div className="mt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <TextInput
                                id="otp"
                                label="Enter Verification Code"
                                type="text"
                                placeholder=''
                                {...form}
                            />
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600 space-y-2">
                            <p className={`font-mono ${getColorClass()}`}>Expires in <span>{formatTime(timeLeft)}s</span></p>
                            <Link href="#" className="text-primary-600 hover:text-primary-500">
                                Resend Code
                            </Link>
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none "
                            >
                                {loading ? "Hang on..." : "Verify"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default VerificationPage