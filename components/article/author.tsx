"use client"

import React, { useState } from 'react'

import { Add, UserAdd, UserRemove } from 'iconsax-react'
import { IArticle } from '@/interface'
import Image from 'next/image'
import { IoMdHeart } from 'react-icons/io'
import { formatDate } from '@/utils'
import UserService from '@/services/user.service'
import { useStateValue } from '@/context/StateProvider'
import toasts from '@/utils/toasts'
import { useRouter } from 'next/navigation'
import ArticleServices from '@/services/article.service'

const Author = ({ data }: { data: IArticle | null }) => {
    const [article, setArticle] = useState<IArticle>(data as IArticle)
    const [following, setFollowing] = useState<boolean>(false)
    const [favoriting, setFavoriting] = useState<boolean>(false)
    const [{ user }, dispatch] = useStateValue()
    const router = useRouter()
    const handleFollow = () => {
        if (!user) {
            toasts.error("Login", "Signin to follow author")
            return router.push("/signin")
        }
        setFollowing(true)
        UserService.followAuthor(!article?.author.following, article?.author.username || "", (err, data) => {
            setFollowing(false)
            if (!err) {
                setArticle({
                    ...article,
                    author: {
                        ...article?.author,
                        following: !article?.author.following
                    }
                })
            }
        })
    }

    const handleFavorite = () => {
        if (!user) {
            toasts.error("Login", "Signin to favorite article")
            return router.push("/signin")
        }
        setFavoriting(true)
        ArticleServices.favoriteArticle(!article?.favorited, article?.slug || "", (err, data) => {
            setFavoriting(false)
            if (!err) {
                setArticle({
                    ...article,
                    favorited: !article?.favorited,
                    favoritesCount: article?.favorited ? article?.favoritesCount - 1 : article?.favoritesCount + 1
                })
            }
        })
    }

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
                    <div className="text-primary-500 font-bold">{article?.author.username}</div>
                    <div className="text-gray-500 text-sm font-thin">{formatDate(article?.createdAt || "")}</div>
                </div>
            </div>
            <div className='flex gap-x-2'>
                <div className="flex items-center border text-gray-600 hover:text-white  border-gray-500 px-3 py-1  rounded hover:bg-gray-500">
                    <button
                        onClick={handleFollow}
                        className="flex text-sm items-center gap-x-2"
                    >
                        {
                            article?.author?.following ? <UserRemove className='text-sm' /> : <UserAdd />
                        }
                        {
                            !following ? article?.author.following ? 'unfollow' : 'follow author' : 'loading...'
                        }
                    </button>
                </div>
                <div className={`flex items-center border px-3 py-1  rounded  ${article?.favorited? "text-white  border-primary-500 bg-primary-500":"text-primary-600 hover:text-white  border-primary-500 hover:bg-primary-500"}`}>
                    <button
                        onClick={handleFavorite}
                        className="flex text-sm items-center  gap-x-2"
                    >
                        <IoMdHeart />
                        {
                            !favoriting ? article?.favorited ? `unfavorite article(${article?.favoritesCount || 0})` : `favorite article(${article?.favoritesCount || 0})` : 'loading...'
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Author