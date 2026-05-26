
import Link from 'next/link'
import { GoArrowRight } from 'react-icons/go'
import { NEWS_ITEMS } from '@/constants/blog_n_news'
import NewsCard from './NewsCard'

const HomeBlog = () => {

  return (
    <div className='w-full mb-25 mt-10'>
      <div className='mb-5 flex flex-row justify-between items-center'>
          <span className='text-white text-[18px] lg:text-[25px] font-semibold tracking-wider uppercase'>News</span>
          <Link href="/news" className='hidden lg:flex flex-row gap-2 items-center text-white/50 hover:text-orange-500 transition-colors duration-300 text-sm tracking-wider'>
              <span>Show All News</span>
              <GoArrowRight/>
          </Link>
      </div>
      
      <div className='lg:hidden flex flex-col gap-6'>
         {NEWS_ITEMS.slice(0, 2).map((post) => (
              <NewsCard key={post.id} post={post} layout="flex-col"/>
          ))}
      </div>
      <div className='hidden lg:grid grid-cols-4 gap-6'>
         {NEWS_ITEMS.map((post) => (
              <NewsCard key={post.id} post={post} layout="flex-col"/>
          ))}
      </div>
      <Link href="/news" className='lg:hidden flex flex-row gap-2 mt-10 justify-center items-center text-white/50 hover:text-orange-500 transition-colors duration-300 text-sm tracking-wider'>
        <span>Show All News</span>
        <GoArrowRight/>
      </Link>
    </div>
  )
}

export default HomeBlog