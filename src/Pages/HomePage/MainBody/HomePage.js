import React, { useState } from 'react';
import Section from '../../../Components/Reusable/Section';
import MovieList from '../../../Components/Reusable/MovieList';

const HomePage = () => {
    const [selected, setSelected] = useState({
        first: 'On TV',
        second: 'On TV',
        third: 'Today'
    });

    const handleToggle = (section, selected) => {
        setSelected(prev=>({
            ...prev,
               [section]: selected
        }));
    }

    return (
        <div className='min-h-screen px-32'>
            <Section title='Whats New' items={['On TV', 'in theatre']} onToggle={handleToggle.bind(null, 'first')} isToggled={selected.first==='On TV'?false:true}>
                <MovieList />
            </Section>
        </div>


    );
};

export default HomePage;