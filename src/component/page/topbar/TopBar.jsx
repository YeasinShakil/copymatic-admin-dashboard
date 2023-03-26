import React, { useContext, useEffect, useState } from 'react';

import { HiOutlineSun } from 'react-icons/hi';
import { MdNightlight } from 'react-icons/md';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { GrAnnounce } from 'react-icons/gr';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { FiMessageSquare } from 'react-icons/fi';
import { BiChevronDown } from 'react-icons/bi';
import noteContext from '../../../Context/noteContext';
import languageFlag from '../../../assets/English_Language_Flag.png';
import frofilePhoto from '../../../assets/profile-photo.jpg';

const TopBar = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
    else {
      setTheme('light');
    }
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme)
  };

  const open = useContext(noteContext);
  // const [open, setOpen] = useState(openX)

  return (
    <div className={`${open.open ? 'w-[83%]' : 'w-[95%]'} bg-gray-100 right-0 py-2 px-4 fixed top-0 z-20`}>

      <div className=' flex justify-between items-center'>
        <div className=' flex gap-4'>
          <button className='flex items-center p-1 rounded-md text-white text-sm bg-slate-900'>
            <AiOutlinePlusCircle className='pr-1 text-lg' /> CREATE CONTENT
          </button>

          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 cursor-pointer left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full py-1 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            />
          </div>
        </div>
        <div className='flex gap-3 items-center'>
          <div className='h-5 w-5 flex justify-center items-center object-cover overflow-hidden  rounded-full'>
            <img src={languageFlag} style={{ width: '100px', height: '20px' }} alt="" />
          </div>
          <p className=' cursor-pointer text-lg' onClick={handleThemeSwitch}>{theme == 'dark' ? <MdNightlight /> : <HiOutlineSun />}</p>
          <p className=' cursor-pointer text-lg'><AiOutlineQuestionCircle /></p>
          <p className=' cursor-pointer text-lg'><GrAnnounce /></p>
          <p className=' cursor-pointer text-lg'>
            <FiMessageSquare />
            </p>

          {/* <p className=' cursor-pointer text-lg'><CgProfile /></p> */}
          <div className=' flex justify-center items-center cursor-pointer'>
            <div className='h-8 w-8 rounded-full overflow-hidden object-cover flex justify-center items-center '>
            <img src={frofilePhoto} className='w-10 h-10' alt="" />
            </div>
            <p className='px-1 text-gray-500 flex items-center '>Yeasin Shakil
            <BiChevronDown/>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;