"use client"

import React, { useState } from 'react'

import Content from '@/components/content'
import HeroSection from '@/components/hero'
import Tags from '@/components/tags'
import { ArrowDown } from 'iconsax-react'

const Page = () => {
  const [query, setQuery] = useState<string>('')
  const [articles, setArticles] = useState<any[]>([])
  return (
    <>
      <HeroSection onQuery={setQuery} />
      <div className='w-screen flex flex-col md:flex-row items-start justify-between  md:px-10 px-5 py-2 bg-[#f7f9fc]'>
        <div className='w-full md:w-[70%] md:flex flex-col items-start justify-center md:gap-x-4'>
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
          {
            !articles.length ? <p>Loading..</p> : <Content />
          }
          {/* load more button */}
          <div className='flex justify-center w-full mt-4'>
            <button className='flex items-center justify-center gap-x-2 text-sm text-primary-600 rounded bg-primary-50 font-bold px-3 py-1  hover:bg-primary-100 cursor-pointer'>
              <ArrowDown />
              Load More
            </button>
          </div>
        </div>
        <Tags />
      </div>
    </>
  )
}

export default Page