import React from 'react';
import './sidebar.css'
import Link from 'next/link';
import {motion} from 'framer-motion'

const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        }
    }
}

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    }
}

const Links = () => {
    const items = [
        {
            id: 1,
            route: "HomePage",
            path: '/#home'
        },
        {
            id: 3,
            route: "Skills",
            path: '/#skill'
        },
        {
            id: 4,
            route: "Services",
            path: '/#service'
        },
        {
            id: 5,
            route: "Projects",
            path: '/#project'
        },
        {
            id: 6,
            route: "Contact",
            path: '/#contact'
        },
    ]
    return (
        <motion.div variants={variants} className='links'>
            {items.map((item) => 
                <motion.div key={item?.id} variants={itemVariants} whileHover={{scale: 1.1}} whileTap={{scale: 0.96}}>
                    <Link className='text-4xl' href={item?.path}>{item?.route}</Link>
                    
                </motion.div>
            )}
        </motion.div>
    );
};

export default Links;