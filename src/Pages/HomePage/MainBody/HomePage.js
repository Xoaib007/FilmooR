import React, { useState } from 'react';
import Section from '../../../Components/Reusable/Section';
import MovieList from '../../../Components/Reusable/MovieList';

const HomePage = () => {
    const [selected, setSelected] = useState('');

    const handleToggle = (selected) => {

    }

    return (
        <div className='min-h-screen px-32'>
            <Section title='Whats New' items={['on TV', 'in theatre']} onToggle={handleToggle}>
                <MovieList selected={selected} />
            </Section>
        </div>


    );
};

export default HomePage;