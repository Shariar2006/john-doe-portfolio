'use client'
import React, { useEffect, useState } from 'react';
import Title from '../shared/Title';
import ProjectCard from './ProjectCard';

const Projects = () => {

    const [projectsData, setProjectsData] = useState(null);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => setProjectsData(data?.user?.projects));
    }, []);

    const filteredProjectsData = projectsData?.filter(item => item.enabled === true);

    return (
        <div className='min-h-screen'>
            <Title header='PORTFOLIO' subTitle='MY Cases' />

            <div className='mt-10'>
                <div className='w-[990px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' >
                    {filteredProjectsData && filteredProjectsData.length > 0 ? (
                        filteredProjectsData.map((project, index) => (
                            <ProjectCard key={project?._id} project={project} index={index}></ProjectCard>
                        ))
                    ) : (
                        <p>No data available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Projects;