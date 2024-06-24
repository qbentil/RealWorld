'use client'

import { Icon, LogoutCurve } from 'iconsax-react'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { SideNavs } from '@/utils'
import { usePathname } from 'next/navigation'

interface NavItemProps {
    Icon: Icon
    name: string
    href: string

}
const NavItem: React.FC<NavItemProps> = ({ Icon, name, href }) => {
    const active = usePathname() === href
    return (
        <p className="flex items-center justify-start w-full">
            <Link href={href} className={`flex items-center justify-start w-full h-full  ${!active ? "text-white hover:text-primary-300 hover:border-r-2 hover:border-primary-300" : "text-primary-100 border-r-2 border-primary-200"}`}>
                <Icon />
                <span className="ml-4">{name}</span>
            </Link>
        </p>
    )
}



const Sidebar = () => {
    const path = usePathname()
    return (
        <div className="w-full h-full bg-primary-800">
            {/* logo */}
            <div className="flex items-center justify-center gap-x-2 h-16">
                <Image src="/assets/logo.png" alt="logo" width={40} height={40} className='border border-white rounded bg-white' />
                <p className='font-bold text-white text-xl'>Accede-Feeds</p>
            </div>
            <div className='flex items-start justify-center pl-6 mt-6 gap-y-4 flex-col w-full'>
                {
                    SideNavs.map((nav) => (
                        <NavItem key={nav.name} {...nav} href={`${path}${nav.href}`} />
                    ))
                }
            </div>

            {/* logout */}
            <div className="absolute bottom-0 w-full pl-6">
                <Link href="/signin" className="flex items-center justify-start w-full h-16 text-white hover:text-primary-300">
                    <LogoutCurve />
                    <span className="ml-4">Logout</span>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar