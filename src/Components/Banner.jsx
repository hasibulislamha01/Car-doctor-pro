'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

import banner1 from '@/assets/images/banner/1.jpg'
import banner2 from '@/assets/images/banner/2.jpg'
import banner3 from '@/assets/images/banner/3.jpg'
import banner4 from '@/assets/images/banner/4.jpg'
import banner5 from '@/assets/images/banner/5.jpg'
import banner6 from '@/assets/images/banner/6.jpg'
import ThemeButton from './ThemeButton/ThemeButton';


const Banner = () => {

    const bannerItems = [
        {
            image: banner1,
            title: 'Affordable Price For Car Servicing',
            description: 'There are many variations of passages of available, but the majority have suffered alteration in some form'
        },
        {
            image: banner2,
            title: 'Affordable Price For Car Servicing',
            description: 'There are many variations of passages of available, but the majority have suffered alteration in some form'
        },
        {
            image: banner3,
            title: 'Affordable Price For Car Servicing',
            description: 'There are many variations of passages of available, but the majority have suffered alteration in some form'
        },
        {
            image: banner4,
            title: 'Affordable Price For Car Servicing',
            description: 'There are many variations of passages of available, but the majority have suffered alteration in some form'
        },
        {
            image: banner5,
            title: 'Affordable Price For Car Servicing',
            description: 'There are many variations of passages of available, but the majority have suffered alteration in some form'
        },
        {
            image: banner6,
            title: 'Affordable Price For Car Servicing',
            description: 'There are many variations of passages of available, but the majority have suffered alteration in some form'
        }
    ]
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            className='w-full h-screen'
        >
            {
                bannerItems?.map(item =>

                    <SwiperSlide>

                        <div className='flex flex-col justify-center h-full  pl-6 text-white rounded-[10px]'
                            style={{
                                background: `linear-gradient(90deg, rgb(21, 21, 21), rgba(21, 21, 21, 0) 100%), url(${item?.image.src})`,
                                backgroundPosition: 'left',
                                backgroundSize: 'cover'
                            }}>
                            <div className='w-1/2 flex flex-col justify-center gap-6'>
                                <h1 className='text-5xl'>{item?.title}</h1>
                                <p>
                                    {item?.description}
                                </p>
                                <div className='flex items-center gap-4'>
                                    <ThemeButton name={'Discover Now'}></ThemeButton>
                                    <ThemeButton name={'Latest Project'} outlined={true}></ThemeButton>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            }
        </Swiper>
    );
};

export default Banner;