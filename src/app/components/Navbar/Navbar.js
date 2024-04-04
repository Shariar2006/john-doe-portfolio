'use client'
import React from 'react';
import { motion } from 'framer-motion'
import Sidebar from './Sidebar';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <Sidebar></Sidebar>
            </div>
            <motion.h1 className='text-3xl font-semibold mt-5 mr-10'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >John Doe</motion.h1>
        </div>
    );
};

export default Navbar;