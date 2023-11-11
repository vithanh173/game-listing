import React, { useContext, useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { HiOutlineSearch, HiMoon, HiSun, HiMenu } from 'react-icons/hi';
import { ThemeContext } from '../Context/ThemeContext';
import { HeaderContext } from '../Context/HeaderContext';

function Header() {

    const { theme, setTheme } = useContext(ThemeContext);
    const { setSearchInput, modalOpen, setModalOpen } = useContext(HeaderContext);

    return (
        <div className="flex items-center p-3 bg-slate-100 dark:bg-slate-800 z-10 md:z-99">
            <img src={logo} alt="" width={100} height={60} className="hidden md:block" />
            <HiMenu className="block md:hidden text-slate-800 dark:text-slate-200 text-4xl relative"
                onClick={() => setModalOpen(!modalOpen)} />
            <div className="flex bg-slate-800 text-slate-200 p-2 w-full mx-5 rounded-full items-center dark:bg-slate-100 dark:text-slate-800">
                <HiOutlineSearch />
                <input type="text"
                    placeholder="Search Game"
                    className="px-2 bg-transparent w-full outline-none"
                    onChange={(e) => setSearchInput(e.target.value)} />
            </div>
            <div>
                {theme === "light"
                    ? <HiMoon className="text-[35px] bg-slate-800 text-slate-200 p-1 rounded-full cursor-pointer"
                        onClick={() => { setTheme("dark"); localStorage.setItem("theme", "dark") }} />
                    : <HiSun className="text-[35px] bg-slate-100 text-black p-1 rounded-full cursor-pointer"
                        onClick={() => { setTheme("light"), localStorage.setItem("theme", "light") }} />}
            </div>
        </div>
    )
}

export default Header
