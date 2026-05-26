import React from 'react'
import { CarsCardProps } from '@/types/car'

type Props = {
    car: CarsCardProps;
}

const CarDescCard = ({ car } : Props) => {
  return (
    <div className='bg-black px-6 py-5 lg:px-15 lg:py-13 rounded-xl mb-20'>
        <h1 className='text-xl lg:text-[30px] font-bold'>{car.desc_title}</h1>
        <div className='space-y-5 lg:space-y-10 pt-8 lg:pt-18'>
            {car.desc.map((paragraph, index) => (
                <p key={index} className='text-sm lg:text-[20px]'>{paragraph}</p>
            ))}
        </div>
        <div className={`flex flex-row gap-2 pt-20 lg:pt-40 text-sm lg:text-[20px] ${car.source && car.sourcea ? 'block' : 'hidden'}`}>
            <p>Source: </p>
            <a href={car.source} className='underline'>{car.sourcea}</a>
        </div>
    </div>
  )
}

export default CarDescCard