'use client'

import { useSearchParams } from "next/navigation"
import Hero from "./Hero"
import CarContainer from "./CarContainer"
import { CarsCardProps } from "@/types/car"
import HomeNews from "./HomeNews"

interface Props {
    cars: CarsCardProps[]
}

export default function HomeClient({cars} : Props) {

  const searchParams = useSearchParams()
  const brand = searchParams.get('brand')
  
  console.log(brand)

  return (
    <>
        <Hero />
        <div className="px-5 lg:px-7">
            <CarContainer initialCars={cars}/>
            <HomeNews/>
        </div>
        
    </>
  )
}