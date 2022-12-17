import React, { useState } from 'react';

const Switch = ({items}) => {
    const [isToggled, setToggle]= useState(false);

    const activeText = 'text-black'


    return (
        <div className='flex items-center h-8 border-solid border-blue-900 rounded-3xl text-white font-semibold border-2 relative z-[1]'>
            <div onClick={()=>setToggle(false)} className={`h-8 py-1 px-5 rounded-3xl cursor-pointer ${isToggled || activeText}`}>{items[0]}</div>
            <div  onClick={()=>setToggle(true)} className={`h-8 py-1 px-5 rounded-3xl cursor-pointer ${isToggled && activeText}`}>{items[1]}</div>
            <div className='h-8 w-24 rounded-3xl bg-yellow-400 absolute z-[-1] transition-all duration-200 ease-in' style={
                isToggled ?{
                    left: '80px',
                    width: '120px'
                }
                :
                {
                    left: '0px',
                    width: '80px'
                }
            }></div>
        </div>
    );
};

export default Switch;