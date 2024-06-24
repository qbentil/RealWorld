import React from 'react'
import SearchSelectInput from '../core/search-input'

const HeroSection: React.FC<{ onQuery: (s: string) => void }> = ({ onQuery }) => {
    return (
        <div className='w-screen flex flex-col gap-y-4 py-5 items-center justify-center min-h-[50vh] px-4'>
            <div className='flex items-center justify-center bg-primary-50 text-primary-600 rounded-full font-bold px-4 py-1'>
                Conduit
            </div>
            <h1 className='text-2xl font-bold ml-4 text-primary-800'>
                Resources and insights
            </h1>
            <p className='text-sm text-primary-500'>A place to share your knowledge.</p>

            <div className='w-full md:w-1/5'>
                <SearchSelectInput id='search' label='Search' placeholder='Search for articles' handleChange={onQuery} />
            </div>
        </div>
    )
}

export default HeroSection