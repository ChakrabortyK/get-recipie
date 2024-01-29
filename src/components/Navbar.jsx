import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { GlobalContext } from '../context';
import { Input, Button } from "@material-tailwind/react";
import LinearProgress from '@mui/material/LinearProgress';




const Navbar = () => {

    const { searchParams, setsearchParams, handleSubmit, loading } = useContext(GlobalContext)


    return (
        <>
            <nav className="flex justify-between rounded-full items-center px-5  container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
                <h2 className='text-2xl font-semibold'>HOME
                    {/* <NavLink
                    to="/"
                    className="text-black hover:text-gray-700 duration-300"

                >
                    Heading Home
                </NavLink> */}
                </h2>
                <form className='relative flex w-full max-w-[24rem]' onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name='search'
                        placeholder='enterItems'
                        value={searchParams}
                        onChange={(e) => { setsearchParams(e.target.value) }}
                        className='bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-300'
                    />

                </form>

                <ul className='flex gap-8'>
                    <li>
                        <NavLink
                            to="/"
                            className="text-black hover:text-gray-700 duration-300"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/favorites"
                            className="text-black hover:text-gray-700 duration-300"
                        >
                            Favorites
                        </NavLink>
                    </li>


                </ul>

            </nav>
            {loading && <LinearProgress className='my-3' color="inherit" />}
        </>
    )
}

export default Navbar