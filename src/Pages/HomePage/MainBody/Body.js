import React from 'react';
import Section from '../../../Components/Reusable/Section';

const Body = () => {
    return (
        <div className='border-2 border-red-600 col-span-2'>
            <Section title='Whats New' items={['on TV', 'in theatre']}/>
        </div>
    );
};

export default Body;