import { FaBell } from "react-icons/fa";
import { FaBuffer } from "react-icons/fa";

import { fashionContent } from "../../assets/fashion/content";

const Fashion = () => {
    return (
        <div className='md:py-24 pt-10 h-[496px]'>
            <p className="text-4xl mb-12 mt-36 font-bold">OUR FASHION ACADEMY</p>
            <div className='grid grid-cols-2 gap-3'>
                <div className='col-span-2 md:col-span-1 border px-5 py-10 bg-[#303030] border-gray-500 rounded-lg'>
                    <p className='text-2xl font-bold'>PHASE 1:</p>
                    <div className='bg-[#454545] w-56 p-1 my-2 rounded-lg flex gap-2'>
                        <FaBell className="mt-1" /><p>{fashionContent.Phase1Subject1}</p>
                    </div>
                    <p className="text-sm">{fashionContent.Phase1Desc1}</p>
                    <div className='bg-[#454545] w-60 p-1 my-2 rounded-lg flex gap-2'>
                        <FaBuffer className="mt-1" /> <p>{fashionContent.Phase1Subject2}</p>
                    </div>
                    <p className="text-sm">{fashionContent.Phase1Desc2}</p>
                </div>
                <div className='col-span-2 md:col-span-1 border p-5 border-gray-500 rounded-lg'>
                    <p className='text-2xl font-bold'>PHASE 2:</p>
                    <div className='w-52 p-1 my-2 rounded-lg'>
                        <p>{fashionContent.Phase2Subject1}</p>
                    </div>
                    <p className="text-sm">{fashionContent.Phase2Desc1}</p>
                </div>

            </div>

        </div>
    );
};

export default Fashion;