'use client'

import CarsCard from './CarsCard'
import { CarsCardProps } from '@/types/car'
import { button } from 'framer-motion/client';
import { useEffect, useState } from 'react'
import { MdChevronLeft, MdChevronRight } from "react-icons/md";


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

    const [currentIndex, setCurrentIndex] = useState(0)

    const selectedCars = initialCars.filter((car) => {
        const matchBrand = selectedBrand ? car.brand.toLowerCase() === selectedBrand.toLowerCase() : true;
        const matchCategory = selectedCategory ? car.category.toLowerCase() === selectedCategory.toLowerCase() : true;
        const matchStatus = matchOdoRange(car.odo, selectedStatus);
        const matchPrice = matchPriceRange(car.price, selectedPrice);
        const CarBrandnName = `${car.brand} ${car.name}`
        const matchSearch = CarBrandnName.toLowerCase().includes(search.toLowerCase())
        return matchBrand && matchCategory && matchStatus && matchPrice && matchSearch;
    })

    useEffect(() => {
        setCurrentIndex(0)
    }, [selectedBrand, selectedCategory, selectedStatus, selectedPrice, search])

    const prevSlide = () => {
        if (selectedCars.length === 0) return
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? selectedCars.length-1 : currentIndex-1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        if (selectedCars.length === 0) return
        const isLastSlide = currentIndex === selectedCars.length-1
        const newIndex = isLastSlide ? 0 : currentIndex+1
        setCurrentIndex(newIndex)
    }

    const hasActiveFilter = selectedBrand || selectedCategory || selectedStatus || selectedPrice;

    return (
        <div className='relative min-h-[400px] mb-15 lg:mb-25'>
            <div className="flex justify-between items-center mt-10 mb-5">
                <h2 className="text-white text-[18px] lg:text-[25px] font-semibold tracking-wider uppercase">{selectedBrand ? `${selectedBrand}'s Collection` : 'Featured Cars'}</h2>
                {hasActiveFilter && (
                    <span className="text-neutral-500 text-sm">
                        Showing {selectedCars.length} results
                    </span>
                )}
            

            {selectedCars.length > 1 && (
                <div className="flex lg:hidden gap-2">
                    <button 
                        onClick={prevSlide}
                        className="bg-none text-white p-2 rounded-full hover:bg-neutral-900 transition"
                    >
                        <MdChevronLeft/>
                    </button>
                    <button 
                        onClick={nextSlide}
                        className="bg-none text-white p-2 rounded-full hover:bg-neutral-900 transition"
                    >
                        <MdChevronRight/>
                    </button>
                </div>
                )}
                </div>

            {selectedCars.length > 0 ? (
                <>
                    <div className='flex lg:hidden justify-center'>
                        <CarsCard car={selectedCars[currentIndex]}/>
                    </div>
                    <div className='lg:hidden flex justify-center mt-6 gap-4'>
                        {selectedCars.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all ${
                                    currentIndex === index
                                        ? 'bg-white w-6'
                                        : 'bg-neutral-600'
                                }`}
                            />
                        ))}
                        
                        
                    </div>

                    <div className="hidden lg:grid grid-cols-4 gap-12">
                        {selectedCars.map((car) => (
                            <CarsCard 
                                key={car.id} 
                                car={car}
                            />
                        ))}
                    </div>
                </>
                
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