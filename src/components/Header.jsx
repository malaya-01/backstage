
  import React, { useState } from 'react';
  import { FaUserCircle } from 'react-icons/fa';
  import { FaUserLarge,FaUser  } from "react-icons/fa6";

  const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
      setIsOpen(false);
    };

    const handleDropdownClick = (event) => {
      event.stopPropagation(); // Prevents closing when clicking inside the dropdown menu
    };

    return (
      <header className="bg-gray-200 text-black flex justify-end items-center p-4 transition-all duration-300">
        <div className=" text-left mr-3">
          <div onClick={toggleDropdown}>
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className='flex-col flex text-right space-x-2 cursor-pointer'>
                <p className="text-gray-800 text-xs">Username</p>
                <p className="text-gray-800 text-xs">email@email.com</p>
              </div>
              <FaUser  className="text-2xl text-gray-600 cursor-pointer" />
            </div>
          </div>
          {isOpen && (
            <div className="fixed inset-0 z-10 flex justify-end" onClick={closeDropdown}>
              <div className="absolute mt-2 w-36 right-9 top-11 bg-white text-gray-800 rounded shadow-lg" onClick={handleDropdownClick}>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Profile</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Settings</a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">Logout</a>
              </div>
            </div>
          )}
        </div>
      </header>
    );
  };

  export default Header;


