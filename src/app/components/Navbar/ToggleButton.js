import React from 'react';
import './sidebar.css'

const ToggleButton = ({setOpen}) => {
    return (
        <div>
            <button className='btn' onClick={() => setOpen((perv) => !perv)}>button</button>
        </div>
    );
};

export default ToggleButton;