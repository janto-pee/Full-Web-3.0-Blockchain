import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'

function Footer() {
  return (
    <div className='container mx-auto p-6'>
      <div className="flex justify-between mb-4">
      <div className="logo">
          <img src={logo} className="w-32 cursor-pointer" alt="" />
        </div>
        <div className="hidden md:flex text-white items-center gap-4 md:space-x-6">
          <a href="https/website.com">Market</a>
          <a href="https/website.com">Exchange</a>
          <a href="https/website.com">Tutorials</a>
          <a href="https/website.com">Wallets</a>
        </div>
      </div>
      <hr />
      <div className="flex justify-between mt-6">
        <span className='text-white'>@crypto2022</span>
        <span className='text-white'>All rights reserved</span>
      </div>
      </div>
  )
}

export default Footer