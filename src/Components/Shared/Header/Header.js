import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <div className="navbar bg-gray-900 px-32 py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                    Parent
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li>
                                <div className="form-control">
                                    <input type="text" placeholder="Search" className="input input-bordered" />
                                </div>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <Link to='/'>
                        <div className='logo-container'>
                            <p className="logo text-black">Film<span className='text-white'>ooR</span></p>
                        </div>
                    </Link>
                </div>

                <SearchBar />

                <div className="navbar-end">

                    <div className='mr-10 h-8 p-2 rounded-sm btn'>
                        <FontAwesomeIcon icon={faBookmark} />
                        <p className='ml-3 font-bold'>Watchlist</p>
                    </div>
                    <a className="btn">Get started</a>


                </div>
            </div>
        </div>
    );
};

export default Header;