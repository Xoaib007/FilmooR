import React, { useState } from 'react';
import Section from '../../../Components/Reusable/Section';
import MovieList from '../../../Components/Reusable/MovieList';

const HomePage = () => {
    const [selected, setSelected] = useState({
        first: 'On TV',
        second: 'On TV',
        third: 'Today',
        forth: 'This Week',
        fifth: 'TV Show',
        sixth: 'Movies'
    });

    const handleToggle = (section, selected) => {
        setSelected(prev => ({
            ...prev,
            [section]: selected
        }));
    }

    // const [selectedTrending, setSelectedTrending] = useState({
    //     first: 'Day',
    //     second: 'Week',
    //     third: 'Today'
    // });

    // const handleToggle2 = (section, selected) => {
    //     setSelectedTrending(prev => ({
    //         ...prev,
    //         [section]: selected
    //     }));
    // }

    // const [selectedTopRated, setSelectedTopRated] = useState({
    //     first: 'TV Show',
    //     second: 'Movies',
    //     third: 'Today'
    // });

    return (
        <div className='min-h-screen mx-32'>
            <Section title='Whats Popular' items={['On TV', 'In Theatre']} onToggle={handleToggle.bind(null, 'first')} isToggled={selected.first === 'On TV' ? false : true}>
                <MovieList fetch={selected.first} />
            </Section>

            <Section title='Trending Now' items={['Today', 'This Week']} onToggle={handleToggle.bind(null, 'third')} isToggled={selected.third === 'Today' ? false : true}>
                <MovieList fetch={selected.third} />
            </Section>

            <Section title='Top Rated' items={['TV Show', 'Movies']} onToggle={handleToggle.bind(null, 'fifth')} isToggled={selected.fifth === 'TV Show' ? false : true}>
                <MovieList fetch={selected.fifth} />
            </Section>
        </div>


    );
};

export default HomePage;