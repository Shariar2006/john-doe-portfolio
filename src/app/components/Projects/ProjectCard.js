'use client'
import React from 'react';
import './project.css'
import Image from 'next/image';
import {motion} from "framer-motion"
import Link from 'next/link';

const ProjectCard = ({project, index}) => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 40, x: 40 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{
                delay: index * 0.2,
                ease: [0.25, 0.25, 0.25, 0.75]
            }}
            viewport={{ once: false, amount: 0.7 }}
        >
            <div class="card2">
            <Image className='h-full' src={project?.image?.url} width={300} height={200} alt='service image'></Image>
                <div class="card_content">
                    <p class="card_title">{project?.title}</p>
                    <p class="card_description">{project?.description}</p>
                    <p className='text-gray-700 mb-2'>Tech Stack: {project?.techStack}</p>
                    <Link href={`${project?.liveurl}project`}><button class="card_button mr-2">Live Demo</button></Link>
                    <Link href={`${project?.liveurl}project`}><button class="card_button secondary">Source Code</button></Link>
                </div>
            </div>

        </motion.div>
    );
};

export default ProjectCard;