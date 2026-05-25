import React from 'react'
import { MdLocalPhone, MdAlternateEmail,  } from "react-icons/md";
import { FaMapMarked } from "react-icons/fa";


const contact = () => {
  return (
    <div className='flex lg:flex-row flex-col gap-8 px-12 py-37'>
      <div className='flex-1 flex flex-col justify-center gap-6'>
        <h2 className='font-bold text-orange-500 uppercase text-sm tracking-[0.2rem]'>Contact Us</h2>
        <h1 className='text-white font-bold text-5xl leading-tight'>Elevate Your Drive.</h1>
        <p className='leading-relaxed text-lg text-gray-400'>Whether you are looking to acquire a rare hypercar or need expert advice on your next collection, our dedicated concierge team is here to provide a seamless and personalized experience. At LuxDrive, we don't just sell cars; we curate legacies.</p>
        <div className='border-t-2 border-white/10 mt-4 pt-4'>
          <span className='italic text-sm text-gray-500'>"The best way to predict the future is to drive it."</span>
        </div>
      </div>
      <div className='flex-1 bg-black rounded-xl flex flex-col gap-10'>
        <div className='flex flex-row gap-6 pl-12 pt-12 items-start'>
          <MdLocalPhone className='text-orange-500'/>
          <div className=''>
            <h3 className='text-gray-400 mb-1 text-sm tracking-widest uppercase'>Direct Line</h3>
            <p className='text-white font-semibold hover:text-orange-500 transition-colors cursor-pointer'>+62 812 7777 7777</p>
          </div>
        </div>
        <div className='flex flex-row gap-6 pl-12 items-start'>
          <MdAlternateEmail className='text-orange-500'/>
          <div className=''>
            <h3 className='text-gray-400 mb-1 text-sm tracking-widest uppercase'>Email Inquiry</h3>
            <p className='text-white font-semibold hover:text-orange-500 transition-colors cursor-pointer'>abc@luxdrive.com</p>
          </div>
        </div>
        <div className='flex flex-row gap-6 pl-12 pb-12 items-start'>
          <FaMapMarked className='text-orange-500'/>
          <div className=''>
            <h3 className='text-gray-400 mb-1 text-sm tracking-widest uppercase'>The Showroom</h3>
            <p className='text-white font-semibold'>LuxDrive Gallery Center, <br/>Sudirman Central Business District, Jakarta</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact