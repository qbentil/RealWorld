"use client"

import * as Yup from 'yup';

import React, { FC } from "react"

import Link from 'next/link';
import TextInput from '@/components/core/text-input';
import toasts from '@/utils/toasts';
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation';
import { Back } from 'iconsax-react';
import { setUser } from '@/hooks/localStorage';
import { useStateValue } from '@/context/StateProvider';

const LoginPage = () => {
    const [loading, setLoading] = React.useState<boolean>(false)
    const [{ }, dispatch] = useStateValue()
    const router = useRouter()

    const { handleSubmit, ...form } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().min(8).max(12).required(),
        }),
        onSubmit: async (values) => {
            setLoading(true)
            console.log(values);
            setLoading(false)
            setUser(values)
            dispatch({
                type: 'SET_USER',
                payload: values
            })
            router.push('/')
            toasts.success("Successful", "Welcome..", {
                position: 'bottom-right',
            });
        }
    })

    return (
        <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="text-left">
                <h2 className="text-xl font-extrabold text-gray-900">Login.</h2>
                <p className="mt-2 text-sm text-gray-600">
                    Enter your account details below.
                </p>
            </div>

            <div className="mt-8">

                <div className="mt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <TextInput
                                id="email"
                                label="Email"
                                type="email"
                                placeholder='e.g. user@ecg.com'
                                {...form}
                            />
                        </div>

                        <div className="space-y-1">
                            <TextInput
                                id="password"
                                label="Password"
                                type="password"
                                placeholder='e.g.  **************'
                                {...form}
                            />
                        </div>
                        <div className="flex justify-between items-center text-sm text-gray-600">
                            <Link href="/signup" className="text-primary-600 hover:text-primary-500">
                                New here? Signup
                            </Link>
                            <Link href="/forgot-password" className="text-primary-600 hover:text-primary-500">
                                Forgot your password?
                            </Link>
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none "
                            >
                                {loading ? "Hang on..." : "Login"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage