import React from 'react'

export default function Navbar() {
    return (
        <nav className="bg-transparent w-full mb-2">
            <div className="flex h-16">

                <div className="flex justify-start items-center">
                    <img src="logo.png" alt="Logo" className="h-16 mt-2 ml-2" />
                </div>


                <div className="hidden md:flex space-x-8 ml-40 items-center">
                    <a href="" className="text-gray-800 hover:text-gray-600 hover:underline hover:underline-offset-8">Home</a>
                    <div className="relative group">
                        <a href="#" className="text-gray-800 hover:text-gray-600 hover:underline hover:underline-offset-8">Products</a>
                        <div className="absolute hidden group-hover:block bg-white shadow-lg top-full left-0 w-96 mt-2 z-10">
                            <div className="p-6 grid grid-cols-2 gap-4">
                                <div>
                                    <img src="hair.png" alt="hair" className="h-16 mt-2" />
                                    <h3 className="text-lg font-semibold text-gray-800">Hair Care</h3>
                                    <ul>
                                        <li><a href="#" className="block mt-2 text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-8">Shampoo</a></li>
                                        <li><a href="#" className="block mt-2 text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-8">Conditioner</a></li>
                                        <li><a href="#" className="block mt-2 text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-8">Hair Spray</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <img src="skin.png" alt="skin" className="h-16 mt-2" />
                                    <h3 className="text-lg font-semibold text-gray-800">Skin Care</h3>
                                    <ul>
                                        <li><a href="#" className="block mt-2 text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-8">Creams</a></li>
                                        <li><a href="#" className="block mt-2 text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-8">Lotions</a></li>
                                        <li><a href="#" className="block mt-2 text-gray-600 hover:text-gray-800 hover:underline hover:underline-offset-8">Gels</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="text-gray-800 hover:text-gray-600 hover:underline hover:underline-offset-8">Sale</a>
                    <a href="#" className="text-gray-800 hover:text-gray-600 hover:underline hover:underline-offset-8">About</a>
                </div>

                <div className="flex ml-auto mt-2 justify-end lg:hidden">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">Home</a>
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">Products</a>
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">Sale</a>
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">About</a>
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">Favourites</a>
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">Shopping Cart</a>
                            <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-200">Manage Account</a>
                        </ul>
                    </div>
                </div>

                <div className="hidden lg:flex justify-end items-center ml-[450px]">
                    <label className="input input-bordered border-2 border-black flex items-center gap-2 text-black focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 focus-within:border-blue-500">
                        <input type="text" className="grow placeholder:text-black" placeholder="Search for products" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                        </svg>
                    </button>
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="m-3 lg:hidden">
                <label className="input input-bordered border-2 border-black flex items-center gap-2 text-black">
                        <input type="text" className="grow placeholder:text-black" placeholder="Search for products" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                </div>
        </nav>
    )
}
