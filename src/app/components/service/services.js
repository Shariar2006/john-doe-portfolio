import React, { useEffect, useState } from 'react';
import Title from '../shared/Title';
import Service from './Service';

const Services = () => {

    const [servicesData, setServicesData] = useState(null);

    useEffect(() => {
        fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae')
            .then(res => res.json())
            .then(data => setServicesData(data?.user?.services));
    }, []);

    const filteredServicesData = servicesData?.filter(item => item.enabled === true);

    console.log(filteredServicesData)


    return (
        <div className='min-h-screen'>
            <Title header='WHAT I DO' subTitle='MY Services' />

            <div className='mt-10'>
                <div className='w-[950px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' >
                    {filteredServicesData && filteredServicesData.length > 0 ? (
                        filteredServicesData.map((service, index) => (
                            <Service key={service?._id} service={service} index={index}></Service>
                        ))
                    ) : (
                        <p>No data available.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Services;