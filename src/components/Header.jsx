import React from 'react'

const Header = () => {
  return (
    <header className="header h-[500px] 2xl:h-[721px] w-full max-w-[1920px] m-auto flex flex-col lg:flex-row justify-center items-center gap-8">
      <section className='max-w-[780px] 2xl:translate-x-[-7rem] '>
        <h3 className='text-[#232B76] text-xl lg:text-[21px] font-semibold py-1 2xl:py-2 px-2 md:px-0'>NEXT WEBINAR</h3>
        <h1 className='text-white text-xl lg:text-[40px] leading-none italic pt-1 pb-5 2xl:pb-7 px-2 md:px-0'>EVENT NAME it amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</h1>
        <h1 className='text-[#232B76] text-xl lg:text-[36px] font-semibold leading-none pt-1 pb-3 2xl:pb-4 px-2 md:px-0'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</h1>
        <h2 className='text-white text-xl lg:text-[30px] pb-7 2xl:pb-9 px-2 md:px-0'>Wednesday, 25 February 2021</h2>
        <div className='flex justify-center md:justify-start items-center gap-5 text-white leading-none'>
          <div className='w-[4rem] md:w-[5rem] flex flex-col items-center justify-center bg-[#232b76] py-2 gap-y-1 px-2 md:px-0'>
            <p className='text-md lg:text-[37px]'>15</p>
            <p className='text-md lg:text-[19px]'>Days</p>
          </div>
          <div className='w-[4rem] md:w-[5rem] flex flex-col items-center justify-center bg-[#232b76] py-2 gap-y-1'>
            <p className='text-md lg:text-[37px]'>12</p>
            <p className='text-md lg:text-[19px]'>Hours</p>
          </div>
          <div className='w-[4rem] md:w-[5rem] flex flex-col items-center justify-center bg-[#232b76] py-2 gap-y-1'>
            <p className='text-md lg:text-[37px]'>49</p>
            <p className='text-md lg:text-[19px]'>Minutes</p></div>
          <div className='w-[4rem] md:w-[5rem] flex flex-col items-center justify-center bg-[#232b76] py-2 gap-y-1'>
            <p className='text-md lg:text-[37px]'>32</p>
            <p className='text-md lg:text-[19px]'>Seconds</p></div>
        </div>

      </section>
      <section>
        <img src="/assets/loginButton.svg" alt="login"  className='cursor-pointer'/>
        <img src="/assets/registerButton.svg" alt="register" className='cursor-pointer' />
      </section>

    </header>
  )
}

export default Header