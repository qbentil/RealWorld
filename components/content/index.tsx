import { IArticle } from '@/interface'
import Article from '../article'
import React from 'react'

const Content = ({ data }: { data: IArticle[] }) => {
    return (
        <div className='w-full'>
            {
                data.map(article => (
                    <Article data={article} key={article.slug} />
                ))
            }
        </div>
    )
}

export default Content