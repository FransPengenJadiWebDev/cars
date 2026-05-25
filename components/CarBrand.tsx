import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GoArrowRight } from "react-icons/go";
import { BRANDS_DATA } from "@/constants/brands";

interface Props {
  onSelectedBrand: (brand: string | null) => void;
  selectedBrand: string | null
}

const CarBrand = ({onSelectedBrand, selectedBrand} : Props) => {

  const displayedBrand = selectedBrand ? BRANDS_DATA.filter(brand => brand.car_brand === selectedBrand) : BRANDS_DATA.slice(0, 6)
  
  return (
    <div className='w-full mb-25 mt-10'>
      <div className='mb-5 flex flex-row justify-between items-center'>
          <span className='text-white text-[25px] font-semibold tracking-wider uppercase'>Premium Brands</span>
          <Link href="/brands" className='flex flex-row gap-2 items-center text-white/50 hover:text-orange-500 transition-colors duration-300 text-sm tracking-wider'>
              <span>Show All Brands</span>
              <GoArrowRight/>
          </Link>
      </div>
      
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
          {displayedBrand.map((brand, index) => {
            const isSelected = selectedBrand === brand.car_brand;

            return (
              <div key={index} onClick={() => onSelectedBrand(isSelected ? null : brand.car_brand)} className={`group flex flex-col items-center justify-center h-32 w-full border ${isSelected ? 'border-orange-500/50': 'bg-neutral-900 border-neutral-800 hover:border-orange-500/50'} rounded-xl transition-all duration-300 cursor-pointer`}>
                <div className={`relative w-16 h-16 ${isSelected ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'} transition-all duration-500`}>
                  <Image src={brand.logo} alt={brand.car_brand} fill className='object-contain p-2'/>
                </div>
                <span className={`mt-2 text-[10px] uppercase tracking-[0.2em] ${isSelected ? 'text-white' : 'text-neutral-500 group-hover:text-white'} transition-colors`}>{brand.car_brand}</span>
              </div>
            )
          })}
      </div>
    </div>
    
  )
}

export default CarBrand