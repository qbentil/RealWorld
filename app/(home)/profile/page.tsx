"use client"

import Article from "@/components/article"
import ArticleTage from "@/components/article/tags"
import { Add } from "iconsax-react"
import Image from "next/image"
import Link from "next/link"
import { IoMdHeart } from "react-icons/io"

const Page = () => {
  return (
    <div className='w-screen flex flex-col items-center justify-center'>
      <div className='w-full flex items-center justify-center bg-gray-300'>
        <div className='w-full md:w-[70%] flex flex-col gap-y-4 py-5 items-center md:items-start justify-center px-4'>
          <div className="w-full flex items-center mb-4 justify-start gap-x-10">
            <div className='w-full flex flex-col md:flex-row gap-y-4 md:gap-x-4 items-center md:items-center justify-center md:justify-start '>
              <div className='flex'>
                <Image
                  src={"/assets/avatar.jpeg"}
                  alt={`John's avatar`}
                  className="w-12 h-12 rounded-full mr-4"
                  width={48}
                  height={48}
                />
                <div>
                  <div className="text-primary-500 font-bold">John Nkrumah</div>
                  <div className="text-gray-500 text-sm font-thin">Jan 24, 2024</div>
                </div>
              </div>
              <div className='flex gap-x-2 flex-row-reverse'>
                <div className="flex items-center border text-gray-600 hover:text-white  border-gray-500 px-3 py-1  rounded hover:bg-gray-500">
                  <Link
                    href={"/editor"}
                    className="flex text-sm items-center gap-x-2"
                  >
                    <Add />
                    Add new Article
                  </Link>
                </div>
                <div className="flex items-center border text-primary-600  border-primary-500 px-3 py-1  rounded">
                  <p
                    className="flex text-sm items-center  gap-x-2"
                  >
                    <IoMdHeart />
                    150 followers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-screen flex items-center justify-center'>
        <div className='w-full md:w-[70%] flex flex-col gap-y-4 py-5 items-start justify-center px-4'>
          <p className='text-sm text-primary-500'>Welcome back bentil!</p>
          {/* divider */}
          <div className='w-full border-b border-gray-200 my-4' />
          <Article />
          <Article />
        </div>
      </div>
    </div>
  )
}

export default Page