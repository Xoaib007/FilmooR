import React, { useState } from 'react';
import Section from '../../../Components/Reusable/Section';
import MovieList from '../../../Components/Reusable/MovieList';

const HomePage = () => {
    const [selected, setSelected] = useState({
        first: 'In Theatre',
        second: 'On TV',
        third: 'Today',
        forth: 'This Week',
        fifth: 'Movies',
        sixth: 'TV Show'
    });

    const handleToggle = (section, selected) => {
        setSelected(prev => ({
            ...prev,
            [section]: selected
        }));
    }

    return (
        <div className='min-h-screen mx-32'>
            <Section title='Whats Popular' items={['In Theatre','On TV']} onToggle={handleToggle.bind(null, 'first')} isToggled={selected.first === 'In Theatre' ? false : true}>
                <MovieList fetch={selected.first} />
            </Section>

            <Section title='Trending Now' items={['Today', 'This Week']} onToggle={handleToggle.bind(null, 'third')} isToggled={selected.third === 'Today' ? false : true}>
                <MovieList fetch={selected.third} />
            </Section>

            <Section title='Top Rated' items={['Movies','TV Show']} onToggle={handleToggle.bind(null, 'fifth')} isToggled={selected.fifth === 'Movies' ? false : true}>
                <MovieList fetch={selected.fifth} />
            </Section>
        </div>


    );
};

export default HomePage;