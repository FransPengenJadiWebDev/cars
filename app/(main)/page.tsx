
import HomeClient from "@/components/HomeClient";
import { CarsCardProps } from "@/types/car";
import carsData from "@/data/cars.json";
import { Suspense } from "react";


// async function getCars() : Promise<CarsCardProps[]> {
//   const res = await fetch('http://localhost:3000/api/cars');
//   return res.json();
  
// }

export default async function Home() {
  // const cars = await getCars()
  const cars = carsData as CarsCardProps[];

  return (
    <>
      <Suspense fallback={<div className="text-center py-10">Loading catalog...</div>}>
        <HomeClient cars={cars}/>
      </Suspense>
    </>
  );
}