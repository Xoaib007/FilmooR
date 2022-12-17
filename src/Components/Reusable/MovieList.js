import React from 'react';
import MovieCard from './MovieCard';

const MovieList = () => {
    const movies= [
        {
            title: 'Wednesday',
            released: '2022',
            imageUrl: 'https://image.tmdb.org/t/p/w220_and_h330_face/9PFonBhy4cQy7Jz20NpMygczOkv.jpg'
        },
        {
            title: 'Wednesday',
            released: '2022',
            imageUrl: 'https://image.tmdb.org/t/p/w220_and_h330_face/9PFonBhy4cQy7Jz20NpMygczOkv.jpg'
        },
        {
            title: 'Wednesday',
            released: '2022',
            imageUrl: 'https://image.tmdb.org/t/p/w220_and_h330_face/9PFonBhy4cQy7Jz20NpMygczOkv.jpg'
        },
        {
            title: 'Wednesday',
            released: '2022',
            imageUrl: 'https://image.tmdb.org/t/p/w220_and_h330_face/9PFonBhy4cQy7Jz20NpMygczOkv.jpg'
        },
        {
            title: 'Wednesday',
            released: '2022',
            imageUrl: 'https://image.tmdb.org/t/p/w220_and_h330_face/9PFonBhy4cQy7Jz20NpMygczOkv.jpg'
        },
        {
            title: 'Wednesday',
            released: '2022',
            imageUrl: 'https://image.tmdb.org/t/p/w220_and_h330_face/9PFonBhy4cQy7Jz20NpMygczOkv.jpg'
        },
        {
            title: 'Wednesday',
            released: '2022',
            imageUrl: 'https://image.tmdb.org/t/p/w220_and_h330_face/9PFonBhy4cQy7Jz20NpMygczOkv.jpg'
        },
        {
            title: 'Wednesday',
            released: '2022',
            imageUrl: 'https://image.tmdb.org/t/p/w220_and_h330_face/9PFonBhy4cQy7Jz20NpMygczOkv.jpg'
        },
        {
            title: 'Wednesday',
            released: '2022',
            imageUrl: 'https://image.tmdb.org/t/p/w220_and_h330_face/9PFonBhy4cQy7Jz20NpMygczOkv.jpg'
        },
        {
            title: 'Wednesday',
            released: '2022',
            imageUrl: 'https://image.tmdb.org/t/p/w220_and_h330_face/9PFonBhy4cQy7Jz20NpMygczOkv.jpg'
        },
        {
            title: 'Wednesday',
            released: '2022',
            imageUrl: 'https://image.tmdb.org/t/p/w220_and_h330_face/9PFonBhy4cQy7Jz20NpMygczOkv.jpg'
        },
        
    ]
    return (
        <div className='flex gap-7 overflow-x-auto'>
        {
            movies?.map((movie, i)=>
                <MovieCard key={i} title={movie.title} released={movie.released} imageUrl={movie.imageUrl} />
            )
        }
            
        </div>
    );
};

export default MovieList;