import Image from 'next/image';
import React from 'react';
 import img from "../public/Group 4227 (1).png"
 import { ImPlay2 } from "react-icons/im";
 import { IoIosArrowDroprightCircle} from "react-icons/io";
 import brand1 from "../public/Mask Group (1).png"
 import brand2 from "../public/Mask Group (2).png"
 import brand3 from "../public/Mask Group (3).png"
 import brand4 from "../public/Mask Group (4).png"

const Hero = () => {
    return (
        <div className=' relative p-[30px] w-full flex flex-col justify-around items-center md:flex md:flex-row'>
            <div>
                <div className=' md:absolute md:w-[784px] md:h-[784px] md:rounded-full md:top-0 md:left-[-100px] md:bg-[#F4CDD6] md:opacity-[.3] md:blur-[282px]'></div>
              
            </div>
            <div>
                <div className=' md:absolute  md:w-[784px] md:h-[784px] md:rounded-full md:top-0  md:bg-[#D388FF] md:opacity-[.3] md:blur-[282px]  md:left-[150px]'></div>
              
            </div>
            <div>
                <h1 className='md:text-[46px] text-[28px]  font-[700] tracking-wider font-sporting '>Healthy in side </h1>
                <h1 className='md:text-[46px] text-[28px] font-[700] tracking-wider font-sporting'><span className='text-[#8382EB] '>fresh</span> out side</h1>
                <p className='text-[16px] leading-[28px] text-[#262524] opacity-[0.6] md:w-[490px] p-[10px] text-justify font-poppins'>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.</p>
               <div className='flex flex-row  drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] mt-[20px]'>
               <button className='flex items-center justify-between w-[174px] md:w-[240px] p-[10px] text-[16px] bg-[#264373] rounded-[10px] text-white md:py-[15px]  shadow-[0px_20px_80px_rgba(51, 78, 123, 0.3)] font-poppins'> <span className='ml-[10px]'>Get Started</span>  <IoIosArrowDroprightCircle className='text-white text-[25px] mr-[10px]'></IoIosArrowDroprightCircle> </button>
               <button className='ml-[35px] flex items-center  w-[130px] md:w-[174px] p-[10px]  text-[16px] text-[#264373] rounded-[10px]  md:py-[15px] border-2  bg-gray-100 '> <ImPlay2 className='text-[#264373] text-[20px] md:mr-[15px] md:ml-[20px] mr-[5px] font-poppins'></ImPlay2>
                Learn more  </button>
               </div>
               <div className='relative mt-[40px] font-poppins'>
                <h1 className='text-[12px] md:text-[16px] ml-[25px]'>Brands: </h1>
                <div className='flex justify-evenly items-center'>
              <Image src={brand1} alt="no image" width={"60px"} height={"60px"} ></Image>
              <Image src={brand2} alt={"no image"} width={"60px"} height={"60px"}></Image>
              <Image src={brand3} alt={"no image"} width="60px" height="60px"></Image>
              <Image src={brand4} alt={"no image"} width="60px" height="60px"></Image>
                </div>
                <div>
                <div className=' md:absolute md:w-[784px] md:h-[784px] md:rounded-full md:top-0 md:left-[-300px] top-[-100px] md:bg-[#F3B411] md:opacity-[.2] md:blur-[282px] '></div>
              
            </div>
               </div>
            </div>
            <div className='md:ml-[150px] mt-[20px]'>
           <Image src={img} alt={"no image"} width={"584px"} height={"580px"}>

           </Image>
            </div>
        </div>
    );
};

export default Hero;