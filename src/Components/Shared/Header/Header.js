import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
// import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';
import { SearchBar1 } from './components/SearchBar';
import { SearchResultsList } from './components/SearchResultsList';

const Header = () => {

    const [results, setResults] = useState([]);

    return (
        <div>
            <div className="navbar bg-gray-900 px-32 py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Item 1</Link></li>
                            <li tabIndex={0}>
                                <Link className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </Link>
                                <ul className="p-2">
                                    <li><Link>Submenu 1</Link></li>
                                    <li><Link>Submenu 2</Link></li>
                                </ul>
                            </li>
                            <li>
                                <div className="form-control">
                                    <input type="text" placeholder="Search" className="input input-bordered" />
                                </div>
                            </li>
                            <li><Link>Item 3</Link></li>
                        </ul>
                    </div>
                    <Link to='/'>
                        <div className='logo-container'>
                            <p className="logo text-black">Film<span className='text-white'>ooR</span></p>
                        </div>
                    </Link>
                </div>

                {/* Searchbar */}

                <div className=' flex-col w-full relative items-stretch'>
                    <SearchBar1 setResults={setResults} />
                    {results && results.length > 0 && <SearchResultsList results={results}/>}
                </div>         

                <div className="navbar-end">

                    <Link className='text-white font-bold hover:text-gray-400 hover:border-2 border-gray-400 px-4 py-2 rounded-xl flex'>
                        <FontAwesomeIcon className='mt-1' icon={faBookmark} />
                        <p className='ml-3 font-bold'>Watchlist</p>
                    </Link>
                    <Link to='/signin' className="text-white font-bold hover:text-gray-400 hover:border-2 border-gray-400 px-4 py-2 rounded-xl">Sign In</Link>                                

                </div>
            </div>
        </div>
    );
};

export default Header;