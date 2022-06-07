import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import logo from '../../images/logo.png';
import { AiOutlineClose } from "react-icons/ai";
import {GiHamburgerMenu} from 'react-icons/gi'


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
  }
  return (
    <div className='container mx-auto py-4 px-4'>
      <div className="flex flex-row space-x-6 items-center justify-between">
        <div className="logo">
          <img src={logo} className="w-32 cursor-pointer" alt="" />
        </div>
        <div className="hidden md:flex text-white items-center md:flex-row md:space-x-6">
          <a href="https/website.com">Market</a>
          <a href="https/website.com">Exchange</a>
          <a href="https/website.com">Tutorials</a>
          <a href="https/website.com">Wallets</a>
          <a href="" className='bg-blue-600 text-white p-2 px-5 rounded-full'>Login</a>
        </div>
        
        {
          !toggleMenu &&
          (<button className="block hamburger md:hidden focus:outline-none text-white text-xl"  onClick={handleToggle}
          ><GiHamburgerMenu /> </button>) 
        }


      {
        toggleMenu && (
          <div className="md:hidden">
          <div
            className="absolute top-0 right-0 bg-white flex flex-col p-6 w-6/12 space-y-8 h-full z-10"
          >
            <span className='text-right' onClick={handleToggle}><AiOutlineClose /></span>
            <Link to="#">Pricing</Link>
            <Link to="#">Product</Link>
            <Link to="#">About Us</Link>
            <Link to="#">Careers</Link>
            <Link to="#">Community</Link>
          </div>
        </div>
          )
      }
    
       
        
      </div>
    </div>
  )
}

export default Navbar