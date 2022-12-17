import React from 'react';
import Body from './MainBody/Body';
import Sidebar from './Sidebar';

const HomePage = () => {
    return (
        <div  className='min-h-screen mx-32 mt-5 grid grid-cols-3 gap-7'>
            <Body/>
            <Sidebar/>
        </div>
    );
};

export default HomePage;