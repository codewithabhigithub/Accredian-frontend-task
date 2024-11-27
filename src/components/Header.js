// import React from 'react';
// import logo from '../image/logo.png.png'
// import Vector from '../image/Vector.png'

// const Header = () => {
//     return (
//         <>
//             {/* Navbar */}
//             <div className='w-[1920px] h-[79.2px] py-[9.6px] px-[280px] flex'>
//                 <div className='flex space-x-4 w-[560px] h-[40px]'>
//                     <img className='w-[125px] h-[36.6px] mr-4' src={logo} alt="Logo" />
//                     <button className='rounded-md flex items-center w-[116px] h-[40px] px-[18px] py-[8px] br-[6px] bg-[#1A73E8] text-[#FFFFFF]'>Courses <img className='ml-2' src={Vector} alt="Vector" /></button>
//                 </div>
//                 <div className='text-md w-[800px] h-[40px] text-center font-medium justify-end flex items-center space-x-8'>
//                     <p>Refer & Earn</p>
//                     <p>Resources</p>
//                     <p>About Us</p>
//                     <div className='w-[208.01px] h-[40px] flex  justify-between'>
//                         <button className='font-medium w-[77px] h-[40px] bg-[#eaedf1] text-[#1A202C] px-[18px] py-[8px] rounded-md'>Login</button>
//                         <button className='font-medium w-[115px] h-[40px] bg-[#1A73E8] text-[#FFFFFF] px-[18px] py-[8px] rounded-md'>Try for free</button>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Header;


import React, { useState } from 'react';
import logo from '../image/logo.png.png';
import Vector from '../image/Vector.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full h-[79.2px] py-[9.6px] px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 flex items-center justify-between relative">
      {/* Left Section: Logo and Button */}
      <div className="flex items-center space-x-4">
        <img className="w-[125px] h-[36.6px]" src={logo} alt="Logo" />
        <button className="flex items-center bg-[#1A73E8] text-white rounded-md px-4 py-2">
          Courses <img className="ml-2" src={Vector} alt="Vector" />
        </button>
      </div>

      {/* Right Section: Links and Buttons */}
      <div className="hidden md:flex items-center space-x-8 text-md font-medium">
        <p>Refer & Earn</p>
        <p>Resources</p>
        <p>About Us</p>

        <div className="flex space-x-4">
          <button className="bg-[#eaedf1] text-[#1A202C] px-4 py-2 rounded-md">Login</button>
          <button className="bg-[#1A73E8] text-white px-4 py-2 rounded-md">Try for free</button>
        </div>
      </div>

      {/* Mobile View: Hamburger Menu */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white p-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-[79.2px] left-0 w-full bg-[#1A73E8] text-white py-4 px-8 flex flex-col items-center space-y-4 z-10 md:hidden">
            <p>Refer & Earn</p>
            <p>Resources</p>
            <p>About Us</p>
            <div className="flex flex-col space-y-2">
              <button className="bg-[#eaedf1] text-[#1A202C] px-4 py-2 rounded-md">Login</button>
              <button className="bg-[#1A73E8] text-white px-4 py-2 rounded-md">Try for free</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
