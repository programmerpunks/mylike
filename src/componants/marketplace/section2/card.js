import React from 'react';

const Card = ({ content }) => {
    return (
        <div className='card-marketplace'>
            <img src={content.image} className="w-full h-40" alt="mask" />
            <p className='text-lg font-bold mt-2'>{content.title}</p>
            <p className='text-sm mt-5'> {content.content}</p>
        </div>
    );
};

export default Card;