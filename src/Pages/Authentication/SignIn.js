import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const SignIn = () => {
    return (
        <div className='min-h-screen text-white mx-60 mt-5'>
                <div class="p-8 lg:w-1/2 mx-auto">
                    <div class="bg-white rounded-t-lg p-8">
                        <p class="text-center text-sm text-gray-400 font-light">Sign in with</p>
                        <div>
                            <div class="flex items-center justify-center space-x-4 mt-3">
                                <button class="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"          >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="w-6 h-6 mr-3">
                                        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                                    </svg>
                                    Github
                                </button>
                                <button class="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
                                    <FontAwesomeIcon className='mt-1' icon={faGoogle} />
                                    Google
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
                        <p class="text-center text-sm text-gray-500 font-light">Or sign in with credentials</p>
                        <form class="mt-6">
                            <div class="relative mt-3">
                                <input class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" id="username" type="text" placeholder="Email" />
                                <div class="absolute left-0 inset-y-0 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor"            >
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </div>
                            </div>
                            <div class="relative mt-3">
                                <input class="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline" id="username" type="text" placeholder="Password" />
                                <div class="absolute left-0 inset-y-0 flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 ml-3 text-gray-400 p-1" viewBox="0 0 20 20" fill="currentColor"            >
                                        <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />
                                    </svg>
                                </div>
                            </div>
                            <div class="flex items-center justify-center mt-8">
                                <button class="text-white py-2 px-4 uppercase rounded bg-yellow-300 hover:bg-yellow-400 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">Sign In</button>
                            </div>

                            <p className='text-gray-400 pt-5'>Not yet registered?<Link to='/signup' className='text-yellow-400 underline hover:text-yellow-300'>Sign up here</Link></p>

                        </form>
                    </div>
                </div>
        </div>
    );
};

export default SignIn;