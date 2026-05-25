'use client'

import { useState } from "react"
import { useSearchParams } from "next/navigation"
import Hero from "./Hero"
import CarContainer from "./CarContainer"
import { CarsCardProps } from "@/types/car"
import HomeNews from "./HomeNews"

interface Props {
    cars: CarsCardProps[]
}

export default function HomeClient({cars} : Props) {

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null)
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const searchParams = useSearchParams()
  const brand = searchParams.get('brand')
  console.log(brand)

  return (
    <>
        <Hero 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
            search={search}
            setSearch={setSearch}
        />
        <div className="px-7">
            <CarContainer
                initialCars={cars}
                selectedCategory={selectedCategory}
                selectedStatus={selectedStatus}
                selectedPrice={selectedPrice}
                search={search}
            />
            <HomeNews/>
        </div>
        
    </>
  )
}