/* eslint-disable @next/next/no-img-element */

import { Heart } from 'iconsax-react';
import { IoMdHeart } from 'react-icons/io';
import Link from 'next/link';
import React from 'react';

const Article = () => {
    return (
        <div className="w-full  md:p-6 py-2 border-b border-gray-200 ">
            <div className="flex items-center mb-4 justify-between">
                <div className='flex'>
                    <img
                        src={"/assets/avatar.jpeg"}
                        alt={`John's avatar`}
                        className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                        <div className="text-primary-500 font-bold">Name</div>
                        <div className="text-gray-500 text-sm font-thin">Jan 24, 2024</div>
                    </div>
                </div>
                <div className="flex items-center mt-4 border  border-primary-500 px-3 py-1  rounded-lg hover:bg-primary-500">
                    <button
                        onClick={() => null}
                        className="flex text-sm items-center text-primary-600 hover:text-white"
                    >
                        <IoMdHeart />
                        {10}
                    </button>
                </div>
            </div>
            <h2 className="text-2xl font-bold mb-2">plentyyyyyyyyyyyy</h2>
            <p className="text-gray-700 mb-4">
                lorem loren lorem lorem lorem lorem
            </p>
            <div className='flex items-center justify-between'>
                <Link href="/" className="text-primary-500 hover:underline">
                    Read more...
                </Link>
                <div className='flex flex-wrap gap-x-2 text-[0.5rem] md:text-sm'>
                    <p className="text-primary-500 font-bold rounded-full px-2 md:px-3 py-1 border-primary-300 border">Tag 1</p>
                    <p className="text-primary-500 font-bold rounded-full px-2 md:px-3 py-1 border-primary-300 border">Tag 1</p>
                    <p className="text-primary-500 font-bold rounded-full px-2 md:px-3 py-1 border-primary-300 border">Tag 1</p>
                </div>
            </div>
        </div>
    );
};

export default Article;
