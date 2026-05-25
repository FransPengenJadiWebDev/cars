'use client'

import Dropdown from "./Dropdown"
import SearchBar from "./SearchBar"
import { useState } from "react";
import { easeIn, motion } from "framer-motion";
import { MdSearch } from "react-icons/md";

interface Props {
  selectedCategory: string | null;
  setSelectedCategory: (value: string | null) => void;
  selectedStatus: string | null;
  setSelectedStatus: (value: string | null) => void;
  selectedPrice: string | null;
  setSelectedPrice: (value: string | null) => void;
  search: string;
  setSearch: (value: string) => void;
}

const Hero = ( {selectedCategory, setSelectedCategory, selectedStatus, setSelectedStatus, selectedPrice, setSelectedPrice, search, setSearch} : Props) => {

  const categoryOptions = ["Hypercar", "Supercar", "Luxury SUV", "Track Only"]
  const statusOptions = ["Brand New", "Delivery Mileage", "Certified Pre-Owned"]
  const priceOptions = [
    "Under $500K",
    "$500K - $1M",
    "$1M - $3M",
    "$3M - $5M",
    "$5M+"
  ]

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0,
      transition: {
        duration: 0.1, ease: "linear" as const,
      }
     },
  };

  const title = "FIND YOUR PERFECT CAR".split("");
  const subtitle = "From daily drives to supercars - find yours today.".split("");

  return (
    <section className='max-w-screen overflow-hidden h-screen flex justify-center bg-cover bg-center'>
      <video autoPlay muted loop className="absolute w-full h-full object-cover">
        <source src="/hero/hero_bg.mp4" type="video/mp4"/>
      </video>
      <div className='bg-black/40 absolute inset-0'></div>
      <div className='  h-full flex flex-col z-10 items-center w-[97%] justify-center'>
        <motion.h1
          className='text-white tracking-wide font-bold text-[35px] mb-2 flex'
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {title.map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.h4
          className="text-orange-500 tracking-wider font-semibold text-[16px] mb-10 flex"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {subtitle.map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h4>
        <div className="bg-neutral-800/90 border border-black p-1.5 w-220 rounded-full hidden lg:flex">
          <div className="flex flex-row text-white items-center justify-between w-full pl-4">
            

            <div className="flex-1 border-r border-neutral-800/80 px-4">
              <Dropdown 
                title="Category" 
                options={categoryOptions}
                selectedValue={selectedCategory}
                onSelect={setSelectedCategory}
                variants="py-1.5 px-3"
              />
            </div>

            <div className="flex-1 pr-4 pl-4">
              <Dropdown 
                title="Certified" 
                options={statusOptions}
                selectedValue={selectedStatus}
                onSelect={setSelectedStatus}
                variants="py-1.5 px-3"
              />
            </div>
            <div className="flex-1 pr-4 pl-4">
              <Dropdown 
                title="Price" 
                options={priceOptions}
                selectedValue={selectedPrice}
                onSelect={setSelectedPrice}
                variants="py-1.5 px-3"
              />
            </div>

            <div className="flex-initial">
              <SearchBar search={search} setSearch={setSearch}/>
            </div>

          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Hero