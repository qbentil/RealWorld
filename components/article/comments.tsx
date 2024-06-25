
"use client"
import toasts from '@/utils/toasts';
import { Send2, Trash } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { MdDelete, MdDeleteForever } from 'react-icons/md';


const ArticleComments = () => {
    const [loggedIn, setLoggedIn] = useState<boolean>(true)
    const [comment, setComment] = useState<string>('')
    const [comments, setComments] = useState([
        {
            id: 1,
            userName: "John Doe",
            userPicture: "/path/to/user1.jpg",
            date: "2024-06-25",
            mine: false,
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos qui commodi a quidem temporibus voluptas incidunt molestiae, excepturi accusantium possimus, aperiam, quis dicta repudiandae nihil enim hic. Quia, rem in."
        },
        {
            id: 2,
            userName: "Jane Smith",
            userPicture: "/path/to/user2.jpg",
            date: "2024-06-26",
            mine: false,
            text: "Really insightful."
        },
        // More comments can be added here
    ])


    const handleAddComment = () => {
        // Add comment to comments array
        setComments([{
            id: comments.length + 1,
            userName: "Shadrack Bentil",
            userPicture: "/path/to/user1.jpg",
            date: new Date().toISOString().split('T')[0],
            text: comment,
            mine: true
        }, ...comments,])
        setComment('')
    }

    const handleDeleteComment = (id: number) => {
        // Delete comment from comments array
        setComments(comments.filter(comment => comment.id !== id))
    }

    const handleEditComment = (id: number, newText: string) => {
        // Edit comment in comments array
        setComments(comments.map(comment => {
            if (comment.id === id) {
                comment.text = newText
            }
            return comment
        }))
    }

    const onEditClick = (id: number) => {
        // set comment to edit in input field
        const comment = comments.find(comment => comment.id === id)
        setComment(comment?.text || '')
        // delete comment from comments array
        handleDeleteComment(id)
    }

    return (
        <div className='w-full flex flex-col items-start justify-between gap-y-2 '>
            {/* add comment */}
            {
                loggedIn ? (<div className="w-full flex items-center justify-start gap-x-4 ">
                    <Image src={"/assets/avatar.jpeg"} alt="Your avatar" className="border w-10 h-10 rounded-full" width={40} height={40} />
                    <form onSubmit={handleAddComment} className="flex items-center justify-center px-4 w-full bg-gray-100 border-gray-300 border-2 rounded-full">
                        <input
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="w-full py-2 text-sm text-gray-700 outline-none resize-none bg-transparent flex items-center justify-center"
                            placeholder="Add a comment"
                        />
                        <button disabled={!comment} onClick={handleAddComment} className="flex items-center justify-center text-sm text-primary-600 disabled:opacity-50 disabled:cursor-not-allowed">
                            <Send2 />
                        </button>
                    </form>
                </div>) : <div className='text-sm py-2'>
                    <Link href='/signin' className='text-primary-600'>Signin</Link> or <Link href='/signup' className='text-primary-600'>Signup</Link> to add comments
                </div>
            }
            {comments.map(comment => (
                <div key={comment.id} className="w-full flex items-start justify-start gap-x-4 ">
                    <Image src={"/assets/avatar.jpeg"} alt={comment.userName} className="border w-10 h-10 rounded-full" width={40} height={40} />
                    <div className="px-3 py-1 flex flex-col gap-y-2 items-start justify-between w-full bg-gray-100 rounded">
                        <div className='w-full flex items-center justify-between'>
                            <p className="text-base font-semibold font-mono">{comment.userName}</p>
                            <div className='flex items-center gap-x-2'>
                                {/* delete iicon if comment is mine */}
                                {
                                    comment.mine &&
                                    <button onClick={() => handleDeleteComment(comment.id)} className='text-xs text-red-500'>
                                        <MdDeleteForever />
                                    </button>
                                }
                                {/* edit icon if comment is mine */}
                                {/* {comment.mine && <button onClick={() => onEditClick(comment.id)} className='text-xs text-primary-500'>Edit</button>} */}
                                <p className="text-xs text-gray-500">{comment.date}</p>
                            </div>
                        </div>
                        <p className="text-sm text-gray-700">{comment.text}</p>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default ArticleComments