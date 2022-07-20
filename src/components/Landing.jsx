import React from 'react'

const Landing = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full bg-[#F2F5FC] h-[86.5vh] lg:flex-row'>
      <div className='text-[#000000] text-center md:w-[350px] lg:text-left'>
        <h1 className='w-[200px] md:w-[350px] font-bold text-[36px] leading-9 md:font-semibold md:text-[69px] md:leading-[69px]'>
           Premium Car Rental
        </h1>
        <p className='sm:text-base w-[300px] font-normal leading-7 mt-4 md:text-lg md:w-[350px]'>
          Don't miss out on the opportunity to drive the top
          luxury vehicles from around the world right now.
        </p>
      </div>
      <div className='lg:ml-24'>
        <img src='/img/cadillac.png' alt='bg-car' className='w-[656px] h-[406px]' />
      </div>
    </div>
  )
}
export default Landing;
