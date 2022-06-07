import React from 'react'
import { SiSpringsecurity } from 'react-icons/si'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdFavorite } from 'react-icons/md'

function Services() {
  return (
    <div className='services container mx-auto text-white py-24  p-6'>
      <div className="flex flex-col items-center md:space-between space-y-6 md:flex-row md:space-x-6">
        {/* left-col */}
        <div className="text-center  md:text-left md:left text-white">
          <h1 className="md:max-w-md text-3xl">Services that we continue to improve</h1>
          <p className='mt-4 text-sm text-gray'>The best choice for buying and selling crypto assets, with the various super friendly services we offer </p>
        </div>
        {/* right-col */}
        <div className="right flex flex-col space-y-6 ">
          {/* card one */}
          <div className="card1 p-3 rounded-lg bg-white-glassmorphism border-solid border border-gray flex flex-row space-x-6 ">
            <div className="icon">
              <div className='p-2 rounded-full bg-blue-500 border border-gray-100'>
                <SiSpringsecurity />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h1 className='text-xl'>Security Guarantee</h1>
              <p className='text-sm text-gray-50'>Security is guaranteed. We always maintain privacy and maintain the quality of our products</p>
            </div>
          </div>
          <div className="card1 p-3 rounded-lg bg-white-glassmorphism border-solid border border-gray flex flex-row space-x-6">
            <div className="icon">
              <div className='p-2 rounded-full bg-purple-500 border border-gray-100'>
                <AiOutlineSearch />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h1 className='text-sm'>Security Guarantee</h1>
              <p className='text-sm text-gray-50'>Security is guaranteed. We always maintain privacy and maintain the quality of our products</p>
            </div>
          </div>
          <div className="card1 p-3 rounded-lg bg-white-glassmorphism border-solid border border-gray flex flex-row space-x-6 ">
            <div className="icon">
              <div className='p-2 rounded-full bg-rose-500 border border-gray-100'>
                <MdFavorite />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h1 className='text-xl'>Security Guarantee</h1>
              <p className='text-sm text-gray-50'>Security is guaranteed. We always maintain privacy and maintain the quality of our products</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Services