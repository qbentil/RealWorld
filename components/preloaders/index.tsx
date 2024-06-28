import React from 'react';

const Preloader = () => {
    return (
        <>
            {/* HeroSection Skeleton */}
            <div className='w-screen flex flex-col gap-y-4 py-5 items-center justify-center px-4 animate-pulse'>
                <div className='flex items-center justify-center bg-gray-300 rounded-full font-bold px-4 py-1 w-24 h-8'></div>
                <h1 className='text-2xl font-bold ml-4 text-gray-400 w-72 h-8'></h1>
                <p className='text-sm text-gray-300 w-40 h-6'></p>
                <div className='w-full md:w-1/5'>
                    <div className='bg-gray-300 w-full h-10 rounded'></div>
                </div>
            </div>

            {/* Profile Page Skeleton */}
            <div className="w-full h-full flex flex-col md:flex-row justify-between gap-8">
                {/* Left Section */}
                <div className="w-full md:w-1/2 flex flex-col gap-y-2 items-center">
                    <div className="border border-primary-100 p-6 rounded-md animate-pulse">
                        {/* Placeholder for Image */}
                        <div className="w-56 h-52 bg-gray-300 rounded-full"></div>
                    </div>
                    {/* Placeholder for Username */}
                    <div className="mt-2 w-40 h-8 bg-gray-300 rounded"></div>
                    {/* Placeholder for Statistics */}
                    <div className="flex justify-center gap-4 mt-4">
                        <div className="w-24 h-8 bg-gray-300 rounded"></div>
                        <div className="w-24 h-8 bg-gray-300 rounded"></div>
                    </div>
                </div>
                {/* Right Section */}
                <div className="w-full md:w-1/2 flex flex-col gap-y-2">
                    {/* Placeholder for Forms */}
                    <div className="w-full p-4 bg-gray-300 rounded"></div>
                    {/* Placeholder for Bio */}
                    <div className="w-full p-4 bg-gray-300 rounded"></div>
                    {/* Placeholder for Buttons */}
                    <div className="flex justify-end items-end py-4 gap-x-4">
                        <div className="w-1/2 h-10 bg-gray-300 rounded"></div>
                        <div className="w-1/2 h-10 bg-gray-300 rounded"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Preloader;
