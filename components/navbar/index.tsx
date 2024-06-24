"use client"

import { ArrowDown2, HambergerMenu } from 'iconsax-react'

import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const path = usePathname()
    return (
        <div className='w-full h-full flex justify-between items-center px-4'>
            <h1 className='text-xl font-semibold text-primary-300 capitalize'>{path}</h1>
            {/* nav items and user profile */}
            <div className='flex items-center justify-center gap-x-2'>
                {/* user profile with avatar  and active status green dot */}
                <div className='flex items-center gap-x-2'>
                    <div className='w-10 h-10 rounded-full bg-gray-400 relative'>
                        <Image src='/assets/avatar.avif' alt='' width={60} height={60} className='w-full h-full object-cover rounded-full' />
                        <div className='h-3 w-3 bg-green-500 rounded-full absolute -bottom-0 -right-0 border-2 border-white'></div>
                    </div>
                    <p className='text-gray-800 font-bold'>Sylvia Johnson</p>
                </div>
                <ArrowDown2 className='text-sm cursor-pointer' size={16} />
            </div>

        </div>
    )
}

export default Navbar