import { IoMdHeart } from 'react-icons/io';
import Link from 'next/link';
import React from 'react';
import ArticleTage from './tags';
import Image from 'next/image';
import { IArticle } from '@/interface';
import { formatDate } from '@/utils';

const Article = ({ data }: { data: IArticle }) => {
    const { author, body, createdAt, description, favorited, favoritesCount, slug, tagList, title, updatedAt } = data
    return (
        <div className="w-full  md:p-6 py-2 border-b border-gray-200 ">
            <div className="flex items-center mb-4 justify-between">
                <div className='flex'>
                    <Image
                        src={author.image}
                        alt={`John's avatar`}
                        className="w-12 h-12 rounded-full mr-4"
                        width={48}
                        height={48}
                    />
                    <div>
                        <div className="text-primary-500 font-bold">{author.username}</div>
                        <div className="text-gray-500 text-sm font-thin">{formatDate(updatedAt)}</div>
                    </div>
                </div>
                <div className={`flex items-center mt-4 border px-3 py-1  rounded-lg ${!favorited ? "text-primary-500  border-primary-500 hover:bg-primary-500 hover:text-white" : "bg-primary-500 text-white"}  `}>
                    <button
                        onClick={() => null}
                        className="flex text-sm items-center"
                    >
                        <IoMdHeart />
                        {favoritesCount}
                    </button>
                </div>
            </div>
            <Link href={`/article/${slug}`} className="text-2xl font-bold mb-2 line-clamp-2">{title}</Link>
            <p className="text-gray-700 mb-4">
                {description}
            </p>
            <div className='flex items-center justify-between'>
                <Link href={`/article/${slug}`} className="text-primary-500 hover:underline">
                    Read more..
                </Link>
                <ArticleTage tags={tagList} />
            </div>
        </div>
    );
};

export default Article;
