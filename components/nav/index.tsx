"use client"

import React, { useState } from 'react';

import Link from 'next/link';
import NavbarUser from './user';
import { useStateValue } from '@/context/StateProvider';

const DefNavbar = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className='bg-[#f7f9fc] w-screen flex items-center justify-between px-4 md:px-10 py-2'>
      {/* Logo or Name */}
      <Link href={"/"} className='text-xl font-bold text-primary-800'>
        Conduits
      </Link>

      {/* Navigation Links */}
      <div className='flex items-center'>
        {user ? <NavbarUser /> : (
          <div className='flex items-center space-x-4'>
            <a href='/signin' className='px-4 py-2 text-primary-500 hover:underline'>Signin</a>
            <a href='/signup' className='px-4 py-2 text-primary-500 hover:underline'>Signup</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default DefNavbar;
