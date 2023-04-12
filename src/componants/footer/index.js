import { links } from '../../assets/footer/content';

const contactus = require("../../assets/footer/images/contactus.png");
const cyberscope = require("../../assets/footer/images/cyberscope.png");
const logo = require("../../assets/footer/images/logo.png");

const Footer = () => {
    return (
        <div className='mt-60 pt-20 md:mt-0 py-5 md:py-20 bg-[#0D0D0D] md:px-[15%] px-[5%]'>
            <div className='grid grid-cols-9'>
                <div className='text-white col-span-9 md:col-span-6 xl:col-span-3 '>
                    <img src={logo} alt="Logo" className="h-8" />
                    <div className="mt-12">
                        <p className="text-[#5E5248] text-xs font-bold">For Business Inquaries</p>
                        <p className="text-xs font">admin@stylike.io</p>
                    </div>
                </div>
                <div className='text-white col-span-9 md:col-span-6 xl:col-span-3 xl:mt-0 mt-10'>
                        <div className="flex  gap-x-2 ">
                            {links.map((lnk) => {
                                return (
                                    <a
                                        href={lnk.link}
                                        rel="noreferrer"
                                        target="_blank"
                                        className="m-1 hover:scale-150 duration-300 cursor-pointer"
                                    >
                                        {lnk.icon}
                                    </a>
                                );
                            })}
                    </div>
                    <div className="flex">
                        <div>
                            <div className="flex mt-12">
                                <img src={cyberscope} alt="cyberscope" className="h-10 mt-1" />
                                <div className="mx-3">
                                    <p className="text-[#44AFA0] text-lg">Cyber<span className="text-white">scope</span></p>
                                    <p className="text-sm">Audit by</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex mt-12">
                                <img src={contactus} alt="contactus" className="h-10 mt-1" />
                                <div className="mx-3">
                                    <p className="text-[#5A4199] text-lg">Contact<span className="text-white mx-1">Us</span></p>
                                    <p className="text-sm">Ticketing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-white col-span-9 md:col-span-3 md:mt-0 mt-10'>
                    <p className="text-xl font-bold">Subscribe to our newsletter and stay tuned for the latest announces!</p>
                    <div class="lg:flex block items-center mt-8">
                        <input type="email" placeholder="mail@example.com" className="bg-black border border-gray-400 py-2 px-4 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                        <button className="mt-5 lg:mt-0 mx-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;