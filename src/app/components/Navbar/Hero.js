/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {motion} from 'framer-motion'

const Hero = () => {

    const [heroData, setHeroData] = useState(null);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => setHeroData(data?.user?.about))
    }, [])

    console.log(heroData)


    return (
        <div  className='flex justify-between items-center px-20 gap-10 text-white'>
            <div className='ml-14 flex-1'>
                <h1 className='text-7xl my-5'>{heroData?.name}</h1>
                <h2 className='text-2xl'>I am {heroData?.title}</h2>
                <p className='text-2xl pt-6'>{heroData?.description}</p>
            </div>
            <motion.div className='flex-1' initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}>
            <Image className='rounded-full' src={heroData?.avatar?.url} alt="image" width={450} height={100}></Image>
            </motion.div>
        </div>
    );
};

export default Hero;