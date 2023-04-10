import { BsFillPeopleFill } from 'react-icons/bs';
import { FaNewspaper } from 'react-icons/fa';
import { FaQuestion } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa';

import { faqContent } from "../../assets/faq/content";
import Qasection from "./qasection";

const Faq = () => {
    return (
        <div className='mt-5 md:py-24 pt-72 md:pt-10 h-[496px]' id="FAQ">
            <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-12 md:col-span-5'>
                    <p className="text-3xl mb-6 font-bold">FAQ</p>
                    <div className='flex'>
                        <FaNewspaper className='mt-5' />
                        <button className="font-bold text-lg ml-4 mt-4 hover:text-purple-600">{faqContent.title1}</button>
                    </div>
                    <div className='flex'>
                        <BsFillPeopleFill className='mt-5' />
                        <button className="font-bold text-lg ml-4 mt-4 hover:text-purple-600">{faqContent.title2}</button>
                    </div>
                    <div className='flex'>
                        <FaQuestion className='mt-5' />
                        <button className="font-bold text-lg ml-4 mt-4 hover:text-purple-600">{faqContent.title3}</button>
                    </div>
                    <div className='flex'>
                        <FaGraduationCap className='mt-5' />
                        <button className="font-bold text-lg ml-4 mt-4 hover:text-purple-600">{faqContent.title4}</button>
                    </div>
                </div>
                <div className='col-span-12 md:col-span-7'>
                    <Qasection />
                </div>
            </div>
        </div>
    );
};

export default Faq;