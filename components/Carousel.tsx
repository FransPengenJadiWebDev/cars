'use client'

import { useState } from "react";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const CarCarousel = ({ images }: { images: string[] }) => {
    const [currentIndex,setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? images.length-1 : currentIndex-1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === images.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="relative w-full lg:h-[600px] h-[300px]">
            <div>
                
            </div>
            <div className="aspect-video lg:aspect-auto lg:h-150 rounded-xl bg-center bg-cover duration-500 relative overflow-hidden">
                <Image 
                    src={images[currentIndex]} 
                    alt={`Car Image ${currentIndex}`} 
                    fill 
                    className="object-cover"
                />
            </div>
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 lg:left-5 text-2xl rounded-full p-2  text-white cursor-pointer">
                <MdChevronLeft 
                    onClick={prevSlide} 
                    size={30} 
                />
            </div>
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 lg:right-5 text-2xl rounded-full p-2  text-white cursor-pointer">
                <MdChevronRight 
                    onClick={nextSlide} 
                    size={30} 
                />
            </div>
            <div className="flex w-full lg:justify-center lg:gap-4 gap-1 overflow-x-auto py-7 scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-neutral-800">
                {images.map((img, index) => (
                    <div 
                        key={index} 
                        onClick={() => setCurrentIndex(index)} 
                        className={`relative flex-shrink-0 lg:w-20 w-14 lg:h-16 h-11 cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${currentIndex === index ? "border-orange-500 border-2 scale-105" : "border-transparent opacity-50 hover:opacity-100"}`}
                    >
                        <Image 
                            src={img} 
                            alt={`Thumbnail ${index}`} 
                            fill 
                            className="object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CarCarousel