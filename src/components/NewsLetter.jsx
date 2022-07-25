import React from "react";

function NewsLetter() {
  return (
    <div className="mt-16 md:mt-32">
      <h3 className="text-2xl leading-9 font-semibold md:text-5xl md:leading-[72px] 
	    text-[#000000] text-center">
        Newsletter
      </h3>
	  <div className="flex flex-col justify-center mt-4">
		<p className="text-base md:text-2xl text-[#7e7878] text-center">
		  Subscribe to our newsletter and stay updated with our offers</p>
		  <div className="mt-8 text-center">
		  <input type="text" placeholder="Your email address" className="border-[#D0D5DD] rounded-lg w-[374px] md:w-[585px] h-[56px]
		    outline-none border-[2px] shadow-sm pl-4 mr-[0] md:mr-8"/>
			<button className='bg-[#2A1246] w-[374px] h-[56px] mt-2 md:mt-0 md:w-[154px] rounded-lg text-white text-lg'>Subscribe</button>
		  </div>
	  </div>
    </div>
  );
}

export default NewsLetter;
