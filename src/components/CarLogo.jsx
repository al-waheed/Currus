import React from 'react'

function CarLogo() {
	return (
		<div className='md:flex md:justify-center md:mt-36 md:flex-wrap'>
			<div className='flex justify-evenly items-center mt-14 md:mt-0 md:flex md:justify-between'>
				<div className='flex flex-col justify-center items-center border-[3px] border-[#0D0D0D] 
				      rounded-full w-[90px] h-[90px] md:w-[130px] md:h-[130px] lg:mr-9'>
					<img src='/img/cadillac_logo.png' alt='car_logo' className='w-8 h-8 md:w-12 md:h-12' />
					<h5 className='text-[10px] leading-4 mt-2 text-[#0D0D0D] md:text-sm'>Cadillac</h5>
				</div>
				<div className='flex flex-col justify-center items-center border-[3px] border-[#0D0D0D] 
				     rounded-full w-[90px] h-[90px] md:w-[130px] md:h-[130px] lg:mr-9'>
					<img src='/img/lamborghini_logo.png' alt='car_logo' className='w-8 h-8 md:w-12 md:h-12' />
					<h5 className='text-[10px] leading-4 mt-2 text-[#0D0D0D] md:text-sm'>Lamborghini</h5>
				</div>
				<div className='flex flex-col justify-center items-center border-[3px] border-[#0D0D0D] 
				     rounded-full w-[90px] h-[90px] md:w-[130px] md:h-[130px] lg:mr-9'>
					<img src='/img/maserati_logo.png' alt='car_logo' className='w-8 h-8 md:w-12 md:h-12' />
					<h5 className='text-[10px] leading-4 mt-2 text-[#0D0D0D] md:text-sm'>Maserati</h5>
				</div>
			</div>
			<div className='flex justify-evenly items-center mt-6 md:mt-0'>
				<div className='flex flex-col justify-center items-center border-[3px] border-[#0D0D0D] 
				     rounded-full w-[90px] h-[90px] md:w-[130px] md:h-[130px] lg:mr-9'>
					<img src='/img/porsche_logo.png' alt='car_logo' className='w-8 h-8 md:w-12 md:h-12' />
					<h5 className='text-[10px] leading-4 mt-2 text-[#0D0D0D] md:text-sm'>Porsche</h5>
				</div>
				<div className='flex flex-col justify-center items-center border-[3px] border-[#0D0D0D] 
				     rounded-full w-[90px] h-[90px] md:w-[130px] md:h-[130px] lg:mr-9'>
					<img src='/img/rolls_royce_logo.png' alt='car_logo' className='w-8 h-8 md:w-12 md:h-12' />
					<h5 className='text-[10px] leading-4 mt-2 text-[#0D0D0D] md:text-sm'>Rolls Royce</h5>
				</div>
				<div className='flex flex-col justify-center items-center border-[3px] border-[#0D0D0D] 
				     rounded-full w-[90px] h-[90px] md:w-[130px] md:h-[130px]'>
					<img src='/img/ferrari_logo.png' alt='car_logo' className='w-8 h-8 md:w-12 md:h-12' />
					<h5 className='text-[10px] leading-4 mt-2 text-[#0D0D0D] md:text-sm'>Ferrari</h5>
				</div>
			</div>
		</div>
	)
}

export default CarLogo