"use client"

import Author from "@/components/article/author"
import ArticleComments from "@/components/article/comments"
import ArticleTage from "@/components/article/tags"
import Link from "next/link"
import { useState } from "react"

const Page = () => {
  return (
    <div className='w-screen flex flex-col items-center justify-center'>
      <div className='w-full flex items-center justify-center bg-gray-300'>
        <div className='w-full md:w-[70%] flex flex-col gap-y-4 py-5 items-center md:items-start justify-center px-4'>
          <h1 className='text-xl font-bold ml-4 text-primary-800'>
            Article Title
          </h1>
          <div className="w-full flex items-center mb-4 justify-start gap-x-10">
            <Author />
          </div>
        </div>
      </div>
      <div className='w-screen flex items-center justify-center'>
        <div className='w-full md:w-[70%] flex flex-col gap-y-4 py-5 items-start justify-center px-4'>
          <p className='text-sm text-primary-500'>A place to share your knowledge.</p>
          <p className="text-gray-700 mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos qui commodi a quidem temporibus voluptas incidunt molestiae, excepturi accusantium possimus, aperiam, quis dicta repudiandae nihil enim hic. Quia, rem in.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque modi ducimus fugit numquam saepe, commodi ullam quisquam eaque, officia, aperiam amet tenetur maxime fuga aut sed blanditiis rem facilis voluptates.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et maxime, sapiente laudantium fuga quae tempore veritatis dolorem commodi mollitia eveniet ducimus deserunt rem harum! Dolores quam fugiat facilis quaerat corporis.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima facilis autem animi qui eligendi eius quidem enim fugit expedita. Earum optio quia iusto, velit explicabo tempora! Voluptate voluptatum fugiat excepturi!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum veniam amet, eius corrupti porro a vitae laboriosam velit totam voluptates cupiditate, facere libero expedita! Deserunt dolorum mollitia porro similique aut.
          </p>
          <ArticleTage />
        </div>
      </div>
      {/* divider */}
      <div className='w-full md:w-[70%] border-b border-gray-200 my-4' />
      <div className='w-full md:w-[70%]  flex items-center justify-center gap-x-10 px-4'>
        <Author />
      </div>
      <div className='w-full md:w-[70%] flex items-center justify-start gap-x-10'>
        {/* comments on article */}
        <div className='w-full flex items-center justify-start'>
          <div className='w-full flex flex-col gap-y-4 py-5 items-start justify-center px-4'>
            <h1 className='text-xl font-bold text-primary-800'>
              Comments
            </h1>
            <div className='w-full flex items-center justify-between'>
              <ArticleComments />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Page