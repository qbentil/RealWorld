import { useStateValue } from '@/context/StateProvider'
import toasts from '@/utils/toasts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavbarUser = () => {
    const [dropdown, setDropdown] = React.useState(false)
    const [{ user }, dispatch] = useStateValue()
    const logout = () => {
        dispatch({
            type: 'LOGOUT'
        })
        setDropdown(!dropdown)
        toasts.success("Successful", "Logged out..", {
            position: 'bottom-right',
        });
    }
    return (
        <div className='flex items-center space-x-4'>
            {/* User Info */}
            <Image src={user.image} alt='User Avatar' className='w-8 h-8 hidden md:block rounded-full border' width={32} height={32} />
            <span>{user.username}</span>
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
                            <Link href='/profile' className='block px-4 py-2 hover:bg-primary-50' onClick={() => setDropdown(!dropdown)}>Profile</Link>
                            <Link href='/editor' className='block px-4 py-2 hover:bg-primary-50' onClick={() => setDropdown(!dropdown)}>New Article</Link>
                            <p onClick={logout} className=' cursor-pointer block px-4 py-2 hover:bg-primary-50' >Logout</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default NavbarUser