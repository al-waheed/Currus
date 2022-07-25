import React from 'react'

const Landing = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full bg-[#F2F5FC] h-[50vh] md:h-[78vh] lg:flex-row'>
      <div className='text-[#000000] text-center md:w-[350px] lg:text-left'>
        <h1 className='w-[200px] font-bold text-4xl leading-9 md:font-semibold md:w-[350px] md:text-[69px] 
        md:leading-[69px]'>
           Premium Car Rental
        </h1>
        <p className='sm:text-base w-[300px] mt-6 font-normal leading-7 md:mt-4 md:text-lg md:w-[350px]'>
          Don't miss out on the opportunity to drive the top
          luxury vehicles from around the world right now.
        </p>
      </div>
      <div className='hidden md:block lg:ml-24'>
        <img src='/img/cadillac.png' alt='bg-car' className='w-[656px] h-[406px]' />
      </div>
    </div>
  )
}
export default Landing;
