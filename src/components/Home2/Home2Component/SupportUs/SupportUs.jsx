import React from 'react';
import handLove from "../../../../assets/home2/handLove.png"
import beComeImg1 from '../../../../assets/home2/becomeImg1.png'
import beComeImg2 from '../../../../assets/home2/becomeImg2.png'
import beComeImg3 from '../../../../assets/home2/becomeImg3.png'
import linearGradinet from '../../../../assets/home2/linearGradient.png'

import Lottie from 'lottie-react';
import animatinButton from '../../../../assets/home2/animationButton.json'
import { Link } from 'react-router-dom';

const SupportUs = () => {
    return (
        <section className='md:h-[300px] w-full flex flex-col md:flex-row'>
            {/*  card image 1 */}
            <div style={{backgroundImage: `url(${beComeImg1})`}} className='h-full md:w-[38%] w-full text-center flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat bg-[#1111113e] bg-blend-overlay py-10 md:py-0'>
                <img className='w-[40px] mb-2' src={handLove} alt="" />
                <p className='text-textWhite'>We give child a gift of a education</p>
                <h1 className='text-[39px] font-bold text-textWhite'>Become an volunteer?</h1>
                <Link>
                <button className='text-textWhite  font-bold bg-[#2c6b59] px-6 py-3 rounded-full'>Contact Now</button>
                </Link>
            </div>
            {/* card image 2 */}
            <div style={{backgroundImage: `url(${beComeImg2})`}} className='md:h-full h-[200px] md:w-[30%]  bg-cover bg-center bg-no-repeat flex justify-center items-center'>
             <div className='w-[105px] h-[105px]'>
            <Link> <Lottie animationData={animatinButton} loop={true}></Lottie></Link>
             </div>
            </div>
            {/* card image 3 */}
            <div style={{backgroundImage: `url(${beComeImg3})`}} className='h-full md:w-[32%] text-center flex flex-col justify-center items-center bg-center bg-cover bg-no-repeat relative py-10 md:py-0'>
                <img className='w-[40px] mb-2 z-[300]' src={handLove} alt="" />
                <p className='text-textWhite z-[300]'>We give child a gift of a education</p>
                <h1 className='text-[39px] z-[300] font-bold text-textWhite'>Become an volunteer?</h1>
                <Link className='z-[300]'>
                <button className='text-blackText  font-bold bg-[#f8c146] px-6 py-3 rounded-full'>Contact Now</button>
                </Link>
                <img className='absolute  w-full h-full' src={linearGradinet} alt="" />
            </div>
        </section>
    );
};

export default SupportUs;