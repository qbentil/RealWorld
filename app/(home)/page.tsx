"use client"

import { ArrowDown, GlobalSearch, Hashtag, HeartTick, ReceiptEdit } from 'iconsax-react'
import { IArticle, IArticleQueries, ITab } from '@/interface'
// import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'

import ArticleServices from '@/services/article.service'
import ArticlesPreloader from '@/components/preloaders/articles'
import Content from '@/components/content'
import HeroSection from '@/components/hero'
import { HomeTabs } from '@/utils'
import Tabs from '@/components/tabs'
import Tags from '@/components/tags'
import { useStateValue } from '@/context/StateProvider'
import NoRecordsFound from '@/components/no-content'
import ErrorComponent from '@/components/error'
import toasts from '@/utils/toasts'






const Page = () => {
  const [query, setQuery] = useState<string>('')
  const [tab, setTab] = useState<string>('global_feed')
  const [tabs, setTabs] = useState<ITab[]>(HomeTabs) // Predefine tabs to be used: HomeTabs
  const [tag, setTag] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [{ user, articles }, dispatch] = useStateValue()
  const [fetchQueries, setFetchQueries] = useState<IArticleQueries>({
    limit: 10
  })
  const [articlesCount, setArticlesCount] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  const [filteredArticles, setFilteredArticles] = useState<IArticle[]>([])
  const handleQuerying = () => {
    if (query) {
      const filtered = articles.filter((article: IArticle) =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.body.toLowerCase().includes(query.toLowerCase()) ||
        article.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredArticles(filtered);
    } else {
      setFilteredArticles(articles);
    }
  }
  const handleAddTag = (tag: string) => {
    setTag(tag)

    const newTab: ITab = { Icon: Hashtag, name: "tag", label: tag }

    // check if there is tab with value 'tag', update it to new tag else add new tab
    const index = tabs.findIndex(tab => tab.name === 'tag')
    if (index !== -1) {
      const newTabs = [...tabs]
      newTabs[index] = newTab
      setTabs(newTabs)
      return
    }

    setTabs([...tabs, newTab])
  }


  const fetchArticles = () => {
    setLoading(true)
    switch (tab) {
      case 'favorited_feed':
        setFetchQueries({ limit: 10, offset: 0, favorited: user.username })
        ArticleServices.getGlobalFeed({ limit: 10, offset: 0, favorited: user?.username }, (error, data) => {
          setLoading(false)
          if (!error) {
            dispatch({
              type: "SET_ARTICLES",
              payload: data.articles
            })
            setFilteredArticles(data.articles)
            setFetchQueries({
              ...fetchQueries, offset: data.articles.length,
            })
            setArticlesCount(data.articlesCount)
          } else {
            setError(error)
          }
        })
        break;
      case 'my_feed':
        setFetchQueries({ limit: 10, offset: 0, author: user.username })
        ArticleServices.getGlobalFeed({ limit: 10, offset: 0, author: user.username }, (error, data) => {
          setLoading(false)
          if (!error) {
            dispatch({
              type: "SET_ARTICLES",
              payload: data.articles
            })
            setFilteredArticles(data.articles)
            setFetchQueries({
              ...fetchQueries, offset: data.articles.length,
            })
            setArticlesCount(data.articlesCount)
          } else {
            setError(error)
          }
        })
        break;
      case 'tag':
        setFetchQueries({ limit: 10, offset: 0, tag })
        ArticleServices.getGlobalFeed({ limit: 10, offset: 0, tag }, (error, data) => {
          setLoading(false)
          if (!error) {
            dispatch({
              type: "SET_ARTICLES",
              payload: data.articles
            })
            setFilteredArticles(data.articles)
            setFetchQueries({
              ...fetchQueries, offset: data.articles.length,
            })
            setArticlesCount(data.articlesCount)
          } else {
            setError(error)
          }
        })
        break;
      default:
        setFetchQueries({ limit: 10, offset: 0 })
        ArticleServices.getGlobalFeed({ limit: 10, offset: 0 }, (error, data) => {
          setLoading(false)
          if (!error) {
            dispatch({
              type: "SET_ARTICLES",
              payload: data.articles
            })
            setFilteredArticles(data.articles)
            setFetchQueries({
              ...fetchQueries, offset: data.articles.length,
            })
            setArticlesCount(data.articlesCount)
          } else {
            setError(error)
          }
        })
    }
  }

  const retry = () => {
    setLoading(true)
    fetchArticles()
  }

  const handleTabChange = (newtab: string) => {
    // toasts.success(tab, `Switched to ${newtab} tab`)
    // if (tab !== "tag" && newtab === tab) return
    setTab(newtab)

  }

  // always activate tag tab when tag is set
  useEffect(() => {
    if (tag) {
      setTab('tag')
    }
  }, [tag])

  // handle tabs based on user login status
  useEffect(() => {
    if (user) {
      setTabs([...HomeTabs,
      {
        name: 'favorited_feed',
        label: 'Favorites',
        Icon: HeartTick
      },
      {
        name: 'my_feed',
        label: 'My Articles',
        Icon: ReceiptEdit
      }
      ])
    } else {
      setTabs(HomeTabs)
    }
  }, [user])

  useEffect(() => {
    fetchArticles()
  }, [tab])





  useEffect(() => {
    handleQuerying();
  }, [query, articles]);

  return (
    < >
      <HeroSection onQuery={setQuery} />
      <div className='w-screen flex flex-col md:flex-row items-start justify-between  md:px-10 px-5 py-2 bg-[#f7f9fc]'>
        <div className='w-full md:w-[70%] md:flex flex-col items-start justify-center md:gap-x-4'>
          <div className='flex items-center justify-between w-full my-2 py-3'>
            {/* Page tabs */}
            {!query && <Tabs tab={tab} setTab={handleTabChange} tabs={tabs} />}
            {
              query &&
              <div className="flex justify-start items-center w-full border-b-2 ">
                <h1 className='font-bold ml-4 text-primary-800 mr-4 p-2 flex items-center justify-center gap-x-2'>
                  <GlobalSearch />
                  <span className='text-gray-600'>Searching..</span>: <span className='underline'>{query}</span>
                </h1>
              </div>
            }
          </div>
          {
            error ? (
              <ErrorComponent message={error} onRetry={retry} />
            ) : (
              <>
                {
                  loading && <ArticlesPreloader />
                }
                {
                  !loading && filteredArticles.length <= 0 && <NoRecordsFound />
                }
                {
                  !loading && filteredArticles && <Content data={filteredArticles} />
                }
                {/* load more button */}
                {
                  articlesCount > filteredArticles.length && <div className='flex items-center justify-center w-full mt-4'>
                    <button className='flex items-center justify-center gap-x-2 bg-primary-500 text-white px-4 py-2 rounded-lg'>
                      <span>Load More</span>
                      <ArrowDown />
                    </button>
                  </div>
                }
              </>
            )
          }
        </div>
        <Tags setTag={handleAddTag} />
      </div >
    </ >
  )
}

export default Page
