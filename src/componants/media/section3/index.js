import VideoCard from "./video";
import { mediaSection3Content } from "../../../assets/media/content";
import mediacentral from '../../../assets/media/images/mediacentral.png'

const Section3 = () => {
    return (
        <div >
            <div className="p-2 my-5 bg-gradient-to-br from-purple-700 to-transparent via-gray-900 border border-[#FE48FD] rounded-lg">
                <p className='px-5 py-2'><span className='bold-pink mr-1'>{mediaSection3Content.name}</span>{mediaSection3Content.objective}</p>
            </div>
            <div className="justify-center flex">
                <img src={mediacentral} alt="mediacentral" />
            </div>
            <div className="justify-center flex">
                <div className="p-2 my-5 w-96 flex justify-center bg-gradient-to-br from-purple-700 to-transparent via-gray-900 border border-[#FE48FD] rounded-xl">
                    <p className=''>{mediaSection3Content.footdiv}</p>
                </div>
            </div>
            <p className='text-3xl mt-16 font-bold text-center'>{mediaSection3Content.videoDiscription}</p>
            <VideoCard />
        </div >
    );
};

export default Section3;