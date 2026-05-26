import React from 'react'
import { CarsCardProps } from '@/types/car';
import { formatPrice } from '@/lib/format';
import { MdCheck, MdOutlineShare, MdOutlineWhatsapp, MdLocalPhone } from "react-icons/md";
import { BsFillLightningChargeFill, BsGearWideConnected } from "react-icons/bs";

type Props = {
  car: CarsCardProps;
}

const SpecsCard = ({car} : Props) => {
  return (
    <div className='flex flex-col gap-1'>
      <div className='bg-black rounded-xl px-5 py-7 h-[600px]'>
          <div className='flex flex-row justify-between items-center'>
              <p className='text-[12px] text-white/60 font-semibold'>PRICE</p>
              <p className='text-[17px]'>{formatPrice(car.price)}</p>
          </div>
          <hr className='my-5 border-gray-500'/>
          <div className='flex flex-row gap-7'>
            <div className='flex flex-col flex-1 items-center'>
              <p>{car.year}</p>
              <p className='text-[11px] text-white/60 font-semibold'>YEAR</p>
            </div>
            <div className='flex flex-col flex-1 items-center'>
              <p>{car.odo == 0 ? 'New' : car.odo}</p>
              <p className='text-[11px] text-white/60 font-semibold'>KILOMETER</p>
            </div>
            <div className='flex flex-col flex-1 items-center'>
              <p>{car.warranty ? <MdCheck className='text-[24px]'/> : "-"}</p>
              <p className='text-[11px] text-white/60 font-semibold'>WARRANTY</p>
            </div>
          </div>
          <hr className='my-5 border-gray-500'/>
          <div className='flex flex-row mb-4 items-center gap-2 text-white/60 font-semibold'>
            <BsFillLightningChargeFill className='text-[12px]'/>
            <p className='text-[11px]'>PERFORMANCE</p>
          </div>
          <div className='flex flex-row gap-7'>
            <div className='flex flex-col flex-1 items-center'>
              <p>{car.spec.hp}</p>
              <p className='text-[11px] text-white/60 font-semibold'>HP</p>
            </div>
            <div className='flex flex-col flex-1 items-center'>
              <p>{car.spec.top_speed}</p>
              <p className='text-[11px] text-white/60 font-semibold'>Km/h</p>
            </div>
            <div className='flex-1'></div>
          </div>
          <hr className='my-5 border-gray-500'/>
          <div className='flex flex-row mb-4 items-center gap-2 text-white/60 font-semibold'>
            <BsGearWideConnected className='text-[12px]'/>
            <p className='text-[11px]'>DETAILS</p>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1'>
              <p>{car.spec.engine}</p>
              <p className='text-[11px] text-white/60 font-semibold'>Engine</p>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='flex flex-row gap-7 items-center'>
                <p className='flex-1'>{car.spec.transmision}</p>
                <p className='flex-1'>{car.spec.body}</p>
              </div>
              <div className='flex flex-row gap-7'>
                <p className='flex-1 text-[11px] text-white/60 font-semibold'>Transmision</p>
                <p className='flex-1 text-[11px] text-white/60 font-semibold'>Body</p>
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <div className='flex flex-row gap-7 items-center'>
                <p className='flex-1'>{car.spec.exterior}</p>
                <p className='flex-1'>{car.spec.interior}</p>
              </div>
              <div className='flex flex-row gap-7'>
                <p className='flex-1 text-[11px] text-white/60 font-semibold'>Exterior</p>
                <p className='flex-1 text-[11px] text-white/60 font-semibold'>Interior</p>
              </div>
            </div>          
          </div>
      </div>
      <div className='bg-black flex flex-row rounded-xl h-[88px] px-5 py-4 gap-3'>
          <button className='group flex-1 flex flex-col gap-1 cursor-pointer items-center justify-center bg-white/10 hover:bg-white/30 border border-white/50 rounded-md'>
            <MdOutlineShare/>
            <p className='text-[11px]'>Share</p>
          </button>
          <button className='group flex-1 flex flex-col gap-1 cursor-pointer items-center justify-center bg-white/10 hover:bg-green-300/50 border border-white/50 rounded-md'>
            <MdOutlineWhatsapp className='group-hover:text-green-500'/>
            <p className='text-[11px] group-hover:text-green-500'>Whatsapp</p>
          </button>
          <button className='group flex-1 flex flex-col gap-1 cursor-pointer items-center justify-center bg-white/10 hover:bg-red-400/50 border border-white/50 rounded-md'>
            <MdLocalPhone className='group-hover:text-red-500'/>
            <p className='text-[11px] group-hover:text-red-500'>Phone</p>
          </button>
      </div>
    </div>
  )
}

export default SpecsCard