import React from 'react'

function CustomerReviews() {
  return (
	<div className='flex flex-col justify-center items-center mt-20'>
	  <h3 className='text-2xl leading-9 font-semibold md:text-5xl md:leading-[72px] 
	              text-[#000000]'>What Our Clients Say About Us</h3>
	  <p className='font-thin text-lg text-[#7e7878] w-[374px] text-center mt-16 md:w-[60%]
	  md:text-2xl md:leading-9'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
	    Turpis tempus tincidunt sed neque netus pellentesque et cursus. Porta vulputate arcu
		 ut et at senectus. Eget urna, nulla duis neque, enim viverra id tellus vitae. Convallis 
		 pellentesque vitae felis, accumsan massa in. Nisl lacus, tincidunt commodo praesent viverra
		 magna cursus nec”
		 </p>
		 <hr className='border-[1px] border-[#7e7878] w-[200px] mt-8' />
		 <p className='font-thin text-lg text-[#7e7878] w-[374px] text-center mt-6 md:w-[60%]
	  md:text-2xl md:leading-9'>Morenikeji Ajisegiri, CEO at Currus.NG</p>
	</div>
  )
}

export default CustomerReviews