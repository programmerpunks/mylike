import { useState } from "react";

import { navContent } from "../../assets/navbar/content";
const logo = require("../../assets/navbar/images/logo.png");

const Navbar = ({
    connection,
    disconnect,
    getTokens,
    logout,
    readContract,
    wallet,
}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        // Here you could use a state management library like Redux or React Context API to update the global app theme
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 px-1 xl:px-64 lg:px-28 backdrop-filter ${isMobileMenuOpen ? 'bg-black' : 'bg-transparent'}`}>
            <div className="flex justify-between items-center p-4 bg-transparent">
                <div className="flex items-center space-x-4">
                    <div className="md:hidden">
                        <button
                            className="text-white text-2xl focus:outline-none"
                            onClick={toggleMobileMenu}
                        >
                            &#8801;
                        </button>
                    </div>
                    <img src={logo} width={175} height={40} alt="Logo" className="h-8" />
                    <ul className="hidden md:flex items-center space-x-6 mt-2">
                        <li>
                            <a href="#About">{navContent.title1}</a>
                        </li>
                        <li>
                            <a href="#Mint">{navContent.title2}</a>
                        </li>
                        <li>
                            <a href="#MEDIA">{navContent.title3}</a>
                        </li>
                        <li>
                            <a href="#NEWS">{navContent.title4}</a>
                        </li>
                        <li>
                            <a href="#FAQ">{navContent.title5}</a>
                        </li>
                    </ul>
                </div>
                <div className="hidden md:flex items-center space-x-4 text-white">
                    {/* <button
                        className="bg-transparent border-2 border-white py-2 px-4 rounded-lg"
                        onClick={toggleDarkMode}
                    >
                        {isDarkMode ? "Light" : "Dark"} Mode
                    </button> */}
                    <button
                        onClick={async () => {
                            logout
                                ? (async function () {
                                    await disconnect();
                                })()
                                : (async function () {
                                    await connection();
                                    await readContract();
                                    await getTokens();
                                })();
                        }}
                        className={`flex border-[1px] p-1 hover:scale-125 duration-700 rounded-2xl px-2 justify-center mt-5 text-white bg-transparent cursor-pointer ${logout ? "hover:before:content-['Disconnect:']" : ""
                            }`}
                    >
                        {wallet}
                    </button>
                </div>
            </div>
            <div
                className={`${isMobileMenuOpen ? "block" : "hidden"
                    } md:hidden text-white p-4`}
            >
                <ul className="flex flex-col space-y-2">
                    <li>
                        <a href="#About">{navContent.title1}</a>
                    </li>
                    <li>
                        <a href="#Mint">{navContent.title2}</a>
                    </li>
                    <li>
                        <a href="#MEDIA">{navContent.title3}</a>
                    </li>
                    <li>
                        <a href="#NEWS">{navContent.title4}</a>
                    </li>
                    <li>
                        <a href="#FAQ">{navContent.title5}</a>
                    </li>
                    <li>
                        {/* <button
                            className="bg-transparent border-2 border-white py-2 px-4 rounded-lg"
                            onClick={toggleDarkMode}
                        >
                            {isDarkMode ? "Light" : "Dark"} Mode
                        </button> */}
                    </li>
                    <li>
                        <button
                            onClick={async () => {
                                logout
                                    ? (async function () {
                                        await disconnect();
                                    })()
                                    : (async function () {
                                        await connection();
                                        await readContract();
                                        await getTokens();
                                    })();
                            }}
                            className={`flex border-[1px] p-1 hover:scale-125 duration-700 rounded-2xl px-2 justify-center mt-5 text-white bg-transparent cursor-pointer ${logout ? "hover:before:content-['Disconnect:']" : ""
                                }`}
                        >
                            {wallet}
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;