import React, { useLayoutEffect, useRef, useState } from 'react';

const Switch = ({items, onToggle}) => {
    const [isToggled, setToggle]= useState(false);

    const [item1Width , setItem1Width]= useState();
    const [item2Width , setItem2Width]= useState();
    const item1Ref =useRef();
    const item2Ref = useRef();

    useLayoutEffect(()=>{
        setItem1Width(item1Ref.current.offsetWidth)
        setItem2Width(item2Ref.current.offsetWidth)
    },[])

    const activeText = 'text-black'

    onToggle(isToggled?items[1]:items[0])

    return (
        <div className='flex items-center h-8 border-solid border-blue-900 rounded-3xl text-white font-semibold border-2 relative z-[1]'>
            <div ref={item1Ref} onClick={()=>setToggle(false)} className={`h-8 py-1 px-5 rounded-3xl cursor-pointer ${isToggled || activeText}`}>{items[0]}</div>

            <div ref={item2Ref} onClick={()=>setToggle(true)} className={`h-8 py-1 px-5 rounded-3xl cursor-pointer ${isToggled && activeText}`}>{items[1]}</div>

            <div className='h-8 w-24 rounded-3xl bg-yellow-400 absolute z-[-1] transition-all duration-200 ease-in' style={
                isToggled ?{
                    left: `${item1Width+2}px`,
                    width: `${item2Width+2}px`
                }
                :
                {
                    left: '-1px',
                    width: `${item1Width}px`
                }
            }></div>
        </div>
    );
};

export default Switch;