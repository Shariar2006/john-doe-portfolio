'use client'
import React from 'react';
import { motion } from 'framer-motion'
import Sidebar from './Sidebar';
import Hero from './Hero';
import usePortfolioData from '@/app/hook/usePortfolioData';

const Navbar = () => {

    

    return (
        <div>
            <div className='flex justify-between items-center'>
                <div>
                    <Sidebar></Sidebar>
                </div>
                <motion.h1 className='text-3xl font-semibold mt-8 mr-10'
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >John Doe</motion.h1>
            </div>
            <Hero/>
        </div>
    );
};

export default Navbar;