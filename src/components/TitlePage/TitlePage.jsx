import React, { useRef } from 'react';
import heartGreen from '../../assets/heartGreen.png'
import { useInView } from 'motion/react';
import {motion} from 'motion/react'
const TitlePage = () => {
    const ref = useRef(null);
    const inView = useInView(ref, {once:true})
    return (
        <section className='text-center  flex flex-col justify-center items-center'>
            <motion.div
            ref={ref}
            animate={inView ? {x: 0, opacity: 1,  transition: {duration: 1, ease:"easeInOut", rotate: 0}} : 
            {x: -500, opacity: 0 , duration:2, ease:"easeInOut"}}
             className='flex gap-3 items-center'>
                <img className='w-7 h-7' src={heartGreen} alt="" />
                <p className='text-subDescription caveat text-[22px]'>Start donating poor people</p>
            </motion.div>
            <motion.h1 
             ref={ref}
             animate={inView ? {x: 0, opacity: 1,  transition: {duration: 1, ease:"easeInOut", rotate: 0}} : 
             {x: -500, opacity: 0 , duration:2, ease:"easeInOut"}}
            className='text-3xl md:text-[50px] font-bold text-title leading-none'>Helping each other can <br className='hidden md:block' />
            make <span className='text-yellowText'>world</span> better</motion.h1>
        </section>
    );
};

export default TitlePage;