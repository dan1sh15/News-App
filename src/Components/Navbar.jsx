import React, { useState } from 'react';
import { RiMenuFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
import {GoHomeFill} from "react-icons/go";
import {BiSolidBusiness} from "react-icons/bi";
import {MdCelebration, MdHealthAndSafety, MdScience, MdOutlineSportsKabaddi} from "react-icons/md";
import { BsFillLaptopFill } from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => {

    const [show, setShow] = useState(true);

    const handleClick = () => {
        setShow(!show);
    }

  return (
    <div className={`text-[#FFFFFF] max-sm:justify-center sticky top-0 h-[100vh] ${show ? "w-[15vw]" : "w-[5vw]"} border-cardBg flex flex-col items-center max-phone:p-3 max-ipad:px-3 p-6 gap-y-5`}>
        <div onClick={handleClick} className='text-3xl max-ipad:hidden hover:text-blueBg cursor-pointer transition-all duration-300 ease-linear min-w-fit w-[90%]'>
            <RiMenuFill />
        </div>
        <nav className='customFont text-xl'>
            <ul className={`flex flex-col ${show ? "gap-y-5" : "gap-y-7"}`}>
                <li>
                    <NavLink className={`flex items-center gap-x-2 hover:text-blueBg `} to={"/"}>
                        <span className={`${show ? "text-xl" : "text-3xl"} max-phone:text-xl max-ipad:text-3xl transition-all duration-300 ease-linear`}><GoHomeFill /></span>
                        {show && <span className='transition-all max-ipad:hidden duration-300 ease-linear'>Home</span>}
                    </NavLink>
                </li>
                <li>
                    <NavLink className='flex items-center gap-x-2 hover:text-blueBg' to={"/business"} >
                        <span className={`${show ? "text-xl" : "text-3xl"} max-phone:text-xl max-ipad:text-3xl transition-all duration-300 ease-linear`}><BiSolidBusiness /></span>
                        {show && <span className='transition-all max-ipad:hidden duration-300 ease-linear'>Business</span>}
                    </NavLink>
                </li>
                <li>
                    <NavLink className='flex items-center gap-x-2 hover:text-blueBg' to={"/entertainment"} >
                        <span className={`${show ? "text-xl" : "text-3xl"} max-phone:text-xl max-ipad:text-3xl transition-all duration-300 ease-linear`}><MdCelebration /></span>
                        {show && <span className='transition-all max-ipad:hidden duration-300 ease-linear'>Entertainment</span>}
                    </NavLink>
                </li>
                <li>
                    <NavLink className='flex items-center gap-x-2 hover:text-blueBg' to={"/health"}>
                        <span className={`${show ? "text-xl" : "text-3xl"} max-phone:text-xl max-ipad:text-3xl transition-all duration-300 ease-linear`}><MdHealthAndSafety /></span>
                        {show && <span className='transition-all max-ipad:hidden duration-300 ease-linear'>Health</span>}
                    </NavLink>
                </li>
                <li>
                    <NavLink className='flex items-center gap-x-2 hover:text-blueBg' to={"/science"} >
                        <span className={`${show ? "text-xl" : "text-3xl"} max-phone:text-xl max-ipad:text-3xl transition-all duration-300 ease-linear`}><MdScience /></span>
                        {show && <span className='transition-all max-ipad:hidden duration-300 ease-linear'>Science</span>}
                    </NavLink>
                </li>
                <li>
                    <NavLink className='flex items-center gap-x-2 hover:text-blueBg' to={"/sports"}>
                        <span className={`${show ? "text-xl" : "text-3xl"} max-phone:text-xl max-ipad:text-3xl transition-all duration-300 ease-linear`}><MdOutlineSportsKabaddi /></span>
                        {show && <span className='transition-all max-ipad:hidden duration-300 ease-linear'>Sports</span>}
                    </NavLink>
                </li>
                <li>
                    <NavLink className='flex items-center gap-x-2 hover:text-blueBg' to={"/technology"}>
                        <span className={`${show ? "text-xl" : "text-3xl"} max-phone:text-xl max-ipad:text-3xl transition-all duration-300 ease-linear`}><BsFillLaptopFill /></span>
                        {show && <span className='transition-all max-ipad:hidden duration-300 ease-linear'>Technology</span>}
                    </NavLink>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar
