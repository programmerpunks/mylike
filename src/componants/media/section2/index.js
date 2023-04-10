import googleplaystore from "../../../assets/media/images/googleplaystore.png";
import applestore from "../../../assets/media/images/applestore.png";
import mediamobile from "../../../assets/media/images/mediamobile.png";
import { mediaSection2Content } from "../../../assets/media/content";


const Section2 = () => {
    return (
        <div className='my-20'>
            <div className="grid grid-cols-12 mt-12 gap-4 bg-[#202020] border border-gray-500 rounded-lg">
                <div className="sm:col-span-6 col-span-12 p-10">
                    <p className='text-5xl font-bold py-8'>{mediaSection2Content.title}</p>
                    <p className='text-xl text-gray-400 mt-4 py2'>{mediaSection2Content.subject}</p>
                    <p className='text-md mt-10 xl:pr-80 lg:pr-40 pr-10'>{mediaSection2Content.description}</p>
                    <div className="md:flex mt-6 gap-3">
                        <img src={applestore}  alt="mediamobile" />
                        <img src={googleplaystore} className="mt-3 md:mt-0" alt="mediamobile" />
                    </div>
                </div>
                <div className="sm:col-span-6 col-span-12 flex justify-center">
                    <img src={mediamobile} className="w-42 h-96" alt="mediamobile" />
                </div>
            </div>
        </div>
    );
};

export default Section2;