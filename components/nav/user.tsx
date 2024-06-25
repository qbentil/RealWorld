import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavbarUser = () => {
    const [dropdown, setDropdown] = React.useState(false)
    const path = usePathname()
    return (
        <div className='flex items-center space-x-4'>
            {/* User Info */}
            <Image src="/assets/avatar.jpeg" alt='User Avatar' className='w-8 h-8 hidden md:block rounded-full border' width={32} height={32} />
            <span>{"user.username"}</span>
            {/* Dropdown Menu */}
            <div className='relative'>
                <button
                    onClick={() => setDropdown(!dropdown)}
                    className='group flex items-center px-4 py-1 bg-primary-50 text-primary-600 rounded hover:bg-primary-100 hover:text-primary-800'>
                    Account
                    <svg className='w-4 h-4 ml-1' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
                    </svg>
                </button>
                {
                    dropdown && (
                        <div className='absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg'>
                            {
                                path.includes('/dashboard') ? (
                                    <Link href='/' className='block px-4 py-2 hover:bg-primary-50'>Home</Link>
                                ) : <Link href='/dashboard' className='block px-4 py-2 hover:bg-primary-50'>Dashboard</Link>
                            }
                            <Link href='/logout' className='block px-4 py-2 hover:bg-primary-50'>Logout</Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default NavbarUser