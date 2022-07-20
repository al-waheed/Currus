import React from 'react'

function SelectCars() {
	return (
		<div className='flex justify-center items-center mt-[-80px]'>
			<div className='rounded-lg bg-white border-2 border-[#000000] py-6 px-4 md:flex md:justify-center 
			     md:items-center md:w-[746px] lg:w-[846px] md:h-[150px]'>
				<div>
					<div className=' hidden md:block text-base font-normal text-[#344054] ' >
						<label>Pick Up Location</label>
					</div>
					<div>
						<select className='text-base font-normal text-[#344054] h-12 w-[342px] rounded 
					             outline-none bg-white border-[#D0D5DD] px-3.5 border-2 md:w-[170px] md:mt-1.5 md:h-14'>
							<option value="volvo">Enter location</option>
							<option value="Lagos">Lagos</option>
							<option value="Abeokuta">Abeokuta</option>
							<option value="Abuja">Abuja</option>
							<option value="Port harcout">Port harcourt</option>
						</select>
					</div>
				</div>
				<div className='md:ml-4'>
					<div className=' hidden md:block text-base font-normal text-[#344054]' >
						<label>Choose Car Maker</label>
					</div>
					<div>
						<select className='text-base font-normal text-[#344054] h-12 w-[342px] rounded
					             outline-none bg-white border-[#D0D5DD] px-3.5 border-2 mt-2 md:mt-1.5 md:w-[170px] md:h-14'>
							<option value="volvo">Select maker</option>
							<option value="saab">Saab</option>
							<option value="opel">Opel</option>
							<option value="audi">Audi</option>
						</select>
					</div>
				</div>
				<div className='md:ml-4'>
					<div className=' hidden md:block text-base font-normal text-[#344054]' >
						<label>Max price/per day</label>
					</div>
					<div>
						<select className='text-base font-normal text-[#344054] h-12 w-[342px] rounded 
					             outline-none bg-white border-[#D0D5DD] px-3.5 border-2 mt-2 md:mt-1.5 md:w-[170px] md:h-14'>
							<option value="volvo">Max price</option>
							<option value="saab">Saab</option>
							<option value="opel">Opel</option>
							<option value="audi">Audi</option>
						</select>
					</div>
				</div>
				<div className='md:ml-12'>
					<button className='h-12 w-[342px] bg-[#2A1246] text-white border-2 outline-none 
					text-base font-normal rounded-lg mt-4 md:mt-7 md:w-[128px] md:h-14'> Search</button>
				</div>
			</div>
		</div>
	)
}

export default SelectCars