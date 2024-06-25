/* eslint-disable @next/next/no-img-element */
"use client"

import React, { useState } from 'react';

import Link from 'next/link';
import NavbarUser from './user';

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
        {isLoggedIn ? <NavbarUser /> : (
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
