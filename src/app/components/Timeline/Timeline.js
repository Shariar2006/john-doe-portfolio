import React, { useEffect, useState } from 'react';
import Title from '../shared/Title';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion"

const Timeline = () => {

    const [timelineData, setTimelineData] = useState([]);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => setTimelineData(data?.user?.timeline))
    }, [])

    const educationData = timelineData.filter(item => item.forEducation)

    const experienceData = timelineData.filter(item => !item.forEducation)

    const [activeIndex, setActiveIndex] = useState(null);
    const toggleAccordion = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };


    const [eduactiveIndex, edusetActiveIndex] = useState(null);
    const edutoggleAccordion = (index) => {
        edusetActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };



    return (
        <div className='min-h-[80vh]'>
            <Title header='RESUME' subTitle='MY Story' />

            <div className='flex flex-col md:flex-row justify-center gap-5 mt-10 text-black'>

                {/* Education info */}
                <div>
                    <p className='text-2xl md:text-3xl font-bold text-center m-5 text-white'>Education</p>
                    <div className="grid gap-4">
                        {educationData?.map((item, index) => (
                            <motion.div key={index} className="bg-[#e3e3e3]  rounded-md overflow-hidden shadow-md w-[600px]"
                                initial={{ opacity: 0, y: 40, x: -40 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{
                                    delay: index * 0.2,
                                    ease: [0.25, 0.25, 0.25, 0.75]
                                }}
                                viewport={{ once: false, amount: 0.7 }}
                            >
                                <div
                                    className={`p-6 cursor-pointer flex justify-between items-center  bg-[#fff]  ${eduactiveIndex === index ? 'bg-clip-border p-8  shadow-md' : 'border-b border-black'
                                        }`}
                                    onClick={() => edutoggleAccordion(index)}
                                >
                                    <span className="text-lg font-semibold">{item?.company_name}</span>
                                    <span className="text-xl">{eduactiveIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                                </div>
                                {eduactiveIndex === index && (
                                    <div className="p-6 bg-fifthColor border-b-2">
                                        {/* <p className='text-xl font-bold mb-5'>{item?.company_name}</p> */}
                                        <div className='flex justify-between items-center mb-5'>
                                            <p className='text-xl italic'>{item?.jobTitle}</p>
                                            <p className='font-bold'>{item?.startDate?.slice(0, 4)}-{item?.endDate?.slice(0, 4)}, <span>{item?.jobLocation}</span></p>
                                        </div>
                                        <div className='mb-5'>
                                            <p>{item?.summary}</p>
                                        </div>

                                        <div className='p-3'>
                                            <ul className='list-disc'>
                                                {
                                                    item?.bulletPoints
                                                        ?.map(item => <li key={item.id}>{item}</li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Experience info*/}
                <div>
                    <p className='text-2xl md:text-3xl font-bold text-center m-5 text-white'>Experience</p>
                    <div className="grid gap-4">
                        {experienceData?.map((item, index) => (
                            <motion.div key={index} className="bg-[#e3e3e3]  rounded-md overflow-hidden shadow-md w-[600px]"
                            initial={{ opacity: 0, y: 40, x: 40 }}
                                whileInView={{ opacity: 1, y: 0, x: 0 }}
                                transition={{
                                    delay: index * 0.2,
                                    ease: [0.25, 0.25, 0.25, 0.75]
                                }}
                                viewport={{ once: false, amount: 0.7 }}
                            >
                                <div
                                    className={`p-6 cursor-pointer flex justify-between items-center  bg-[#fff]  ${activeIndex === index ? 'bg-clip-border p-8  shadow-md' : 'border-b border-black'
                                        }`}
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <span className="text-lg font-semibold">{item?.company_name}</span>
                                    <span className="text-xl">{activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                                </div>
                                {activeIndex === index && (
                                    <div className="p-6 bg-fifthColor border-b-2">
                                        {/* <p className='text-xl font-bold mb-5'>{item?.company_name}</p> */}
                                        <div className='flex justify-between items-center mb-5'>
                                            <p className='text-xl italic'>{item?.jobTitle}</p>
                                            <p className='font-bold'>{item?.startDate?.slice(0, 4)}-{item?.endDate?.slice(0, 4)}, <span>{item?.jobLocation}</span></p>
                                        </div>
                                        <div className='mb-5'>
                                            <p>{item?.summary}</p>
                                        </div>

                                        <div className='p-3'>
                                            <ul className='list-disc'>
                                                {
                                                    item?.bulletPoints
                                                        ?.map(item => <li key={item.id}>{item}</li>)
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Timeline;