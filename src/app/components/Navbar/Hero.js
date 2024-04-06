/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'

const Hero = () => {

    const [heroData, setHeroData] = useState(null);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => setHeroData(data?.user?.about))
    }, [])



    return (
        <div className='flex flex-col-reverse lg:flex-row min-h-screen justify-between items-center px-20 gap-10 text-white'>
            <div className='ml-14 flex-1'>

                <motion.h1 className='text-7xl my-5'
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 25 }}
                    transition={{ delay: 1 }}>{heroData?.name}</motion.h1>

                <motion.h2 className='text-2xl'
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 25 }}
                transition={{ delay: 1.3 }}
                >I am {heroData?.title}</motion.h2>

                <motion.p className='text-2xl pt-6'
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 25 }}
                transition={{ delay: 1.6 }}
                >{heroData?.description}</motion.p>
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