'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BLOG_POSTS } from '@/constants/blog_n_news'
import BlogCard from '@/components/BlogCard'


const CATEGORIES = ["All Stories", "Deep Dive", "Review", "Culture", "Insight"]

const BlogPage = () => {
    const [activeCategory, setActiveCategory] = useState("All Stories")

    const filteredPosts = activeCategory === "All Stories"
        ? BLOG_POSTS
        : BLOG_POSTS.filter(post => post.category === activeCategory)

    const featuredPost = BLOG_POSTS.find(post => post.featured)
    const regularPosts = filteredPosts.filter(post => activeCategory !== "All Stories" || !post.featured)

    return (
        <div className='px-7 w-full mt-32 mb-40 text-white max-w-7xl mx-auto'>
            <div className='mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6'>
                <div className='flex flex-col gap-2 max-w-2xl'>
                    <h2 className='font-bold text-orange-500 uppercase text-xs tracking-[0.3rem]'>LuxDrive Journal</h2>
                    <h1 className='text-white font-bold text-5xl leading-tight tracking-tight'>The Automotive Insights</h1>
                    <p className='leading-relaxed text-gray-400 text-base'>
                        Stay updated with exclusive reviews, deep engineering analysis, and the latest trends from the global hypercar ecosystem.
                    </p>
                </div>
            </div>

            <div className='flex flex-wrap gap-2 border-b border-neutral-900 pb-6 mb-12'>
                {CATEGORIES.map((cat, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 font-medium
                            ${activeCategory === cat 
                                ? 'bg-orange-500 text-white font-semibold' 
                                : 'bg-neutral-900/60 border border-neutral-800/80 text-neutral-400 hover:text-white hover:border-neutral-700'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {activeCategory === "All Stories" && featuredPost && (
                <Link href='/blog' className='group grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center bg-neutral-900/20 border border-neutral-900 rounded-2xl p-6 hover:border-orange-500/20 transition-all duration-500'>
                    <div className='lg:col-span-7 relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-900'>
                        <Image 
                            src={featuredPost.image} 
                            alt={featuredPost.title} 
                            fill 
                            className='object-cover group-hover:scale-105 transition-all duration-700 grayscale-[20%] group-hover:grayscale-0'
                        />
                    </div>
                    <div className='lg:col-span-5 flex flex-col gap-4'>
                        <div className='flex items-center gap-3 text-xs tracking-wider uppercase text-neutral-400'>
                            <span className='text-orange-500 font-semibold'>{featuredPost.category}</span>
                            <span>•</span>
                            <span>{featuredPost.date}</span>
                        </div>
                        <h2 className='text-2xl lg:text-3xl font-bold leading-tight text-white group-hover:text-orange-500 transition-colors duration-300'>
                            {featuredPost.title}
                        </h2>
                        <p className='text-neutral-400 text-sm leading-relaxed'>
                            {featuredPost.excerpt}
                        </p>
                        <span className='text-xs uppercase tracking-widest text-white mt-2 group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-2'>
                            Read Full Article →
                        </span>
                    </div>
                </Link>
            )}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {regularPosts.map((post) => (
                    <BlogCard key={post.id} post={post}/>
                ))}
            </div>
            
            {filteredPosts.length === 0 && (
                <div className='text-center py-20 border border-dashed border-neutral-900 rounded-2xl'>
                    <p className='text-neutral-500 text-sm tracking-wide uppercase'>No stories found in this category.</p>
                </div>
            )}
        </div>
    )
}

export default BlogPage