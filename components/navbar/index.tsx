/* eslint-disable @next/next/no-img-element */

import { ArrowDown2, HambergerMenu } from 'iconsax-react'

import React from 'react'

const Navbar = () => {
    const setFieldValue = (id: string, value: any) => {
        console.log(id, value)
    }
    return (
        <div className='w-full h-full flex justify-between items-center px-4'>
            <h1 className='text-xl font-semibold text-primary-300'>/</h1>
            {/* nav items and user profile */}
            <div className='flex items-center justify-center gap-x-6'>
                {/* user profile with avatar  and active status green dot */}
                <div className='flex items-center gap-x-2'>
                    <div className='w-10 h-10 rounded-lg bg-gray-400 relative'>
                        <img src='/assets/avatar.avif' alt='' className='w-full h-full object-cover rounded-lg' />
                        <div className='h-3 w-3 bg-green-500 rounded-full absolute -bottom-0 -right-0 border-2 border-white'></div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-gray-800 font-bold'>Sylvia Johnson</p>
                        <p className='text-gray-600 text-sm'>Partner</p>
                    </div>
                </div>
                <ArrowDown2 className='text-sm cursor-pointer' size={16} />
            </div>

        </div>
    )
}

export default Navbar