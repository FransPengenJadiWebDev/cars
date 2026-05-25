import { NextResponse } from "next/server";
import cars from '@/data/cars.json';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> } 
) {
    // Karena kamu pakai Next.js 15, kita harus await params
    const { id } = await params;

    // Cari mobil berdasarkan id yang dikirim di URL
    const car = cars.find((item: any) => item.id.toString() === id);

    if (!car) {
        return NextResponse.json({ message: "Mobil tidak ditemukan" }, { status: 404 });
    }

    return NextResponse.json(car);
}