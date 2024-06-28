"use client"

import { ArrowDown, GlobalSearch, Hashtag, HeartTick, ReceiptEdit } from 'iconsax-react'
import React, { useEffect, useState } from 'react'

import ArticlesPreloader from '@/components/preloaders/articles'
import Content from '@/components/content'
import HeroSection from '@/components/hero'
import { HomeTabs } from '@/utils'
import { ITab } from '@/interface'
import Tabs from '@/components/tabs'
import Tags from '@/components/tags'
import { useStateValue } from '@/context/StateProvider'

const Page = () => {
  const [query, setQuery] = useState<string>('')
  const [articles, setArticles] = useState<any[]>([])
  const [tab, setTab] = useState<string>('global_feed')
  const [tabs, setTabs] = useState<ITab[]>(HomeTabs) // Predefine tabs to be used: HomeTabs
  const [tag, setTag] = useState<string>('')
  const [{ user }] = useStateValue()

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

  return (
    <>
      <HeroSection onQuery={setQuery} />
      <div className='w-screen flex flex-col md:flex-row items-start justify-between  md:px-10 px-5 py-2 bg-[#f7f9fc]'>
        <div className='w-full md:w-[70%] md:flex flex-col items-start justify-center md:gap-x-4'>
          <div className='flex items-center justify-between w-full my-2 py-3'>
            {/* Page tabs */}
            {!query && <Tabs tab={tab} setTab={setTab} tabs={tabs} />}
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
            !articles.length ? <ArticlesPreloader /> : <Content />
          }
          {/* load more button */}
          <div className='flex justify-center w-full mt-4'>
            <button className='flex items-center justify-center gap-x-2 text-sm text-primary-600 rounded bg-primary-50 font-bold px-3 py-1  hover:bg-primary-100 cursor-pointer'>
              <ArrowDown />
              Load More
            </button>
          </div>
        </div>
        <Tags setTag={handleAddTag} />
      </div >
    </>
  )
}

export default Page
