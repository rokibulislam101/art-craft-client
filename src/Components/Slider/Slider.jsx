import slider1 from '../../assets/images/luxury-1.jpg'
import slider2 from '../../assets/images/luxury-2.jpg'
import slider3 from '../../assets/images/luxury-3.jpg'
import slider4 from '../../assets/images/luxury-4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

import "swiper/css/bundle";
import { Navigation, Autoplay, Pagination } from 'swiper/modules';



const Slider = () => {
    return (
        <div >
            <Swiper

                navigation={true}
                pagination={
                    { clickable: true }
                }
                modules={[Navigation, Autoplay, Pagination]}
                autoplay={
                    {
                        delay: 2500

                    }
                }

                className="mySwiper h-[800px]"
                loop={true}

            >
                <SwiperSlide>
                    <div className='slider1 '>
                        <img className='w-full h-[800px]' src={slider1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider2'>
                        <img className='w-full h-[800px]' src={slider2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider3'>
                        <img className='w-full h-[800px]' src={slider3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='slider4'>
                        <img className='w-full h-[800px]' src={slider4} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>

            

        </div>


    );
};

export default Slider;