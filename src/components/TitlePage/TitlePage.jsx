import React from 'react';
import heartGreen from '../../assets/heartGreen.png'

const TitlePage = () => {
    return (
        <section className='text-center flex flex-col justify-center items-center'>
            <div className='flex gap-3 items-center'>
                <img className='w-7 h-7' src={heartGreen} alt="" />
                <p className='text-subDescription caveat text-[22px]'>Start donating poor people</p>
            </div>
            <h1 className='text-3xl md:text-[50px] font-bold text-title leading-none'>Helping each other can <br className='hidden md:block' />
            make <span className='text-yellowText'>world</span> better</h1>
        </section>
    );
};

export default TitlePage;