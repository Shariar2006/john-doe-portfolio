import React, { useEffect, useState } from 'react';
import Title from '../shared/Title';
import { EB_Garamond } from '@next/font/google';
import Skill from './Skill';
import { motion } from 'framer-motion'

const EBGaramond = EB_Garamond({ subsets: ['latin'] });

const Skills = () => {

    const [skillsData, setSkillsData] = useState(null);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => setSkillsData(data?.user?.skills));
    }, []);

    const filteredSkillsData = skillsData?.filter(item => item.enabled === true);

    return (
        <div style={EBGaramond.style} className='p-20 min-h-screen'>
            <Title header='PROFESSIONAL SKILLS' subTitle='MY Talent' />

            <div className=''>
                <motion.div className='w-[780px] mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-5' >
                    {filteredSkillsData && filteredSkillsData.length > 0 ? (
                        filteredSkillsData.map((skill, index) => (
                            <Skill key={skill?.name} skill={skill} index={index}></Skill>
                        ))
                    ) : (
                        <p>No data available.</p>
                    )}
                </motion.div>
            </div>
        </div>
    );
};

export default Skills;