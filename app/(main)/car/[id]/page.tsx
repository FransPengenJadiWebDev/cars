// app/(main)/car/[id]/page.tsx

import CarDescCard from "@/components/CarDescCard";
import CarCarousel from "@/components/Carousel";
import SpecsCard from "@/components/SpecsCard";

type Props = {
  params: Promise<{ id: string }>;
};

async function getCarData(id: string) {
  const res = await fetch(`http://localhost:3000/api/cars/${id}`, {
    next: { revalidate: 60 }
  });

  if (!res.ok) return null;
  return res.json();
}


export default async function CarDetailPage({ params }: Props) {
  const { id } = await params;
  
  const car = await getCarData(id);

  if (!car) {
    return <div className="text-white">Mobil tidak ditemukan</div>;
  }

  return (
    <div className="text-white px-5">
      <h1 className="lg:text-[32px] text-[25px] py-8 font-semibold">{car.brand} {car.name}</h1>
      <div className="flex lg:flex-row flex-col h-full gap-5">
        <div className="flex-9">
          <CarCarousel images={car.images}/>
        </div>
        <div className="flex-3 mt-7 lg:mt-0">
          <SpecsCard car={car}/>
        </div>
      </div>
      <div className="bg-orange-500/70 my-8 py-3 text-center rounded-3xl">
        <p className="font-semibold text-[20px]">Description</p>
      </div>
      <CarDescCard car={car}/>
    </div>
  );
}