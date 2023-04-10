import { roadmapContent } from "../../assets/roadmap/content";
import roadmapMobile from "../../assets/roadmap/images/roadmapMobile.png";

const Roadmap = () => {
    return (
        <div className=''>
            <p className="text-4xl mt-2 font-bold">ROAD MAP</p>
            <div className='my-20'>
                <div className="grid grid-cols-12 mt-12 gap-4 bg-[#202020] border border-gray-500 rounded-lg">
                    <div className="sm:col-span-6 col-span-12 p-10">
                        <p className='text-3xl font-bold py-8'>{roadmapContent.title}</p>
                        <p className='text-md text-gray-400 mt-4 py2'>{roadmapContent.subject}</p>
                        <p className='text-md mt-10 xl:pr-80 lg:pr-40 pr-10'>{roadmapContent.description}</p>
                    </div>
                    <div className="sm:col-span-6 col-span-12">
                        <img src={roadmapMobile} className="w-42 h-96" alt="roadmapMobile" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;