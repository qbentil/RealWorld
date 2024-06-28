"use client"

import { IArticle } from '@/interface'
import { formatDate } from '@/utils'
import { Add } from 'iconsax-react'
import Image from 'next/image'
import React from 'react'
import { IoMdHeart } from 'react-icons/io'

const Author = ({ data }: { data: IArticle | null }) => {

    return (
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
                    <div className="text-primary-500 font-bold">{data?.author.username}</div>
                    <div className="text-gray-500 text-sm font-thin">{formatDate(data?.createdAt || "")}</div>
                </div>
            </div>
            <div className='flex gap-x-2'>
                <div className="flex items-center border text-gray-600 hover:text-white  border-gray-500 px-3 py-1  rounded hover:bg-gray-500">
                    <button
                        onClick={() => console.log('like')}
                        className="flex text-sm items-center gap-x-2"
                    >
                        <Add />
                        follow author
                    </button>
                </div>
                <div className="flex items-center border text-primary-600 hover:text-white  border-primary-500 px-3 py-1  rounded hover:bg-primary-500">
                    <button
                        onClick={() => console.log('like')}
                        className="flex text-sm items-center  gap-x-2"
                    >
                        <IoMdHeart />
                        favorite article({data?.favoritesCount || 0})
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Author