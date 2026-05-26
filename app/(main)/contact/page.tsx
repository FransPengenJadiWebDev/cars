import React from 'react'
import { MdLocalPhone, MdAlternateEmail,  } from "react-icons/md";
import { FaMapMarked } from "react-icons/fa";


const contact = () => {
  return (
    <div className='flex lg:flex-row flex-col gap-8 px-4 my-20 lg:my-37'>
      <div className='flex-1 flex flex-col justify-center gap-4'>
        <h2 className='font-bold text-orange-500 uppercase text-xs lg:text-sm tracking-[0.2rem]'>Contact Us</h2>
        <h1 className='text-white font-bold text-3xl lg:text-5xl leading-tight'>Elevate Your Drive.</h1>
        <p className='leading-relaxed text-sm lg:text-lg text-gray-400'>Whether you are looking to acquire a rare hypercar or need expert advice on your next collection, our dedicated concierge team is here to provide a seamless and personalized experience. At LuxDrive, we don't just sell cars; we curate legacies.</p>
        <div className='border-t-2 border-white/10 lg:mt-4 pt-4'>
          <span className='italic text-xs lg:text-sm text-gray-500'>"The best way to predict the future is to drive it."</span>
        </div>
      </div>
      <div className='flex-1 bg-black rounded-xl px-5 py-5 lg:px-12 lg:py-12 flex flex-col gap-6 lg:gap-10 text-sm'>
        <div className='flex flex-row gap-6 items-start'>
          <MdLocalPhone className='text-orange-500 text'/>
          <div className=''>
            <h3 className='text-gray-400 mb-1  tracking-widest uppercase'>Direct Line</h3>
            <p className='text-white font-semibold hover:text-orange-500 transition-colors cursor-pointer'>+62 812 7777 7777</p>
          </div>
        </div>
        <div className='flex flex-row gap-6 items-start'>
          <MdAlternateEmail className='text-orange-500'/>
          <div className=''>
            <h3 className='text-gray-400 mb-1 tracking-widest uppercase'>Email Inquiry</h3>
            <p className='text-white font-semibold hover:text-orange-500 transition-colors cursor-pointer'>abc@luxdrive.com</p>
          </div>
        </div>
        <div className='flex flex-row gap-6 items-start'>
          <FaMapMarked className='text-orange-500'/>
          <div className=''>
            <h3 className='text-gray-400 mb-1 tracking-widest uppercase'>The Showroom</h3>
            <p className='text-white font-semibold'>LuxDrive Gallery Center, <br/>Sudirman Central Business District, Jakarta</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact