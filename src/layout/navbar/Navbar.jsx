import React, { useState } from "react";
import { Link } from "react-router-dom";


import CloseIcon from '../../components/icons/close-icon';
import MovieIcon from "../../components/icons/movie-icon";
import SearchIcon from "../../components/icons/search-icon";
import BurgerIcon from "../../components/icons/burger-icon";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <button
                className={`close-btn absolute z-[1000001] right-[10px] top-[20px] border-none bg-[rgba(193,194,196,0.1)] p-[5px] rounded-md ${isMenuOpen ? "block" : "hidden"}`}
                onClick={toggleMenu}
            >
                <CloseIcon />
            </button>

            <ul
                className={`absolute top-0 h-[100vh] pt-[50px] z-[100000] gap-[10px] text-white font-poppins items-center flex-col text-[20px] w-full bg-black transition-all duration-300 ${isMenuOpen ? "flex" : "hidden"}`}
            >
                <li className="hover:text-main"><Link to="/">Barchasi</Link></li>
                <li className="hover:text-main"><Link to="/kinolar">Kinolar</Link></li>
                <li className="hover:text-main"><Link to="/multfilmar">Multfilmar</Link></li>
            </ul>

            <nav className="navbar bg-transparent py-[20px]">
                <div className="navbar-child z-0 flex items-center justify-between max-w-[1200px] px-[10px] first:px-[0px] mx-auto">
                    <div className="navbar-left flex items-center gap-[30px]">
                        <Link to="/" className="flex items-center gap-[5px]">
                            <MovieIcon />
                            <span className="text-[#fff] font-poppins text-[28px] font-bold">
                                Kinobiz
                            </span>
                        </Link>

                        <ul className="hidden nav-list items-center gap-[20px] text-white font-poppins second:flex">
                            <li className="hover:text-main transition-colors"><Link to="/">Barchasi</Link></li>
                            <li className="hover:text-main"><Link to="/kinolar">Kinolar</Link></li>
                            <li className="hover:text-main"><Link to="/multfilmar">Multfilmar</Link></li>
                        </ul>
                    </div>

                    <div className="navbar-right flex items-center gap-[8px]">
                        <button
                            className="border-none bg-[rgba(193,194,196,0.1)] p-[8px] w-[100px] text-white font-poppins rounded-md font-medium"
                        >
                            Aloqa
                        </button>
                        <button
                            className="border-none bg-[rgba(193,194,196,0.1)] p-[5px] rounded-md"
                        >
                            <SearchIcon />
                        </button>
                        <button
                            className="border-none second:hidden block bg-[rgba(193,194,196,0.1)] p-[5px] rounded-md"
                            onClick={toggleMenu}
                        >
                            <BurgerIcon />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
