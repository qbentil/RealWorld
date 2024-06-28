
"use client"
import { useStateValue } from '@/context/StateProvider';
import { IAuthor, IComment } from '@/interface';
import ArticleServices from '@/services/article.service';
import { formatDate } from '@/utils';
import toasts from '@/utils/toasts';
import { Send2, Trash } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { MdDelete, MdDeleteForever } from 'react-icons/md';


const ArticleComments = ({ slug }: { slug: string }) => {
    const [{ user }, dispatch] = useStateValue()
    const [loading, setLoading] = useState<boolean>(true)
    const [comment, setComment] = useState<string>('')
    const [comments, setComments] = useState<IComment[]>([])


    const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!comment) return toasts.error("Error", "Comment cannot be empty")
        // Add comment to comments array
        ArticleServices.addComment(slug, { body: comment }, (err, data) => {
            if (!err) {
                setComments([data.comment, ...comments])
                setComment('')
            } else {
                toasts.error("Error", "Failed to add comment")
            }
        })
    }

    const handleDeleteComment = (comment: IComment) => {
        // Delete comment from comments array
        ArticleServices.deleteComment(slug, comment.id, (err, data) => {
            if (err) {
                return toasts.error("Error", "Failed to delete comment")
            }
            setComments(comments.filter(c => c.id !== comment.id))
        })
    }


    useEffect(() => {
        ArticleServices.getArticleComments(slug, (err, data) => {
            setLoading(false)
            if (!err) {
                setComments(data.comments)
            }
        })
    }, [slug])

    return (
        <div className='w-full flex flex-col items-start justify-between gap-y-2 '>
            {/* add comment */}
            {
                user ? (<div className="w-full flex items-center justify-start gap-x-4 ">
                    <Image src={user.image} alt={user.username} className="border w-10 h-10 rounded-full" width={40} height={40} />
                    <form onSubmit={handleAddComment} className="flex items-center justify-center px-4 w-full bg-gray-100 border-gray-300 border-2 rounded-full">
                        <input
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="w-full py-2 text-sm text-gray-700 outline-none resize-none bg-transparent flex items-center justify-center"
                            placeholder="Add a comment"
                        />
                        <button disabled={!comment} type='submit' className="flex items-center justify-center text-sm text-primary-600 disabled:opacity-50 disabled:cursor-not-allowed">
                            <Send2 />
                        </button>
                    </form>
                </div>) : <div className='text-sm py-2'>
                    <Link href='/signin' className='text-primary-600'>Signin</Link> or <Link href='/signup' className='text-primary-600'>Signup</Link> to add comments
                </div>
            }
            {
                loading && <div className='text-sm py-2'>Loading comments...</div>

            }
            {!loading && comments.length > 0 && comments.map(comment => (
                <div key={comment.id} className="w-full flex items-start justify-start gap-x-4 ">
                    <Image src={comment.author.image} alt={comment.author.username} className="border w-10 h-10 rounded-full" width={40} height={40} />
                    <div className="px-3 py-1 flex flex-col gap-y-2 items-start justify-between w-full bg-gray-100 rounded">
                        <div className='w-full flex items-center justify-between'>
                            <p className="text-base font-semibold font-mono">{comment.author.username}</p>
                            <div className='flex items-center gap-x-2'>
                                {/* delete iicon if comment is mine */}
                                {
                                    comment.author.username === user.username &&
                                    <button onClick={() => handleDeleteComment(comment)} className='text-xs text-red-500'>
                                        <MdDeleteForever />
                                    </button>
                                }
                                {/* edit icon if comment is mine */}
                                {/* {comment.mine && <button onClick={() => onEditClick(comment.id)} className='text-xs text-primary-500'>Edit</button>} */}
                                <p className="text-xs text-gray-500">{formatDate(comment.createdAt)}</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-700">{comment.body}</p>
                    </div>
                </div>
            ))}
            {
                !loading && comments.length === 0 && <div className='text-sm py-2'>No comments yet</div>
            }
        </div>

    )
}

export default ArticleComments