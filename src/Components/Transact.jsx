import React from 'react'
import footwear from '/images/fotwear.jpg'

const Transact = ({id}) => {
  return (
    <div className="bg-transaction w-10/12 mx-auto md:w-full text-white flex flex-col space-y-6 p-3 rounded ">
        <div className='flex flex-col space-y-3'>
        <p className='text-xs'>transaction name</p>
        <p className='text-xs'>transaction name</p>
        <p className='text-xs'>transaction name</p>
        </div>
        <h1 className="p text-sm">Message: Hello there from account 1</h1>
        <img src={`https://robohash.org/${id}?set=set4`} alt="" className='w-5/6' />
        <div className="date"> <span> 12/22/2022</span> <span>08:57:00</span></div>
    </div>
  )
}

export default Transact