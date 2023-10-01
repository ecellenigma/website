// components/Navbar.js
'use client'
import React, { useState } from 'react';

const NavbarPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-[#242526] p-4 rounded-md flex flex-col sm:flex-row items-center justify-between'>
        <button
          className='text-[#F26938] text-2xl sm:hidden focus:outline-none '
          onClick={toggleMenu}
        >
          {!isOpen ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              className='h-6 w-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          )}
        </button>
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:flex mt-4 sm:mt-0 sm:flex-row gap-2 sm:gap-10 sm:ml-10 sm:mr-10`}
      >
        <li className='navbar_li'>
          <a href="#">Home</a>
        </li>
        <li className='navbar_li'>
          <a href="#">About</a>
        </li>
        <li className='navbar_li'>
          <a href="#">Recruitment 23</a>
        </li>
        <li className='navbar_li'>
          <a href="#">Annual Report 21</a>
        </li>
        <li className='navbar_li'>
          <a href="#">Ideathon 23</a>
        </li>
        <li className='navbar_li'>
          <a href="#">Blogs</a>
        </li>
        <li className='navbar_li'>
          <a href="#">Team</a>
        </li>
        <li className='navbar_li'>
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavbarPage;
