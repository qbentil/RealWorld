import React, { useState } from 'react';

import ArticleServices from '@/services/article.service';
import ArticleTage from './tags';
import { Edit } from 'iconsax-react';
import { IArticle } from '@/interface';
import Image from 'next/image';
import { IoMdHeart } from 'react-icons/io';
import Link from 'next/link';
import { MdDeleteForever } from 'react-icons/md';
import { formatDate } from '@/utils';
import toasts from '@/utils/toasts';
import { useRouter } from 'next/navigation';
import { useStateValue } from '@/context/StateProvider';

const Article = ({ data, onDelete }: { data: IArticle, onDelete: (slug: string) => void }) => {
    const { author, body, createdAt, description, favorited, favoritesCount, slug, tagList, title, updatedAt } = data
    const [article, setArticle] = useState<IArticle>(data as IArticle)
    const [{ user }, dispatch] = useStateValue()
    const router = useRouter()
    const [favoriting, setFavoriting] = useState<boolean>(false)
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
                <div className="flex items-center gap-x-2">
                    {article.author.username === user?.username || "" && (
                        <>
                            <Link
                                className="text-green-500 flex items-center gap-x-2 border border-green-500 px-3 py-1  rounded-lg hover:bg-green-500 hover:text-white"
                                href={`/article/edit/${slug}`}
                            >
                                <Edit /> Edit
                            </Link>
                            <button
                                // disabled={deleting}
                                className="text-red-500 flex items-center gap-x-2 border border-red-500 px-3 py-1  rounded-lg hover:bg-red-500 hover:text-white"
                                onClick={() => onDelete(slug)}
                            >
                                <MdDeleteForever /> Delete
                            </button>
                        </>
                    )}
                    {article.author.username !== user?.username && <div className={`flex items-center mt-4 border px-3 py-1  rounded-lg ${!article.favorited ? "text-primary-500  border-primary-500 hover:bg-primary-500 hover:text-white" : "bg-primary-500 text-white"}  `}>
                        <button
                            onClick={handleFavorite}
                            className="flex text-sm items-center"
                        >
                            <IoMdHeart />
                            {
                                favoriting ? "..." : article?.favoritesCount
                            }
                        </button>

                    </div>}
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
