"use client"

import React, { useState } from 'react'

import HeroSection from '@/components/hero'

const Page = () => {
  const [query, setQuery] = useState<string>('')
  return (
    <div className='min-h-screen'>
      <HeroSection onQuery={setQuery} />
    </div>
  )
}

export default Page