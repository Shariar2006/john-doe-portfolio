import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion'

const Skill = ({ skill, index }) => {

    const [isHover, setIsHover] = useState(false)

    return (
        <motion.div className='mt-3'

            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{
                delay: index * 0.2,
                ease: [0.25, 0.25, 0.25, 0.75]
            }}
            viewport={{ once: false, amount: 0.7 }}
        >
            {
                isHover && <div className='relative'>
                    <div className='absolute'>
                        <h1 className='bg-gray-200 text-lg font-semibold text-black mb-16 px-2'>{skill?.name}</h1>
                        <h1 className='bg-gray-200 text-black  text-center w-10'>{skill?.percentage}%</h1>
                    </div>
                </div>
            }
            <Image
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                className='bg-[#242323] rounded-full p-2 w-[120px] hover:cursor-pointer' src={skill?.image?.url} alt='skill image' width={100} height={100}></Image>
        </motion.div>
    );
};

export default Skill;