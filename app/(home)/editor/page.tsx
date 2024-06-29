"use client"

import { Add, RulerPen } from "iconsax-react"

import ArticleForm from "@/components/new-article"
import AuthWrapper from "@/components/authwrapper"

const Page = () => {
    return (
        <AuthWrapper>
            <div className='w-screen flex flex-col items-center justify-center'>
                <div className='w-screen flex flex-col gap-y-4 py-5 items-center justify-center px-4'>
                    <div className='flex items-center justify-center bg-primary-50 text-primary-600 rounded-full font-bold px-4 py-1'>
                        Conduit
                    </div>
                    <h1 className='text-lg md:text-2xl text-center font-bold ml-4 text-primary-800'>
                        What do you have to share today?
                    </h1>
                    <p className='text-sm text-primary-500'>A place to share your knowledge.</p>

                </div>

                <div className='w-[80%] flex items-center justify-center py-2'>
                    <div
                        className={`flex items-center justify-center text-xs md:text-sm font-semibold text-gray-500 mr-4 p-2 gap-x-2 m-0 cursor-pointer hover:text-primary-600 border-b-2 border-transparent 
                            border-secondary-600  border-b-primary-600 `}

                    >
                        <RulerPen variant="TwoTone" className="hidden md:block" />
                        New Article
                    </div>
                </div>
                {/* page constent */}
                <div className='w-[80%] flex items-center justify-center'>
                    <ArticleForm />
                </div>
            </div>
        </AuthWrapper>
    )
}

export default Page