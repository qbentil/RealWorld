/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState } from 'react';

import Link from 'next/link';

const DefNavbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Simulated login state
  const [dropdown, setDropdown] = useState(false);
  const user = {
    username: 'JohnDoe',
  };

  return (
    <div className='bg-[#f7f9fc] w-screen flex items-center justify-between px-4 md:px-10 py-2'>
      {/* Logo or Name */}
      <Link href={"/"} className='text-xl font-bold text-primary-800'>
        Conduits
      </Link>

      {/* Navigation Links */}
      <div className='flex items-center'>
        {isLoggedIn ? (
          <div className='flex items-center space-x-4'>
            {/* User Info */}
            <img src="/assets/avatar.jpeg" alt='User Avatar' className='w-8 h-8 hidden md:block rounded-full border' />
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
                    <Link href='/dashboard' className='block px-4 py-2 hover:bg-primary-50'>Dashboard</Link>
                    <Link href='/logout' className='block px-4 py-2 hover:bg-primary-50'>Logout</Link>
                  </div>
                )
              }
            </div>
          </div>
        ) : (
          <div className='flex items-center space-x-4'>
            <a href='/login' className='px-4 py-2 text-blue-500 hover:underline'>Login</a>
            <a href='/signup' className='px-4 py-2 text-blue-500 hover:underline'>Signup</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default DefNavbar;
