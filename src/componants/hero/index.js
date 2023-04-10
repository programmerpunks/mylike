import { FaTelegramPlane } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

import { links } from '../../assets/hero/content';

const blockchainlogo1 = require("../../assets/hero/images/blockchainlogo1.png");
const blockchainlogo2 = require("../../assets/hero/images/blockchainlogo2.png");
const buttonlogo1 = require("../../assets/hero/images/buttonlogo1.png");
const buttonlogo2 = require("../../assets/hero/images/buttonlogo2.png");
const buttonlogo3 = require("../../assets/hero/images/buttonlogo3.png");
const buttonlogo4 = require("../../assets/hero/images/buttonlogo4.png");
const heroRightSection = require("../../assets/hero/images/hero-right-section.png");
const playbutton = require("../../assets/hero/images/playbutton.png");

const Hero = () => {
    return (
        <div className='bg-[#212429] bg-grid-img h-screen w-screen bg-section md:px-[15%] px-[5%]'>
            <div className='xl:pt-72 lg:pt-60 md:pt-40 pt-24'>
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:gap-80 xl:gap-30 lg:gap-20 md:gap-10 sm:gap-10 gap-4">
                    <div className=" ">
                        <p className="text-[#E85D21] italic">Presented by FTVIO</p>
                        <p className="text-5xl mt-2 font-bold">Mylike</p>
                        <p className="text-lg my-5 font-bold">Fashionable and profitable</p>
                        <div className="flex items-center mt-5">
                            <button className="bg-[#7F4CBD] text-white text-sm  px-4 py-2 rounded-md mr-2">
                                <a href={links.contract} target='_blank' rel="noreferrer">Contract</a>
                            </button>
                            <button className="border-2 mx-2 text-sm border-[#7F4CBD] rounded-md hover:bg-[#7F4CBD] hover:border-[#7F4CBD] hover:text-white text-[#7F4CBD] font-medium py-2 px-4">
                                <a href={links.whitepaper} target='_blank' rel="noreferrer">Whitepaper</a>
                            </button>
                            <button>
                                <a href={links.video} target='_blank' rel="noreferrer"><img src={playbutton} className="w-20 h-20" alt="playbutton" /></a>
                            </button>
                        </div>
                        <p className="text-lg mt-3 mb-2 font-bold">How to buy STYL</p>
                        <div className="block md:flex items-center yellow-shade">
                            <button className="hover:bg-yellow-500 rounded-full hover:border-[#E0D046] border-2 px-2 py-2 transition duration-300 bg-[#E0D046] border-transparent">
                                <div className="flex">
                                    <p className="text-lg mx-2">PancakeSwap</p>
                                    <img src={buttonlogo1} className="w-6 h-8" alt="buttonlogo1" />
                                </div>
                            </button>
                            <button className="md:mx-2 mx-1 md:mt-0 mt-2 hover:bg-[#FF94C8] rounded-full hover:border-[#D50066] border-2 px-2 py-2 transition duration-300 bg-[#D50066] border-transparent">
                                <div className="flex">
                                    <p className="text-lg mx-2">UniSwap</p>
                                    <img src={buttonlogo2} className="w-11 h-7" alt="buttonlogo1" />
                                </div>
                            </button>
                        </div>
                        <div className="flex items-center mt-5">
                            <button className="mr-1">
                                <img src={buttonlogo3} className="w-16 h-16 rounded-full" alt="playbutton" />
                            </button>
                            <button className="">
                                <img src={buttonlogo4} className="w-16 h-16 rounded-full" alt="playbutton" />
                            </button>
                        </div>
                        <div className="flex items-center md:mt-10 mt-5 gap-7">
                            <a className='flex' href='www.telegram.com' target='_blank' rel="noreferrer"><FaTelegramPlane className='mt-1' /><p className="ml-1 text-center">Telegram</p></a>
                            <a className='flex' href='www.discord.com' target='_blank' rel="noreferrer"><FaDiscord className='mt-1' /><p className="ml-1 text-center">Discord</p></a>
                            <a className='flex' href='www.twitter.com' target='_blank' rel="noreferrer"><FaTwitter className='mt-1' /><p className="ml-1 text-center">Twitter</p></a>
                        </div>
                        <div className="flex items-center md:mt-10 mt-5 gap-7">
                            <a className='flex' href='www.youtube.com' target='_blank' rel="noreferrer"><FaYoutube className='mt-1' /><p className="ml-1 text-center">Youtube</p></a>
                            <a className='flex' href='www.facebook.com' target='_blank' rel="noreferrer"><FaFacebook className='mt-1' /><p className="ml-1 text-center">Facebook</p></a>
                            <a className='flex' href='www.instagram.com' target='_blank' rel="noreferrer"><FaInstagram className='mt-1' /><p className="ml-1 text-center">Instagram</p></a>
                        </div>
                    </div>
                    <div className="hidden md:block justify-end  mt-20 ld:mt-0">
                        <div className="hero-right-section-inner">
                            <img src={heroRightSection} alt="Logo" />
                        </div>
                        <div className="flex justify-center -mt-20">
                            <p className="text-center">POWERED BY</p>
                            <img src={blockchainlogo1} className="-mt-1 mx-1" alt="blockchainlogo1" />
                            <img src={blockchainlogo2} className="-mt-1 mx-1" alt="blockchainlogo1" />
                            <p className="text-center">BLOCKCHAINS</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;