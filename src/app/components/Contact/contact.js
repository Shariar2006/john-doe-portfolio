import React from 'react';
import Title from '../shared/Title';

const Contact = () => {
    return (
        <div className='min-h-screen mt-16'>
            <Title header='CONTACT ME' subTitle='LET’S Talk About Ideas' />

            <div>
                <div className="p-8  rounded-lg flex flex-col gap-2 w-full lg:w-1/2 ">
                    <input
                        type="text"
                        placeholder="Enter your Name"
                        className="w-full p-2 mb-2 rounded-md border border-white bg-none outline-none "
                    />
                    <input
                        type="email"
                        placeholder="Enter a valid email address"
                        className="w-full p-2 mb-4 rounded-md border border-white bg-none outline-none "
                    />
                    <textarea className="p-2" name="messege" placeholder="Write Your Message here..." id="" cols="30" rows="11"></textarea>

                    <button className="inline-block border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-black transition duration-700 ease-in-out font-bold ">
                        SUBMIT
                    </button>

                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Contact;