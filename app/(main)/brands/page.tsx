import React from 'react'
import { BRANDS_DATA } from '@/constants/brands'
import Image from 'next/image'
import Link from 'next/link'

const brands = () => {
    const sortedBrands = BRANDS_DATA.sort((a, b) => a.car_brand.localeCompare(b.car_brand))

    return (
        <div className='px-7 w-full mt-30 mb-40'>
            <div className='mb-8 flex flex-row'>
                <div className='flex flex-col flex-1 gap-2'>
                    <h2 className='font-bold text-orange-500 uppercase text-sm tracking-[0.2rem]'>Exclusive Collections</h2>
                    <h1 className='text-white font-bold text-5xl leading-tight'>All Brands</h1>
                    <p className='leading-relaxed text-lg text-gray-400'>Explore the world's most prestigious automotive engineering in one place.</p>
                </div>
                <div className='flex-1 flex flex-col justify-end items-end'>
                    <span className="uppercase text-sm text-neutral-500 group-hover:text-orange-500 transition-colors">{BRANDS_DATA.length} Brands</span>
                </div>
            </div>
            
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
                {sortedBrands.map((brand, index) => (
                    <Link href={`/?brand=${brand.car_brand}`} key={index} className='group flex flex-row items-center justify-start px-5 h-15 w-full bg-neutral-900 border border-neutral-800 rounded-md hover:border-orange-500/50 transition-all duration-300 cursor-pointer'>
                        <div className='relative w-13 h-13 grayscale group-hover:grayscale-0 transition-all duration-500'>
                        <Image src={brand.logo} alt={brand.car_brand} fill className='object-contain p-2'/>
                        </div>
                        <span className='text-[12px] uppercase tracking-[0.2em] text-neutral-500 group-hover:text-white transition-colors'>{brand.car_brand}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default brands