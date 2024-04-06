import React, { useEffect, useState } from 'react';
import Title from '../shared/Title';

const Timeline = () => {

    const [servicesData, setServicesData] = useState(null);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => setServicesData(data?.user?.timeline));
    }, []);



    return (
        <div className='min-h-screen'>
            <Title header='RESUME' subTitle='MY Story' />

            <div className='mt-10'>
                <div className=' mx-auto' >
                    {servicesData && servicesData.length > 0 ? (
                        servicesData.map((service, index) => (
                            <div key={service?._id} className={service?.forEducation === true ? 'left-0' : 'left-1/2'}>
                                <div className='w-[500px] h-64 bg-white mt-5'>
{service?.jobTitle}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No data available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Timeline;