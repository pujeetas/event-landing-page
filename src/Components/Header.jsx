import React from 'react'

const Header = () => {
  return (
    <div className='sticky top-0 z-50 inset-x-0 bg-white'>
      <div className=' flex gap-[23rem]'>
        <img src='images/logo.svg' className=' mt-4 ml-8 flex items-center gap-9'></img>
        <div class="bg-gray-100 mt-4 space-x-6 p-3 justify-center items-center flex rounded-full ">
          <a href="#" class="text-gray-500 hover:text-gray-800 text-sm font-semibold inline-flex items-center justify-center">Intro</a>
          <a href="#" class="text-gray-500 hover:text-gray-800 text-sm font-semibold inline-flex items-center justify-center">Pricing</a>
          <a href="#" class="text-gray-500 hover:text-gray-800 text-sm font-semibold inline-flex items-center justify-center">Features</a>
          <a href="#" class="text-gray-500 hover:text-gray-800 text-sm font-semibold inline-flex items-center justify-center">Testimonials</a>
        </div>
        <div className='mt-4'>
        <button class="bg-black text-white font-semibold rounded-full p-2 items-center text-sm justify-between hover:bg-[#65c51c] transition-all">Join Community</button>
          </div>
      </div>
    </div>
  )
}

export default Header
