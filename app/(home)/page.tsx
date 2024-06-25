"use client"

import React, { useState } from 'react'

import Content from '@/components/content'
import HeroSection from '@/components/hero'
import Tags from '@/components/tags'

const Page = () => {
  const [query, setQuery] = useState<string>('')
  return (
    <div className='h-full'>
      <HeroSection onQuery={setQuery} />
      <div className='w-screen flex flex-col md:flex-row items-start justify-start min-h-[65vh] px-10 py-2 bg-[#f7f9fc]'>
        <div className='w-[70%] flex flex-col items-start justify-center md:gap-x-4'>
          {/* header */}
          <div className='flex items-center justify-between w-full my-2 py-3 border-b border-gray-200'>
            <h2 className='text-2xl font-bold'>Global Feeds</h2>
            <div className='flex items-center gap-x-2'>
              {
                query && <h1 className='text-sm font-bold ml-4 text-primary-800'>
                  <span className='text-gray-600'>Search results for</span>: <span className='underline'>{query}</span>
                </h1>
              }
            </div>
          </div>
          <Content />
        </div>
        <Tags />
      </div>
    </div>
  )
}

export default Page