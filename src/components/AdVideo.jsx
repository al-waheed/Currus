import React from 'react'

function AdVideo() {
	return (
		<div className=' mt-20'>
			<h3 className='text-2xl leading-9 font-semibold md:text-5xl md:leading-[72px] 
	             text-center text-[#000000]'> Why We Are The Best </h3>
			<div className='md:flex md:justify-evenly'>
				<div className='flex flex-col items-center mt-8 '>
					<img src='/icons/Ok.png' alt='icons' className='w-[100px] h-[100px]' />
						<h3 className='text-base leading-7 mt-8 font-semibold lg:text-[32px] lg:leading-[48px] 
	                        text-[#000000]'>Easy Booking</h3>
						<p className='font-thin text-lg  text-[#7e7878] text-center w-[310px] mt-8 lg:text-2xl 
						    lg:leading-9'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
						</p>
				</div>
				<div className='flex flex-col items-center mt-8 '>
					<img src='/icons/Bookmark.png' alt='icons' className='w-[100px] h-[100px]' />
						<h3 className='text-base leading-7 mt-8 font-semibold lg:text-[32px] lg:leading-[48px] 
	                        text-[#000000]'>Wide Range of Brands</h3>
						<p className='font-thin text-lg  text-[#7e7878] text-center w-[310px] mt-8 lg:text-2xl 
						    lg:leading-9'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
						</p>
				</div>
				<div className='flex flex-col items-center mt-8 '>
					<img src='/icons/in Transit.png' alt='icons' className='w-[100px] h-[100px]' />
						<h3 className='text-base leading-7 mt-8 font-semibold lg:text-[32px] lg:leading-[48px] 
	                        text-[#000000]'>Fast Delivery</h3>
						<p className='font-thin text-lg  text-[#7e7878] text-center w-[310px] mt-8 lg:text-2xl 
						    lg:leading-9'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
						</p>
				</div>
			</div>
			<div className='flex justify-center mt-32'>
			<iframe src="https://www.youtube.com/embed/8GaBm26mUMM" title="YouTube video"
                    frameborder="0" className='w-[374px] h-[211px] md:w-[700px] md:[500px] lg:w-[1216px] lg:h-[550px]'
					 allow="accelerometer; autoplay; encrypted-media; gyroscope; 
					picture-in-picture" allowfullscreen >
            </iframe>
			</div>
		</div>
	)
}

export default AdVideo