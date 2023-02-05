import Image from 'next/image';
import React from 'react';
import img from "../public/Group 3892.png"
import { AiOutlineArrowRight } from "react-icons/ai";

const Workout = () => {
    return (
        <div className='w-full md:px-[40px] p-[40px] md:flex md:flex-row-reverse md:justify-between items-center mt-[60px] '>
            <div className='relative md:p-[30px] md:ml-[100px] '>
        <h1 className='md:text-[46px] text-[28px]  font-[700] tracking-wider font-sporting'>Best full body</h1>
        <h1 className='md:text-[46px] text-[28px] font-[700] tracking-wider font-sporting'>Workout to loose fat</h1>
        <p className=' md:text-[16px] text-[12px] leading-[28px] text-[#262524] opacity-[0.6] text-justify md:space-y-3 mt-[10px] font-poppins'>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home.</p>
        <button className='flex items-center justify-between w-[174px] md:w-[240px] p-[10px] text-[16px] bg-[#264373] rounded-[10px] text-white md:py-[15px] mt-[40px] mb-[20px] font-poppins'> <span className='ml-[10px]'>Get Started</span> <AiOutlineArrowRight className='text-[20px] mr-[10px]'></AiOutlineArrowRight>  </button>
        <div className=' md:absolute  md:w-[584px] md:h-[584px] md:rounded-full  md:left-[50px] md:right-[700px] md:top-[-100px] md:bg-[#D388FF] md:opacity-[.2] md:blur-[282px]  '></div>
            </div>
            <div>
             <Image className='md:w-[1070px] ' src={img} width={700} height={700} alt="no image">

             </Image>
            </div>
        </div>
    );
};

export default Workout;