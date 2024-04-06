import React from 'react';
import './service.css'
import Image from 'next/image';
import {motion} from "framer-motion"

const Service = ({ service, index }) => {
    return (
        <motion.div    
            initial={{ opacity: 0, y: 40, x: -40 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            transition={{
                delay: index * 0.2,
                ease: [0.25, 0.25, 0.25, 0.75]
            }}
            viewport={{ once: false, amount: 0.7 }}
        >
            <div class="card">
                <Image src={service?.image?.url} width={300} height={200} alt='service image'></Image>
                <div class="card__content">
                    <p class="card__title">{service?.name}
                    </p><p class="card__description">{service?.desc}</p>
                    <p className='text-end text-gray-500 font-semibold'>{service?.charge}</p>
                </div>
            </div>

        </motion.div>
    );
};

export default Service;