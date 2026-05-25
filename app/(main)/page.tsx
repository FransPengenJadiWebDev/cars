
import CarContainer from "@/components/CarContainer";
import Hero from "@/components/Hero";
import HomeClient from "@/components/HomeClient";
import HomeNews from "@/components/HomeNews";
import HomeBlog from "@/components/HomeNews";
import { CarsCardProps } from "@/types/car";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


async function getCars() : Promise<CarsCardProps[]> {
  const res = await fetch('http://localhost:3000/api/cars');
  return res.json();
}

export default async function Home() {
  const cars = await getCars();

  return (
    <>
      <HomeClient cars={cars}/>
      
    </>
  );
}
