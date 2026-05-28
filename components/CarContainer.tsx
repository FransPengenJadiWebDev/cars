'use client'

import { useEffect } from 'react'
import FeaturedCar from './FeaturedCar'
import CarBrand from './CarBrand'
import { CarsCardProps } from '@/types/car'
import { useState } from 'react'
import { useSearchParams } from "next/navigation"

interface Props {
  initialCars: CarsCardProps[];
}

const CarContainer = ({initialCars} : Props) => {

    const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
    const searchParams = useSearchParams()
    useEffect(() => {
        const brand = searchParams.get('brand')
        setSelectedBrand(brand)
    }, [searchParams])
    
    return (
        <>
            <CarBrand 
                onSelectedBrand={setSelectedBrand} 
                selectedBrand={selectedBrand}
            />

            <FeaturedCar 
                initialCars={initialCars} 
                selectedBrand={selectedBrand}
            />
        </>
    )
}

export default CarContainer