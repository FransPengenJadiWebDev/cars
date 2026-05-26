import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NewsPost } from '@/types/blognews'

type Props = {
    post: NewsPost
    layout?: string
}

const NewsCard = ({post, layout} : Props) => {

  return (
    <Link 
        href='/news'
        key={post.id} 
        className={`lg:h-full ${layout} group flex ${layout === 'flex-col' ? 'h-[350px]' : 'h-full'} bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden hover:border-orange-500/20 transition-all duration-300`}
    >
        <div className={`${layout === 'flex-row' ? 'flex-3' : 'flex-1'} relative lg:w-full  bg-neutral-900`}>
            <Image src={post.image} alt={post.title} fill className='object-cover group-hover:scale-105 transition-all duration-700'/>
        </div>
        <div className={`${layout === 'flex-row' ? 'flex-2' : 'flex-1'} p-4 lg:p-5 flex flex-col gap-2 lg:gap-3`}>
            <div className='flex items-center gap-2 text-[10px] lg:text-[12px] tracking-wider uppercase text-neutral-500'>
                <span className='text-orange-500 font-semibold'>{post.category}</span>
            </div>
            <h3 className='font-bold text-[15px] lg:text-lg text-white group-hover:text-orange-500 transition-colors duration-300 line-clamp-2'>
                {post.title}
            </h3>
            <p className='text-neutral-400 text-[11px] lg:text-xs leading-relaxed line-clamp-3'>
                {post.excerpt}
            </p>
            <div className='mt-auto pt-4 border-t border-neutral-900 flex items-center justify-between text-[10px] lg:text-[11px] uppercase tracking-widest text-neutral-400 group-hover:text-white'>
                <span>{post.timestamp}</span>
                <span className='group-hover:translate-x-1 transition-transform'>→</span>
            </div>
        </div>
    </Link>
  )
}

export default NewsCard