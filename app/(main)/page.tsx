
import HomeClient from "@/components/HomeClient";
import { CarsCardProps } from "@/types/car";
import carsData from "@/data/cars.json";


// async function getCars() : Promise<CarsCardProps[]> {
  // const res = await fetch('http://localhost:3000/api/cars');
  // return res.json();
  // 
// }

export default async function Home() {
  const cars = carsData as CarsCardProps[];

  return (
    <>
      <HomeClient cars={cars}/>
      
    </>
  );
}
