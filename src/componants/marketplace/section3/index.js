import mobile from "../../../assets/marketplace/images/mobilecam.png";
import { section3Content } from "../../../assets/marketplace/content";

const Section3 = () => {
    return (
        <div className='my-20'>
            <div className="grid grid-cols-12 mt-12 gap-4 bg-marketplace-img marketplace-img rounded-lg">
                <div className="xl:col-span-7 sm:col-span-6 col-span-12 p-10">
                    <p className='text-4xl font-bold py-4'>{section3Content.title}</p>
                    <p className='text-2xl mt-4 py-2'>{section3Content.subject}</p>
                    <p className='text-md mt-5 xl:pr-80 lg:pr-40 pr-10'>{section3Content.description}</p>
                </div>
                <div className="xl:col-span-5 sm:col-span-6 col-span-12">
                    <img src={mobile} className="w-42 h-96" alt="mask" />
                </div>
            </div>
        </div>
    );
};

export default Section3;