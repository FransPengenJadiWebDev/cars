'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NEWS_ITEMS } from '@/constants/blog_n_news'
import NewsCard from '@/components/NewsCard'
import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";


const TRENDING_NEWS = [
    { id: "n1", title: "Bugatti V16 Hybrid production slots completely sold out", views: "14k reads" },
    { id: "n3", title: "Prisinte LaFerrari Aperta heading to Monaco auction block", views: "9.2k reads" },
    { id: "n5", title: "Koenigsegg Jesko Absolut attempts new top speed record next week", views: "8.5k reads" },
    { id: "n7", title: "Pagani Utopia Roadster allocation fully reserved before public debut", views: "8.0k reads" },
    { id: "n9", title: "Ferrari F80 rumored to feature over 1200 horsepower hybrid system", views: "7.8k reads" },
]

const BRAND_PERFORMANCE = [
    { name: "Ferrari", trend: "+12.4%", status: "up" },
    { name: "Bugatti", trend: "+8.2%", status: "up" },
    { name: "Koenigsegg", trend: "+5.1%", status: "up" },
    { name: "Pagani", trend: "+4.8%", status: "up" },
    { name: "Lamborghini", trend: "-1.2%", status: "down" },
]


const BlogPage = () => {

    const breakingNews = NEWS_ITEMS.find(post => post.isBreaking)

    return (
        <div className='px-4 w-full my-20 lg:my-0 lg:mt-32 lg:mb-40 text-white max-w-7xl mx-auto'>

            <div className='mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6'>
                <div className='lg:mb-12 flex flex-col gap-2'>
                    <h2 className='font-bold text-orange-500 uppercase text-xs lg:text-sm tracking-[0.3rem]'>LuxDrive Intelligence</h2>
                    <h1 className='text-white font-bold text-3xl lg:text-5xl leading-tight tracking-tight'>Global Newsroom</h1>
                    <p className='leading-relaxed text-gray-400 text-sm lg:text-base max-w-xl'>
                        Real-time updates, market statistics, industry shifts, and insider automotive dispatches.
                    </p>
                </div>
            </div>

            <div className='flex lg:flex-row flex-col mb-16 gap-5'>
                {breakingNews && 
                    (
                        <Link href={`/news`} className='group flex flex-col gap-8  bg-neutral-900/20 border border-neutral-900 rounded-2xl p-2 lg:p-6 hover:border-orange-500/20 transition-all duration-500'>
                            <div className='lg:col-span-7 relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-900'>
                                <Image 
                                    src={breakingNews.image} 
                                    alt={breakingNews.title} 
                                    fill 
                                    className='object-cover group-hover:scale-105 transition-all duration-700 grayscale-[20%] group-hover:grayscale-0'
                                />
                            </div>
                            <div className='lg:col-span-5 flex flex-col gap-4'>
                                <span className='text-orange-500 font-semibold text-xs tracking-wider uppercase'>{breakingNews.category}</span>
                                <h2 className='text-xl lg:text-3xl font-bold leading-tight text-white group-hover:text-orange-500 transition-colors duration-300'>
                                    {breakingNews.title}
                                </h2>
                                <p className='text-neutral-400 text-sm leading-relaxed'>
                                    {breakingNews.excerpt}
                                </p>
                                <span className='text-xs uppercase tracking-widest text-white mt-2 group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2'>
                                    Read Full Article →
                                </span>
                            </div>
                        </Link>
                    )
                }
                <div className='flex lg:flex-col flex-row gap-4 lg:gap-0 justify-between'>
                    <div className='rounded-2xl py-6 lg:p-6 flex-1'>
                        <h3 className='font-bold text-xs uppercase tracking-widest text-neutral-400 mb-6 pb-2 flex items-center justify-between'>
                            <span>Trending Now</span>
                            <span className='w-1.5 h-1.5 bg-red-500 rounded-full animate-ping' />
                        </h3>
                        <div className='w-full flex flex-col gap-5'>
                            {TRENDING_NEWS.map((trend, idx) => (
                                <Link href='/news' key={idx} className='group flex w-full gap-4 items-start'>
                                    <span className='font-bold text-neutral-700 group-hover:text-orange-500 transition-colors text-lg font-mono leading-none pt-0.5 shrink-0'>
                                        0{idx + 1}
                                    </span>
                                    <div className='flex flex-col gap-1 flex-1'>
                                        <h4 className='text-xs md:text-sm font-semibold text-neutral-300 group-hover:text-white transition-colors line-clamp-2 leading-tight'>
                                            {trend.title}
                                        </h4>
                                        <span className='text-[10px] text-neutral-500 uppercase tracking-wide'>{trend.views}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <hr className='border-gray-500 hidden lg:block'/>
                    <div className='rounded-2xl py-6 lg:p-6 flex-1'>
                        <h3 className='font-bold text-xs uppercase tracking-widest mb-6 pb-2 flex items-center justify-between'>
                            <span className='text-neutral-400 truncate w-20 lg:w-full'>Market Pulse</span>
                            <span className='text-[10px] text-red-500'>Live</span>
                        </h3>
                        <div className='flex flex-col gap-4'>
                            {BRAND_PERFORMANCE.map((brand, idx) => (
                                <div key={idx} className='flex items-center justify-between group'>
                                    <span className='text-sm text-neutral-300 group-hover:text-white transition-colors'>
                                        {brand.name}
                                    </span>
                                    <div className='flex items-center gap-2'>
                                        <span className={`font-mono text-xs ${brand.status === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
                                            {brand.trend}
                                        </span>
                                        <span className={`text-[14px] ${brand.status === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>
                                            {brand.status === 'up' ? <MdArrowDropUp/> : <MdArrowDropDown/>}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className='w-full mt-6 text-[10px] uppercase tracking-widest text-neutral-500 hover:text-orange-500 transition-colors border-t border-neutral-800 pt-4'>
                            View Full Analysis →
                        </button>
                    </div>
                </div>
                
            </div>
            

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
                {NEWS_ITEMS.map((post) => (
                    <NewsCard key={post.id} post={post} layout='flex-row'/>
                ))}
            </div>
            
        </div>
    )
}

export default BlogPage