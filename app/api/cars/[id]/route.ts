import { NextResponse } from "next/server";
import cars from '@/data/cars.json';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> } 
) {
    const { id } = await params;

    const car = cars.find((item: any) => item.id.toString() === id);

    if (!car) {
        return NextResponse.json({ message: "Mobil tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json(car);
}