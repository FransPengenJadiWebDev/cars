'use client'

import React from 'react'
import CarsCard from './CarsCard'
import { CarsCardProps } from '@/types/car'

interface Props {
    initialCars: CarsCardProps[];
    selectedBrand: string | null;
    selectedCategory: string | null;
    selectedStatus: string | null;
    selectedPrice: string | null;
    search: string;
}

const matchPriceRange = (carPrice: number, selectedRange: string | null): boolean => {

    if (!selectedRange) return true;
    switch (selectedRange) {
        case "Under $500K" :
            return carPrice < 500000;
        case "$500K - $1M" :
            return carPrice >= 500000 && carPrice <= 1000000;
        case "$1M - $3M" :
            return carPrice >= 1000000 && carPrice <= 3000000;
        case "$3M - $5M" :
            return carPrice >= 3000000 && carPrice <= 5000000;
        case "$5M+" :
            return carPrice > 5000000;
        default:
            return true;
    }
}

const matchOdoRange = (carOdo: number, selectedStatus: string | null): boolean => {
    if (!selectedStatus) return true;
    switch (selectedStatus) {
        case "Brand New" :
            return carOdo === 0;
        case "Delivery Mileage" :
            return carOdo >= 1 && carOdo <= 100;
        case "Certified Pre-Owned" :
            return carOdo > 100;
        default:
            return true
    }
}

const FeaturedCar = ({initialCars, selectedBrand, selectedCategory, selectedStatus, selectedPrice, search} : Props) => {


    const selectedCars = initialCars.filter((car) => {
        const matchBrand = selectedBrand ? car.brand.toLowerCase() === selectedBrand.toLowerCase() : true;
        const matchCategory = selectedCategory ? car.category.toLowerCase() === selectedCategory.toLowerCase() : true;
        const matchStatus = matchOdoRange(car.odo, selectedStatus);
        const matchPrice = matchPriceRange(car.price, selectedPrice);
        const CarBrandnName = `${car.brand} ${car.name}`
        const matchSearch = CarBrandnName.toLowerCase().includes(search.toLowerCase())
        return matchBrand && matchCategory && matchStatus && matchPrice && matchSearch;
    })

    const hasActiveFilter = selectedBrand || selectedCategory || selectedStatus || selectedPrice;

    return (
        <div className='relative min-h-[400px] mb-25'>
            <div className="flex justify-between items-center mt-10 mb-5">
                <h2 className="text-white text-[25px] font-semibold tracking-wider uppercase">{selectedBrand ? `${selectedBrand}'s Collection` : 'Featured Cars'}</h2>
                {hasActiveFilter && (
                    <span className="text-neutral-500 text-sm">
                        Showing {selectedCars.length} results
                    </span>
                )}
            </div>

            {selectedCars.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    {selectedCars.map((car) => (
                        <CarsCard 
                            key={car.id} 
                            car={car}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-20 border border-dashed border-neutral-800 rounded-2xl">
                    <p className="text-neutral-500 tracking-widest uppercase text-sm">
                        No {selectedBrand} currently available in our showroom
                    </p>
                </div>
            )}
            
        </div>

        
    )
}

export default FeaturedCar