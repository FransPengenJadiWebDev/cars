import Link from 'next/link'
import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { CarsCardProps } from '@/types/car';
import { formatPrice } from '@/lib/format';
import { formatNumber } from '@/lib/format';
import Image from "next/image"

type Props = {
    car: CarsCardProps;
}

const CarsCard = ({car} : Props) => {
  return (
    <div className='flex flex-row lg:flex-col lg:w-[280px] border rounded-xl lg:h-100 group hover:border-orange-500/20 transition-all duration-300'>
        <div className='flex-1 relative lg:rounded-t-xl lg:rounded-none rounded-l-xl overflow-hidden'>
            <Image src={car.images[0]} alt='a' fill className='object-cover transition-transform duration-700 group-hover:scale-110'/>
        </div>
        <div className='flex-1 flex justify-between text-white flex-col bg-neutral-950 lg:rounded-b-xl lg:rounded-none rounded-r-xl py-5 px-5'>
            <span className='text-[12px] font-semibold uppercase tracking-widest text-orange-500'>
                {car.brand}
            </span>
            <h2 className='text-[22px] font-semibold h-20 line-clamp-2'>
                {car.name}
            </h2>
            <span className='text-[12px] text-gray-400 '>
                {formatNumber(car.odo)} Kilometers
            </span>
            
            <hr className='border-gray-400'/>
            <div className='flex flex-row justify-between items-center'>
                <span className='font-semibold'>
                {formatPrice(car.price)}
                </span>
                <Link href={`/car/${car.id}`} className='text-[14px] flex text-white/50 hover:text-orange-500 flex-row gap-1 items-center transition-colors duration-300'>
                    <span>View detail</span>
                    <MdKeyboardDoubleArrowRight />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default CarsCard