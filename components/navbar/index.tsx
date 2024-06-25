"use client"

import { ArrowDown2, HambergerMenu } from 'iconsax-react'

import Image from 'next/image'
import React from 'react'
import { usePathname } from 'next/navigation'
import NavbarUser from '../nav/user'

const Navbar = () => {
    const path = usePathname()
    return (
        <div className='w-full h-full flex justify-between items-center px-4'>
            <h1 className='text-sm font-semibold text-primary-800'>{path}</h1>
            <NavbarUser />
        </div>
    )
}

export default Navbar