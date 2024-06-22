
import React from 'react';
import { FaHome, FaUserAlt, FaCog, FaBars, FaChevronRight } from 'react-icons/fa';
import { BiLogoMedium, BiSolidBarChartSquare } from "react-icons/bi";
import { MdLibraryMusic } from "react-icons/md";
import { FaChevronLeft } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Sidebar = ({ expanded, setExpanded }) => {
  return (
    <div className={`flex flex-col justify-start h-screen bg-gray-100 text-gray-500 transition-width duration-300 ${expanded ? 'w-56' : 'w-16'} fixed`}>
      <div className="relative flex flex-col  ">
        {expanded ? <Link to='/'>
          <div className='flex flex-row items-center duration-300 transition-transform p-4'>
            <BiLogoMedium className='text-3xl text-black' />
            <span className='text-black text-xl font-semibold'>
              Monolith
            </span>
          </div>
        </Link>
          :
          <Link to='/'>
            <div className='p-2'>
              <BiLogoMedium className='text-3xl text-black' />
            </div>
          </Link>}
          <div className={`flex flex-col ${expanded ? "p-4" : "items-center"}`}>
          <Link to='/'><MenuItem icon={<BiLogoMedium className='text-xl' />} text="One release" expanded={expanded} /></Link>
          <Link to='/'><MenuItem icon={<BiLogoMedium className='text-xl' />} text="Multiple releases" expanded={expanded} /></Link>
          </div>

        <button onClick={() => setExpanded(!expanded)} className="absolute top-5 -right-4 text-xs text-bold rounded-full bg-white text-black p-2">
          {expanded ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
      </div>
      <hr className='h-0.5 mr-3.5 ml-3.5 bg-gray-200' />
      <div className={`flex flex-col ${expanded ? "p-4" : "items-center"} flex-grow transition-all duration-150 `}>
        <Link to='/'><MenuItem icon={<FaHome />} text="Overview" expanded={expanded} /></Link>
        <Link to='catalog' ><MenuItem icon={<MdLibraryMusic />} text="Catalogue" expanded={expanded} /></Link>
        <Link to='music-player'><MenuItem icon={<BiSolidBarChartSquare />} text="Settings" expanded={expanded} /></Link>
      </div>
    </div>
  );
};

const MenuItem = ({ icon, text, expanded }) => (
  <div className="flex p-2 hover:bg-gray-50 cursor-pointer">
    <div className="text-xl">
      {icon}
    </div>
    <span className={`ml-4 text-base ${expanded ? 'block' : 'hidden'}`}>
      {text}
    </span>
  </div>
);

export default Sidebar;

