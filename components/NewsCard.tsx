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
        className={`h-[400px] lg:h-full group flex ${layout} bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden hover:border-orange-500/20 transition-all duration-300`}
    >
        <div className='flex-1 relative aspect-[16/10] w-full overflow-hidden bg-neutral-900'>
            <Image src={post.image} alt={post.title} fill className='object-cover group-hover:scale-105 transition-all duration-700'/>
        </div>
        <div className='flex-1 p-5 flex flex-col flex-1 gap-3'>
            <div className='flex items-center gap-2 text-[10px] tracking-wider uppercase text-neutral-500'>
                <span className='text-orange-500 font-semibold'>{post.category}</span>
            </div>
            <h3 className='font-bold text-lg text-white group-hover:text-orange-500 transition-colors duration-300 line-clamp-2'>
                {post.title}
            </h3>
            <p className='text-neutral-400 text-xs leading-relaxed line-clamp-3'>
                {post.excerpt}
            </p>
            <div className='mt-auto pt-4 border-t border-neutral-900 flex items-center justify-between text-[11px] uppercase tracking-widest text-neutral-400 group-hover:text-white'>
                <span>{post.timestamp}</span>
                <span className='group-hover:translate-x-1 transition-transform'>→</span>
            </div>
        </div>
    </Link>
  )
}

export default NewsCard