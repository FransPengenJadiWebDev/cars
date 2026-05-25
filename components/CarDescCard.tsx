import React from 'react'
import { CarsCardProps } from '@/types/car'

type Props = {
    car: CarsCardProps;
}

const CarDescCard = ({ car } : Props) => {
  return (
    <div className='bg-black px-15 py-13 rounded-xl mb-20'>
        <h1 className='text-[30px] font-bold'>{car.desc_title}</h1>
        <div className='space-y-10 pt-18'>
            {car.desc.map((paragraph, index) => (
                <p key={index} className='text-[20px]'>{paragraph}</p>
            ))}
        </div>
        <div className={`flex flex-row gap-2 pt-40 text-[20px] ${car.source && car.sourcea ? 'block' : 'hidden'}`}>
            <p>Source: </p>
            <a href={car.source} className='underline'>{car.sourcea}</a>
        </div>
    </div>
  )
}

export default CarDescCard