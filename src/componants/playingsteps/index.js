import { playingstepsContent } from "../../assets/playingsteps/content";
const mobile = require("../../assets/playingsteps/images/mobile.png");
const mask = require("../../assets/playingsteps/images/mask.png");

const PlayingSteps = () => {
    return (
        <div className=''>
            <p className="text-4xl mt-2 font-bold">How Do I Play?</p>
            <div className="grid grid-cols-10 mt-12 gap-4">
                <div className="xl:col-span-4 sm:col-span-5 col-span-10 rounded-lg">
                    <div className='bg-step1-img bg-section h-96 rounded-2xl '>
                        <div className='p-10'>
                            <span className='text-3xl font-bold mr-1'>Step 1</span>
                            <p className='mt-2'>{playingstepsContent.step1}</p>
                            <img src={mask} className="w-42 h-80" alt="mask" />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 sm:col-span-5 col-span-10 rounded-lg">
                    <div className='bg-step1-img bg-section h-96 rounded-2xl '>
                        <div className='p-10'>
                            <div className="grid grid-cols-2">
                                <div>
                                    <span className='text-3xl font-bold mr-1'>Step 2</span>
                                    <p className='mt-2'>{playingstepsContent.step2}</p>
                                    <p className='mt-20'>SHARE YOUR EXPERIENCE ON SOCIAL MEDIA</p>
                                </div>
                                <div className="text-webkit-right">
                                    <img src={mobile} className="w-42 h-60" alt="mobile" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-10 mt-4 gap-4">
                <div className="xl:col-span-2 col-span-12 rounded-lg">
                    <div className='bg-stepx-img bg-section h-48 rounded-2xl '>
                        <div className='p-5 text-center'>
                            <span className='text-2xl font-bold mt-1'>Step 3</span>
                            <p className='mt-3 text-sm'>{playingstepsContent.step3}</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 col-span-12 rounded-lg">
                    <div className='bg-stepx-img bg-section h-48 rounded-2xl '>
                        <div className='p-5 text-center'>
                            <span className='text-2xl font-bold mt-1'>Step 4</span>
                            <p className='mt-3 text-sm'>{playingstepsContent.step4}</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 col-span-12 rounded-lg">
                    <div className='bg-stepx-img bg-section h-48 rounded-2xl '>
                        <div className='p-5 text-center'>
                            <span className='text-2xl font-bold mt-1'>Step 5</span>
                            <p className='mt-3 text-sm'>{playingstepsContent.step5}</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 col-span-12 rounded-lg">
                    <div className='bg-stepx-img bg-section h-48 rounded-2xl '>
                        <div className='p-5 text-center'>
                            <span className='text-2xl font-bold mt-1'>Step 6</span>
                            <p className='mt-3 text-sm'>{playingstepsContent.step6}</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 col-span-12 rounded-lg">
                    <div className='bg-stepx-img bg-section h-48 rounded-2xl '>
                        <div className='p-5 text-center'>
                            <span className='text-2xl font-bold mt-1'>Step 7</span>
                            <p className='mt-3 text-sm'>{playingstepsContent.step7}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayingSteps;