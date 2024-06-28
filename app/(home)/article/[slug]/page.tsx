"use client"

import Author from "@/components/article/author"
import ArticleComments from "@/components/article/comments"
import ArticleTage from "@/components/article/tags"
import ArticleSkeleton from "@/components/preloaders/article"
import { IArticle } from "@/interface"
import ArticleServices from "@/services/article.service"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const Page = () => {
  const [article, setArticle] = useState<IArticle | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const pathname = usePathname()

  useEffect(() => {
    const names = pathname.split("/")
    const slug = names[names.length - 1]

    ArticleServices.getArticle(slug, (err, data) => {
      setArticle(data.article)
      setLoading(false)
    })
  }, [pathname])

  if (loading) {
    return <ArticleSkeleton />
  }

  return (
    <div className='w-screen flex flex-col items-center justify-center'>
      <div className='w-full flex items-center justify-center bg-gray-300'>
        <div className='w-full md:w-[70%] flex flex-col gap-y-4 py-5 items-center md:items-start justify-center px-4'>
          <h1 className='text-xl font-bold ml-4 text-primary-800'>
            {article?.title}
          </h1>
          <div className="w-full flex items-center mb-4 justify-start gap-x-10">
            <Author data={article} />
          </div>
        </div>
      </div>
      <div className='w-screen flex items-center justify-center'>
        <div className='w-full md:w-[70%] flex flex-col gap-y-4 py-5 items-start justify-center px-4'>
          <p className='text-sm text-primary-500'>{article?.description}</p>
          <p className="text-gray-700 mb-4">
            {article?.body}
          </p>
          <ArticleTage tags={article?.tagList || []} />
        </div>
      </div>
      {/* divider */}
      <div className='w-full md:w-[70%] border-b border-gray-200 my-4' />
      <div className='w-full md:w-[70%]  flex items-center justify-center gap-x-10 px-4'>
        <Author data={article} />
      </div>
      <div className='w-full md:w-[70%] flex items-center justify-start gap-x-10'>
        {/* comments on article */}
        <div className='w-full flex items-center justify-start'>
          <div className='w-full flex flex-col gap-y-4 py-5 items-start justify-center px-4'>
            <h1 className='text-xl font-bold text-primary-800'>
              Comments
            </h1>
            <div className='w-full flex items-center justify-between'>
              <ArticleComments slug={article?.slug || ""} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
