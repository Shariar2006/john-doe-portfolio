import React from 'react';
import './sidebar.css'


const Links = () => {
    const items = [
        {
            id: 1,
            route: "HomePage",
            path: '/'
        },
        {
            id: 2,
            route: "About",
            path: '/#about'
        },
        {
            id: 3,
            route: "Skills",
            path: '/skill'
        },
        {
            id: 4,
            route: "Services",
            path: '/service'
        },
        {
            id: 5,
            route: "Projects",
            path: '/project'
        },
        {
            id: 1,
            route: "Contact",
            path: '/contact'
        },
    ]
    return (
        <div className='links'>
            {items.map((item) => 
                <a className='text-4xl' href={item?.path}  key={item?.id}>
                    <h1>{item?.route}</h1>
                </a>
            )}
        </div>
    );
};

export default Links;