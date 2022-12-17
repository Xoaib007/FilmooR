import React, { useState } from 'react';
import Section from '../../../Components/Reusable/Section';
import MovieList from '../../../Components/Reusable/MovieList';

const HomePage = () => {
    const [selected, setSelected] = useState('');
    
    const handleToggle = (selected) =>{
        if(selected === 'in theatre'){
            setSelected('/tv')
        }
        if(selected === 'on TV'){
            setSelected('/movie')
        } 
    }

    return (
        <div className='min-h-screen px-32'>
            <Section title='Whats New' items={['on TV', 'in theatre']} onToggle={handleToggle}>
                <MovieList selected={selected}/>
            </Section>
        </div>
    );
};

export default HomePage;