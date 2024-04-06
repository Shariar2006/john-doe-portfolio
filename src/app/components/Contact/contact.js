import React, { useEffect, useState } from 'react';
import Title from '../shared/Title';
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { motion } from "framer-motion"


const Contact = () => {

    const [contactData, setContactData] = useState(null);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => setContactData(data?.user?.about))
    }, [])


    return (
        <div className='min-h-[80vh] mt-16'>
            <Title header='CONTACT ME' subTitle='LET’S Talk About Ideas' />

            <div className='flex justify-center items-center gap-8 w-[850px] mx-auto mt-2'>
                <div className="p-8  rounded-lg flex flex-col gap-2 w-full  text-black flex-1">
                    <form>
                        <input
                            className="w-full p-3 mb-3 rounded-md border border-white bg-none outline-none "
                            type="text"
                            placeholder="Enter your Name"
                        />
                        <input
                            type="email"
                            placeholder="Enter a valid email address"
                            className="w-full p-3 mb-3 rounded-md border border-white bg-none outline-none "
                        />
                        <textarea className="p-3 bg-none outline-none rounded-md mb-3" name="massage" placeholder="Write Your Message here..." id="" cols="50" rows="5"></textarea>

                        <button className="inline-block border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-700 ease-in-out font-bold ">
                            SUBMIT
                        </button>
                    </form>

                </div>
                <div className='flex-1'>
                    <motion.div className='flex items-center'
                        initial={{ opacity: 0, y: 40, }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{
                            delay: 0.2,
                            ease: [0.25, 0.25, 0.25, 0.75]
                        }}
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <IoLocationOutline className="text-6xl text-[#fff] mb-2  p-3 rounded-full shadow-md shadow-[#373737] mr-5" />
                        <div><p className='text-xl font-semibold'>Location</p>
                            <p>{contactData?.address}</p></div>
                    </motion.div>
                    <motion.div className='flex items-center my-5'
                        initial={{ opacity: 0, y: 40, }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{
                            delay: 0.4,
                            ease: [0.25, 0.25, 0.25, 0.75]
                        }}
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <FiPhoneCall className="text-6xl text-[#fff] mb-2  p-3 rounded-full shadow-md shadow-[#373737] mr-5" />
                        <div><p className='text-xl font-semibold'>
                            Phone
                        </p>
                            <p>{contactData?.phoneNumber}</p></div>
                    </motion.div>
                    <motion.div className='flex items-center'
                        initial={{ opacity: 0, y: 40, }}
                        whileInView={{ opacity: 1, y: 0, x: 0 }}
                        transition={{
                            delay: 0.6,
                            ease: [0.25, 0.25, 0.25, 0.75]
                        }}
                        viewport={{ once: false, amount: 0.7 }}
                    >
                        <IoMailOutline className="text-6xl text-[#fff] mb-2  p-3 rounded-full shadow-md shadow-[#373737] mr-5" />
                        <div><p className='text-xl font-semibold'>Mail</p>
                            <p>{contactData?.contactEmail}</p></div>
                    </motion.div>
                </div>
            </div>
        </div >
    );
};

export default Contact;