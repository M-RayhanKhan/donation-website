import brand1 from '../../../../assets/brand-1.png'
import brand2 from '../../../../assets/brand-2.png'
import brand3 from '../../../../assets/brand-3.png'
import brand4 from '../../../../assets/brand-4.png'
import brand5 from '../../../../assets/brand-5.png'
import Marquee from "react-fast-marquee";
const HeartCare = () => {
    return (
        <section className="bg-[#edeeef] py-10">
                <div className="max-w-[1275px] grid gap-2 grid-cols-3 md:grid-cols-5 mx-auto px-2 lg:px-0">
                    <Marquee pauseOnHover speed={50}>
                        <img className='w-[120px]' src={brand1} alt="" />
                    </Marquee>
                    <Marquee pauseOnHover speed={50}>
                        <img className='w-[120px]' src={brand2} alt="" />
                    </Marquee>
                    <Marquee pauseOnHover speed={50}>
                        <img className='w-[120px]' src={brand3} alt="" />
                    </Marquee>
                    <Marquee pauseOnHover speed={50}>
                        <img className='w-[120px]' src={brand4} alt="" />
                    </Marquee>
                    <Marquee pauseOnHover speed={50}>
                        <img className='w-[120px]' src={brand5} alt="" />
                    </Marquee>
                    <div className='md:hidden'>
                    <Marquee pauseOnHover speed={50}>
                        <img className='w-[120px]' src={brand1} alt="" />
                    </Marquee>
                    </div>
                </div>
        </section>
    );
};

export default HeartCare;