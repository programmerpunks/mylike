const Card = ({ content }) => {
    return (
        <div className='p-4'>
            <img src={content.image} className="rounded-lg news-image-size" alt="mask" />
            <p className='text-lg text-[#F8F8F8] mt-2'>{content.title}</p>
            <p className='text-sm text-[#9E9E9E] mt-1'> {content.content}</p>
            <p className='text-sm text-left ml-3 mt-16'><button className="hover:text-[#7B6CF8]">learn more</button></p>
        </div>
    );
};

export default Card;