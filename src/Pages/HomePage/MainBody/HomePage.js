import React from 'react';
import Section from '../../../Components/Reusable/Section';
import MovieList from '../../../Components/Reusable/MovieList';

const HomePage = () => {
    const handleToggle = (selected) =>{
        console.log(selected)
    }

    return (
        <div className='min-h-screen px-32'>
            <Section title='Whats New' items={['on TV', 'in theatre']} onToggle={handleToggle}>
                <MovieList/>
            </Section>
        </div>
    );
};

export default HomePage;