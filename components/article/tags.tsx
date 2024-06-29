import React from 'react'

const ArticleTage = ({ tags }: { tags: string[] }) => {
    return (
        <div className='flex flex-wrap gap-x-2 text-[0.5rem] md:text-sm'>
            {
                tags.map(tag => <p key={tag} className="text-primary-500 font-bold rounded-full px-2 md:px-3 py-1 border-primary-300 border">{tag}</p>)
            }
        </div>
    )
}

export default ArticleTage