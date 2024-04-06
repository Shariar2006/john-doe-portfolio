'use client'
import React from 'react';
import './sidebar.css'
import {motion} from 'framer-motion'
// import audio from "../../../../public/audio.mp3"
import {useSound} from 'use-sound';

const ToggleButton = ({ setOpen }) => {
    const [playClick] = useSound('@/public/audio.mp3');

    const toggle = () =>{
        playClick()
        setOpen((perv) => !perv)
    }

    return (
        <div>
            <button className='btn' onClick={toggle}>

                <svg width='23' height='23' viewBox='0 0 23 23'>
                    <motion.path strokeWidth='3' stroke='black' color='black' strokeLinecap='round' variants={{
                        closed: {d: "M 2 2.5 L 20 2.5"},
                        open: {d: "M 3 16.5 L 17 2.5"}
                    }} />
                    <motion.path strokeWidth='3' stroke='black' color='black' strokeLinecap='round' d='M 2 9.423 L 20 9.423' variants={{
                        closed: {opacity: 1},
                        open: {opacity: 0}
                    }}/>
                    <motion.path strokeWidth='3' stroke='black' color='black' strokeLinecap='round' variants={{
                        closed: {d: "M 2 16.346 L 20 16.346"},
                        open: {d: "M 3 2.5 L 17 16.346"}
                    }} />
                </svg>

            </button>
        </div>
    );
};

export default ToggleButton;