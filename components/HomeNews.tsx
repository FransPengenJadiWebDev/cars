import Link from 'next/link'
import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import { NEWS_ITEMS } from '@/constants/blog_n_news'
import NewsCard from './NewsCard'

const HomeBlog = () => {
  return (
    <div className='w-full mb-25 mt-10'>
      <div className='mb-5 flex flex-row justify-between items-center'>
          <span className='text-white text-[25px] font-semibold tracking-wider uppercase'>News</span>
          <Link href="/news" className='flex flex-row gap-2 items-center text-white/50 hover:text-orange-500 transition-colors duration-300 text-sm tracking-wider'>
              <span>Show All News</span>
              <GoArrowRight/>
          </Link>
      </div>
      
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
         {NEWS_ITEMS.map((post) => (
              <NewsCard key={post.id} post={post} layout="flex-col"/>
          ))}
      </div>
    </div>
  )
}

export default HomeBlog