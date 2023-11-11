import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

function Banner({ data }) {

    return (
        <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            pagination={{
                clickable: true,
                dynamicBullets: true,
                dynamicMainBullets: 5
            }}
            navigation={true}>
            {
                data.map((item) => {
                    return (
                        <SwiperSlide key={item.id}>
                            <div className="relative">
                                <div className="absolute bottom-0 p-5 bg-gradient-to-t from-zinc-600 to-transparent w-full">
                                    <h2 className="text-[24px] text-slate-100 font-bold">{item.name}</h2>
                                    <button className="bg-blue-500 text-slate-100 px-2 py-1 rounded-lg">Get Now</button>
                                </div>
                                <img src={item.background_image}
                                    alt={item.name}
                                    className=" w-full h-[400px] md:h-[320px] object-cover rounded-lg" />
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper >
    )
}

export default Banner
