import React from 'react'

const Description = () => {
  return (
    <>
    <div className='bg-[#F7F8FB] w-full pb-[5rem] mt-[3rem]'>
         <div className='text-center max-w-[60rem] m-auto '>
      <h1 className='text-[#232b76] text-[40px] font-bold py-3'>WHAT IS VISTREAM WEBINAR PORTAL</h1>
      <h3 className='text-[#232b76] text-[31px] leading-[2.5rem] py-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.</h3>
      <div className='w-[80%] max-w-[436px] py-1 bg-[#042164] m-auto mt-5'></div>
    </div>
    </div>
    
    <div className='grid grid-cols-3 max-w-[80rem] m-auto mt-[10rem] gap-3'>
      <div className='flex items-start gap-5'>
        <img src="/assets/certificate.svg" alt="certificate" />
        <div className='relative'>
          <h1 className='text-[#232b76] text-[30px] font-semibold'>Certified Speakers</h1>
          <p className='text-[#666666] text-[18px]'>Eabore etsu dolore magn aliqua enim ad minim veniam quis nostrud exercitas tion ullamco ipsum laboris.</p>
          <img src="/assets/ellipse.svg" alt="ellipse" className='absolute top-[-15px] left-[-20px] -z-10 '/>
        </div>
      </div>
      <div className='flex items-start gap-5'>
      <img src="/assets/group.svg" alt="group" />
      <div className='relative'>
        <h1 className='text-[#232b76] text-[30px] font-semibold'>Connecting People</h1>
        <p className='text-[#666666] text-[18px]'>Eabore etsu dolore magn aliqua enim ad minim veniam quis nostrud exercitas tion ullamco ipsum laboris.</p>
        <img src="/assets/ellipse.svg" alt="ellipse" className='absolute top-[-15px] left-[-20px] -z-10 '/>
      </div>

      </div>
      <div className='flex items-start gap-5'>
      <img src="/assets/world.svg" alt="world" />
      <div className='relative'>
        <h1 className='text-[#232b76] text-[30px] font-semibold'>Latest Updates</h1>
        <p className='text-[#666666] text-[18px]'>Eabore etsu dolore magn aliqua enim ad minim veniam quis nostrud exercitas tion ullamco ipsum laboris.</p>
        <img src="/assets/ellipse.svg" alt="ellipse" className='absolute top-[-15px] left-[-20px] -z-10 '/>
      </div>

      </div>
    </div>
    </>
 
  )
}

export default Description