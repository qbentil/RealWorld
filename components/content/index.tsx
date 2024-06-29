import Article from '../article'
import { IArticle } from '@/interface'
import React from 'react'

const Content = ({ data, onDelete }: { data: IArticle[], onDelete: (slug: string) => void }) => {
    return (
        <div className='w-full'>
            {
                data.map(article => (
                    <Article data={article} key={article.slug} onDelete={onDelete} />
                ))
            }
        </div>
    )
}

export default Content