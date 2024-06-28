import React from 'react';

const ArticleSkeleton = () => {
  return (
    <div className='w-screen flex flex-col items-center justify-center'>
      <div className='w-full flex items-center justify-center bg-gray-300'>
        <div className='w-full md:w-[70%] flex flex-col gap-y-4 py-5 items-center md:items-start justify-center px-4'>
          <div className='h-8 bg-gray-200 rounded w-3/4 animate-pulse'></div>
          <div className="w-full flex items-center mb-4 justify-start gap-x-10">
            <div className='h-8 w-8 bg-gray-200 rounded-full animate-pulse'></div>
            <div className='h-6 bg-gray-200 rounded w-1/4 animate-pulse'></div>
          </div>
        </div>
      </div>
      <div className='w-screen flex items-center justify-center'>
        <div className='w-full md:w-[70%] flex flex-col gap-y-4 py-5 items-start justify-center px-4'>
          <div className='h-4 bg-gray-200 rounded w-1/4 animate-pulse mb-4'></div>
          <div className="space-y-4">
            <div className='h-4 bg-gray-200 rounded w-full animate-pulse'></div>
            <div className='h-4 bg-gray-200 rounded w-full animate-pulse'></div>
            <div className='h-4 bg-gray-200 rounded w-full animate-pulse'></div>
            <div className='h-4 bg-gray-200 rounded w-full animate-pulse'></div>
            <div className='h-4 bg-gray-200 rounded w-full animate-pulse'></div>
          </div>
          <div className='h-6 bg-gray-200 rounded w-1/4 animate-pulse mt-4'></div>
        </div>
      </div>
      {/* divider */}
      <div className='w-full md:w-[70%] border-b border-gray-200 my-4' />
      <div className='w-full md:w-[70%]  flex items-center justify-center gap-x-10 px-4'>
        <div className='h-8 w-8 bg-gray-200 rounded-full animate-pulse'></div>
        <div className='h-6 bg-gray-200 rounded w-1/4 animate-pulse'></div>
      </div>
      <div className='w-full md:w-[70%] flex items-center justify-start gap-x-10'>
        {/* comments on article */}
        <div className='w-full flex items-center justify-start'>
          <div className='w-full flex flex-col gap-y-4 py-5 items-start justify-center px-4'>
            <div className='h-8 bg-gray-200 rounded w-1/4 animate-pulse'></div>
            <div className='w-full flex items-center justify-between'>
              <div className='h-6 bg-gray-200 rounded w-full animate-pulse'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleSkeleton;
