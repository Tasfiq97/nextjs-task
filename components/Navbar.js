import React, { useState } from 'react';
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
    const [open,setOpen]=useState(false);
const handleOpen=()=>{
    setOpen(!open);
}
    return (
        <div className=' shadow-md md:flex justify-between items-center mx-w-[1380px] mx-auto h-[50px] mt-[20px]  top-0 left-0 md:p-10 md:shadow-none'>
            <div className='md:px-0 px-2'>
                <span className='md:font-["Sporting Grotesque"] text-[20px] bg-[#6765F0] text-white shadow-[0px 20px 80px rgba(51, 78, 123, 0.3)] rounded-[10px] px-[5px] py-[5px] text-center font-sporting'>Gym</span>
                <span className='ml-[6px] text-[20px] text-[#6765F0] font-sporting'>baran</span>
                <div onClick={handleOpen} className=' absolute right-8 top-2 md:hidden'>
                {
                   ! open?  <AiOutlineMenu></AiOutlineMenu>:<AiOutlineClose></AiOutlineClose>
                   
                }
                </div>
            </div>
           
            <div className=' transition-all duration-500 font-poppins '>
            
               <ul className=" hidden md:flex items-center">
                <li className='ml-[39px] md:my-0 my-5'>Home</li>
                <li className='ml-[39px] md:my-0 my-5'>Program</li>
                <li className='ml-[39px] md:my-0 my-5'>Blog</li>
                <li className='ml-[39px]  md:my-0 my-5'>About us</li>
                <button className='ml-[39px] bg-[#264373] text-white px-[35px] py-[13px] rounded-[10px]  shadow-[0px_20px_80px_rgba(51, 78, 123, 0.9)] '>Log in</button>
               </ul>
            </div>
            <div className={open? 'fixed left-0 right-0 w-[60%] h-full border-r border-r-gray-300 mt-5 bg-gray-200 ease-out duration-500 z-[10]':"fixed top-[-100%]"}>
                <ul className='p-4 '>
                <li className='ml-[0px] md:my-0 my-5 p-2'>Home</li>
                <li className='ml-[0px] md:my-0 my-5 p-2'>Program</li>
                <li className='ml-[0px] md:my-0 my-5 p-2'>Blog</li>
                <li className='ml-[0px]  md:my-0 my-5 p-2'>About us</li>
                <button className='ml-[0px] bg-[#264373] text-white px-[35px] py-[13px] rounded-[10px] shadow-[0px, ,20px,80px,rgba(51, 78, 123, 0.8)] text-[16px] p-2 '>Log in</button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;