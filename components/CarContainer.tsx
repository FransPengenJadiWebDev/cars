'use client'

import { useEffect } from 'react'
import FeaturedCar from './FeaturedCar'
import CarBrand from './CarBrand'
import { CarsCardProps } from '@/types/car'
import { useState } from 'react'
import { useSearchParams } from "next/navigation"

interface Props {
  initialCars: CarsCardProps[];
  selectedCategory: string | null;
  selectedStatus: string | null;
  selectedPrice: string | null;
}

const CarContainer = ({initialCars, selectedCategory, selectedStatus, selectedPrice} : Props) => {

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
                selectedCategory={selectedCategory}
                selectedStatus={selectedStatus}
                selectedPrice={selectedPrice}
            />
        </>
    )
}

export default CarContainer