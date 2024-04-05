import React from 'react';

const Title = ({ header, subTitle }) => {
    return (
        <div className='text-center text-gray-200'>
            <h1 className='text-3xl'>{header}</h1>
            <div className='relative w-48 mx-auto my-4'>
                <h3 className='border-t border-white'></h3>
                <h3 className='text-lg absolute -mt-6 ml-16 bg-[#121212] p-2'>John Doe</h3>
            </div>
            <h3 className='text-xl'>{subTitle}</h3>
        </div>
    );
};

export default Title;