import React from 'react'

type AboutCardProps = {
    title: string;
    text: string;
}

const AboutCard = ({title, text} : AboutCardProps) => {
  return (
    <div className='flex flex-col justify-center w-[270px] h-[150px] bg-black px-6 py-7 rounded-2xl'>
      <h1 className='text-[30px] font-semibold'>
        {title}
      </h1>
      <p className='text-[18px]'>
        {text}
      </p>
    </div>
  )
}

export default AboutCard