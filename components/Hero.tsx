'use client'

import Dropdown from "./Dropdown"
import SearchBar from "./SearchBar"
import { motion } from "framer-motion";
import { categoryOptions, statusOptions, priceOptions } from "@/constants/filters";

const Hero = () => {

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
          className='text-white tracking-wide font-bold text-[20px] lg:text-[35px] mb-2 flex'
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
          className="text-orange-500 tracking-wider font-semibold text-[12px] lg:text-[16px] mb-10 flex"
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
          <ul className="flex flex-row text-white items-center justify-between w-full pl-4">
            <li className="flex-1 px-4">
              <Dropdown 
                title="Category" 
                options={categoryOptions}
              />
            </li>
            <li className="flex-1 px-4">
              <Dropdown 
                title="Certified" 
                options={statusOptions}
              />
            </li>
            <li className="flex-1 px-4">
              <Dropdown 
                title="Price" 
                options={priceOptions}
              />
            </li>
            <div className="flex-initial">
              <SearchBar/>
            </div>
          </ul>
        </div>
      </div>
      
    </section>
  )
}

export default Hero