import React from 'react';
import Switch from './Switch';

const Section = ({ title, items, onToggle, children , isToggled}) => {
    return (
        <div className=' px-5'>
            <div className='flex gap-5 items-center pt-10'>
                <p className='text-2xl text-white'>{title}</p>
                <Switch items={items} onToggle={onToggle} isToggled={isToggled}/>
            </div>
            <div className='pt-5'>
                {children}
            </div>
        </div>
    );
};

export default Section;