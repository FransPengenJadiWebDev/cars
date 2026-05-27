// app/(main)/car/[id]/page.tsx

import CarDescCard from "@/components/CarDescCard";
import CarCarousel from "@/components/Carousel";
import SpecsCard from "@/components/SpecsCard";
import cars from "@/data/cars.json";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CarDetailPage({ params }: Props) {

  const  { id } = await params;
  const car = cars.find((item: any) => item.id.toString() === id);

  if (!car) {
    return <div className="h-80">
        <span className="text-white">
            Mobil tidak ditemukan
        </span>
      </div>;
  }

  return (
    <div className="text-white px-4 lg:px-5">
      <h1 className="lg:text-[32px] text-[20px] py-4 lg:py-8 font-semibold">{car.brand} {car.name}</h1>
      <div className="flex lg:flex-row flex-col h-full gap-5">
        <div className="flex-9">
          <CarCarousel images={car.images}/>
        </div>
        <div className="flex-3">
          <SpecsCard car={car}/>
        </div>
      </div>
      <div className="bg-orange-500/80 my-8 py-1 lg:py-3 text-center rounded-3xl">
        <p className="font-semibold text-lg lg:text-[20px]">Description</p>
      </div>
      <CarDescCard car={car}/>
    </div>
  );
}