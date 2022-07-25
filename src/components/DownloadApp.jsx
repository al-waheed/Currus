import React from 'react'

function DownloadApp() {
  return (
	<div className=' flex justify-center items-center mt-16 md:mt-32'>
		<div>
			<img src='/icons/d.jpg' alt='app_pic' className='hidden md:block md:w-[100%] md:h-[420px]'/>
		</div>
		<div>
			<img src='/icons/Frame 212.png' alt='app_pic' className='md:hidden'/>
		</div>
	</div>
  )
}

export default DownloadApp