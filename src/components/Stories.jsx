import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Stories() {
	return (
		<div className='mt-12 md:mt-32'>
			<h3 className='text-2xl leading-9 font-semibold md:text-5xl md:leading-[72px] 
	              text-[#000000] text-center'>Read Our Stories</h3>
			<div className='mt-12 flex justify-evenly items-center flex-wrap'>
				<div className='w-[374px] h-[520px] border-2 border-[#000000] rounded-lg bg-[#F5F6F8]'>
					<img src='/icons/Blog Image.jpg' alt='blog_img' className='w-[374px] h-[273px]' />
					<div className='pl-8 mt-8'>
						<h3 className='text-2xl leading-9 font-semibold text-[#000000]'>
							Top 10 Luxurious Car 2022</h3>
						<p className='font-thin text-base text-[#7e7878] mt-4 w-[310px]'>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
							officia consequat duis enim velit mollit.
						</p>
						<p className='font-medium text-base text-[#000000] mt-8'>Find Out More
							<FontAwesomeIcon icon={faArrowRight} className='text-[#6D7D8B] ml-5' />
						</p>
					</div>
				</div>

				<div className='mt-8 md:mt-0 w-[374px] h-[520px] border-2 border-[#000000] rounded-lg bg-[#F5F6F8]'>
					<img src='/icons/Blog Image (1).jpg' alt='blog_img' className='w-[374px] h-[273px]' />
					<div className='pl-8 mt-8'>
						<h3 className='text-2xl leading-9 font-semibold text-[#000000]'>
						Why You Should Avoid This</h3>
						<p className='font-thin text-base text-[#7e7878] mt-4 w-[310px]'>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
							officia consequat duis enim velit mollit.
						</p>
						<p className='font-medium text-base text-[#000000] mt-8'>Find Out More
							<FontAwesomeIcon icon={faArrowRight} className='text-[#6D7D8B] ml-5' />
						</p>
					</div>
				</div>
				<div className='mt-8 md:mt-0 w-[374px] h-[520px] border-2 border-[#000000] rounded-lg bg-[#F5F6F8]'>
					<img src='/icons/Blog Image (2).jpg' alt='blog_img' className='w-[374px] h-[273px]' />
					<div className='pl-8 mt-8'>
						<h3 className='text-2xl leading-9 font-semibold text-[#000000]'>
						   Want A Car Upgrade?</h3>
						<p className='font-thin text-base text-[#7e7878] mt-4 w-[310px]'>
							Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
							officia consequat duis enim velit mollit.
						</p>
						<p className='font-medium text-base text-[#000000] mt-8'>Find Out More
							<FontAwesomeIcon icon={faArrowRight} className='text-[#6D7D8B] ml-5' />
						</p>
					</div>
				</div>
			</div>
			<div className='text-center mt-12'>
            <button className='bg-[#2A1246] w-[374px] h-[60px] rounded-lg text-white text-lg'>View More</button>
			</div>
		</div>
	)
}

export default Stories