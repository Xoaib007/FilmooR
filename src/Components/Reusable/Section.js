import React from 'react';
import Switch from './Switch';

const Section = ({title, items}) => {
    return (
        <div className='flex gap-5 items-center pt-10 px-5'>
            <p className='text-xl text-white'>{title}</p>
            <Switch items={items}/>
        </div>
    );
};

export default Section;