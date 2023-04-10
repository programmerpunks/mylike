import React, { useRef, useState } from "react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import Card from "./card";
import { newsContent } from "../../assets/news/content";

import "./styles.css";

export default function App() {
    return (
        <div className='md:py-8 pt-4 h-[496px]' id="NEWS">
            <p className="text-4xl mb-12 font-bold">LATEST NEWS & BLOG</p>
            <Swiper
                  breakpoints={{
                    // when window width is >= 640px
                    640: {
                      width: 640,
                      slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                      width: 768,
                      slidesPerView: 2.5,
                    },
                  }}
                spaceBetween={20}
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide className="rounded-xl"><Card content={newsContent.card1} /></SwiperSlide>
                <SwiperSlide className="rounded-xl"><Card content={newsContent.card2} /></SwiperSlide>
                <SwiperSlide className="rounded-xl"><Card content={newsContent.card3} /></SwiperSlide>
                <SwiperSlide className="rounded-xl"><Card content={newsContent.card4} /></SwiperSlide>
                <SwiperSlide className="rounded-xl"><Card content={newsContent.card5} /></SwiperSlide>
                <SwiperSlide className="rounded-xl"><Card content={newsContent.card6} /></SwiperSlide>
            </Swiper>
        </div>
    );
}