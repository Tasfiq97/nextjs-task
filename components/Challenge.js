import Image from 'next/image';
import React from 'react';
import crusified from "../public/crucified-pose.png"
import dance from "../public/dancer-balance-posture-on-one-leg.png"
import motion from "../public/dancer-motion.png"
import { AiOutlineArrowRight } from "react-icons/ai";
const Challenge = () => {
    return (
        <div className='md:mt-[60px] mt-[20px] w-full font-poppins'>
           <div className='bg-gradient-to-r from-[#6462F0] to-[#9190E9] p-[60px] md:flex justify-around items-center md:mx-[30px] mx-[15px] rounded-[30px]  '>
           <div className='flex justify-around mt-[10px] md:mt-[40px]'>
    <div className=' bg-[#FFFFFF]/30 px-[20px] py-[30px] rounded-[20px] '>
    <Image className='backdrop-sepia-0'  src={crusified} alt={"no image"} width={"50px"} height={"50px"}>

</Image>
    </div>
    <div className='md:ml-[20px]  '>
        <h1 className='md:text-[20px] text-[14px] font-[700] text-white mt-[10px]'>Get that 11 line </h1>
        <h1 className='md:text-[20px] text-[14px] font-[700] text-white'>in 30 days </h1>
        <span className='text-[#FFFFFF] text-[12px] md:text-[16px] opacity-[0.5] mt-[16px] flex items-center justify-evenly'>Learn more <AiOutlineArrowRight className='mt-[4px]'></AiOutlineArrowRight> </span>
    </div>
            </div>
            <div className='flex justify-around mt-[40px]'>
    <div className=' bg-[#FFFFFF]/30 px-[20px] py-[30px]  rounded-[20px] '>
    <Image className='backdrop-sepia-0 '  src={dance} alt={"no image"} width={"50px"} height={"50px"}>

</Image>
    </div>
    <div className='md:ml-[20px]'>
        <h1 className='md:text-[20px] text-[14px] font-[700] text-white mt-[10px]'>14 days </h1>
        <h1 className='md:text-[20px] text-[14px] font-[700] text-white'>Sherd challenge </h1>
        <span className='text-[#FFFFFF] opacity-[0.5] mt-[16px] flex items-center justify-between'>Learn more <AiOutlineArrowRight className='mt-[4px]'></AiOutlineArrowRight> </span>
    </div>
            </div>
            <div className='flex justify-around mt-[40px]'>
    <div className=' bg-[#FFFFFF]/30 px-[20px] py-[30px]  rounded-[20px] '>
    <Image className='backdrop-sepia-0'  src={motion} alt={"no image"} width={"50px"} height={"50px"}>

</Image>
    </div>
    <div className='md:ml-[20px]'>
        <h1 className='md:text-[20px] text-[16px] font-[700] text-white mt-[10px]'>Get flat belly </h1>
        <h1 className='md:text-[20px] text-[16px] font-[700] text-white'>in 30 days </h1>
        <span className='text-[#FFFFFF] opacity-[0.5] mt-[16px] flex items-center justify-evenly '>Learn more <AiOutlineArrowRight className='mt-[4px] text-[#262524]/50'></AiOutlineArrowRight> </span>
    </div>
            </div>
           </div>
        </div>
    );
};

export default Challenge;