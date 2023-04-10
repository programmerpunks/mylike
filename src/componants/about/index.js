const aboutsectionleftpic = require("../../assets/about/images/about-section-left-pic.png");

const About = () => {
    return (
        <div className='py-32' id="About">
            <div className="grid grid-cols-1 xl:grid-cols-2 xl:gap-20 gap-5">
                <div class="py-8 px-12 bg-[#3B3B3B] rounded-xl  items-center justify-center">
                    <p className='mt-8'><span className='bold-pink mr-1'>Mylike</span>in collaboration with Fashion TV aims to improve people sense of style by combining fashion and tech in a Web 3.0 platform!</p>
                    <div className='mt-8'>
                        <span className='bold-pink mr-1'>GOAL</span>
                        <p className='mt-2'>Our goal is to reward those who put time and effort in their daily look and appreciate Fashion .</p>
                    </div>
                    <div className='mt-8'>
                        <span className='bold-pink mr-1'>TECHNOLOGY</span>
                        <p className='mt-2'>We believe that technology can be used to improve your sense of style and to achieve that mission, we have combined fashion and technology. To make it more fun, we have presented this in the form of a decentralized web 3.0 based app</p>
                    </div>
                    <button className="bg-[#7F4CBD] text-white text-sm  px-6 py-4 rounded-md my-8">
                        Getting Started ...
                    </button>
                </div>
                <div className="text-center">
                    <p className="text-3xl my-5 font-bold ">Presented by FTVIO</p>
                    <img src={aboutsectionleftpic}  alt="aboutsectionleftpic" />
                </div>
            </div>
        </div>
    );
};

export default About;