"use client"

import * as Yup from 'yup';

import React, { FC } from "react"

import Link from 'next/link';
import TextInput from '@/components/core/text-input';
import UserService from '@/services/user.service';
import toasts from '@/utils/toasts';
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation';

const Page = () => {
    const [loading, setLoading] = React.useState<boolean>(false)
    const router = useRouter()

    const { handleSubmit, ...form } = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validationSchema: Yup.object().shape({
            username: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required(),
        }),
        onSubmit: async (values) => {
            setLoading(true)
            UserService.signup(values, (error, data) => {
                setLoading(false)
                if (error) {
                    toasts.error("", error)
                    setLoading(false)
                    return
                }
                console.log(data)
                toasts.success("Sucess", "Signup successful")
                router.push("/signin")
            })
        }
    })

    return (
        <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="text-left">
                <h2 className="text-xl font-extrabold text-gray-900">Signup.</h2>
                <p className="mt-2 text-sm text-gray-600">
                    Enter your account details below.
                </p>
            </div>

            <div className="mt-8">

                <div className="mt-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <TextInput
                                id="username"
                                label="Username"
                                type="text"
                                placeholder='e.g. qbentil'
                                {...form}
                            />
                        </div>
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
                        <div className="flex text-left text-sm text-gray-600 gap-x-1">
                            Already have account?
                            <Link href="/signin" className="text-primary-600 hover:text-primary-500">
                                signin
                            </Link>
                        </div>
                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none disabled:cursor-not-allowed disabled:bg-primary-200"
                            >
                                {loading ? "Hang on..." : "Signup"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Page