'use client'

import React, { useEffect } from 'react'
import FeaturedCar from './FeaturedCar'
import CarBrand from './CarBrand'
import { CarsCardProps } from '@/types/car'
import { useState } from 'react'
import { useSearchParams } from "next/navigation"
import { GoArrowRight } from 'react-icons/go'
import Link from 'next/link'

interface Props {
  initialCars: CarsCardProps[];
  selectedCategory: string | null;
  selectedStatus: string | null;
  selectedPrice: string | null;
  search: string;
}

const CarContainer = ({initialCars, selectedCategory, selectedStatus, selectedPrice, search} : Props) => {

    const [selectedBrand, setSelectedBrand] = useState<string | null>(null)
    const searchParams = useSearchParams()
    useEffect(() => {
        const brand = searchParams.get('brand')
        setSelectedBrand(brand)
    }, [searchParams])
    
    return (
        <>
            <CarBrand onSelectedBrand={setSelectedBrand} selectedBrand={selectedBrand}/>
            <FeaturedCar 
                initialCars={initialCars} 
                selectedBrand={selectedBrand}
                selectedCategory={selectedCategory}
                selectedStatus={selectedStatus}
                selectedPrice={selectedPrice}
                search={search}
            />
        </>
    )
}

export default CarContainer