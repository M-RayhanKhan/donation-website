import { Rating } from '@smastrom/react-rating';
import React from 'react';

const FeedbackCard = ({review}) => {
     const {name, position, rating , logo , description} = review;
    return (
        <div className='border-2 border-[#ffffff] hover:border-[#f8c146] bg-[#ffffff] rounded-3xl p-[40px] '>
                <Rating
                className='mb-4'
                style={{ maxWidth: 120 }}
                value={rating}
                readOnly
                />
            <p className='text-description'>{description}</p>
            <div className='flex mt-3 items-center gap-3'>
                <img className='w-[50px] h-[50px] object-cover rounded-full' src={logo} alt="" />
                <div>
                    <h3 className='text-blackText text-[18px] font-bold'>{name}</h3>
                    <p>{position}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;