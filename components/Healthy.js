import React from 'react';

const Healthy = () => {
    return (
        <div className=' relative w-full  md:px-[40px] p-[30px] md:flex md:justify-evenly items-center'>
             
            <div className='md:w-[50%]'>
            <h1 className='md:text-[46px] text-[28px]  font-[700] tracking-wider font-sporting '>Healthy in side </h1>
            <h1 className='md:text-[46px] text-[28px] font-[700] tracking-wider font-sporting'>fresh out side</h1>
            </div>
            <div className='md:w-[50%]'>
                <p className=' md:w-[580px] md:text-[16px] text-[12px] leading-[28px] text-[#262524] opacity-[0.6] text-justify md:space-y-3 font-poppins'>Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. Healthy life makes you more excited to live the day</p>
            </div>
        </div>
    );
};

export default Healthy;