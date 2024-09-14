"use client";
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const backdropstyle = {
}

const Caroussel = () => {
    const progressCircle: any = useRef(null);
    const progressContent: any = useRef(null);
    const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className="flex justify-center items-center h-screen ">
            <Swiper
                spaceBetween={10}
                centeredSlides={false}
                autoplay={{
                    delay: 119000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper w-full h-[500px]  rounded-lg shadow-lg relative"
            >
                <SwiperSlide
                    style={{
                        background: "linear-gradient(rgba(0, 0, 0, 0.05), var(--background) 100%), url(https://s4.anilist.co/file/anilistcdn/media/anime/banner/20605-RCJ7M71zLmrh.jpg)",
                        backgroundOrigin: "inherit",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="flex items-center  justify-center  text-2xl font-bold" >
                    <div className="w-full flex h-full"
                        style={backdropstyle}
                    >
                        <div className='md:w-1/2 backdrop-blur-sm flex flex-col space-y-4 h-full items-center justify-center'>
                            <h1 className='text-4xl uppercase shadow-2xl shadow-black'>One Piece</h1>
                            <p className='text-sm'>1999 | Action |</p>
                            <div className="flex w-full justify-center space-x-3">

                                <button className='text-lg border-2 border-fuchsia-700 p-2 rounded-2xl'>Watch Now</button>
                                <button className='text-lg border-2 border-fuchsia-700 p-2 rounded-2xl'>Add To favorit</button>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        background: "linear-gradient(rgba(0, 0, 0, 0.05), var(--background) 100%), url(https://s4.anilist.co/file/anilistcdn/media/anime/banner/33-g7HwYRVm0ZkN.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="flex items-center justify-center text-2xl font-bold">
                    <div className="w-full h-full"
                        style={backdropstyle}
                    >
                        <div className='md:w-1/2 backdrop-blur-sm flex flex-col space-y-4 h-full items-center justify-center'>
                            <h1 className='text-4xl uppercase shadow-2xl shadow-black'>One Piece</h1>
                            <p className='text-sm'>1999 | Action |</p>
                            <div className="flex w-full justify-center space-x-3">

                                <button className='text-lg border-2 border-fuchsia-700 p-2 rounded-2xl'>Watch Now</button>
                                <button className='text-lg border-2 border-fuchsia-700 p-2 rounded-2xl'>Add To favorit</button>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide
                    style={{
                        background: "linear-gradient(rgba(0, 0, 0, 0.05), var(--background) 100%), url(https://s4.anilist.co/file/anilistcdn/media/anime/banner/21-wf37VakJmZqs.jpg)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                    className="flex items-center justify-center text-2xl font-bold">
                    <div className="w-full h-full"
                        style={backdropstyle}
                    >
                        <div className='md:w-1/2 backdrop-blur-sm flex flex-col space-y-4 h-full items-center justify-center'>
                            <h1 className='text-4xl uppercase shadow-2xl shadow-black'>One Piece</h1>
                            <p className='text-sm'>1999 | Action |</p>
                            <div className="flex w-full justify-center space-x-3">

                                <button className='text-lg border-2 border-fuchsia-700 p-2 rounded-2xl'>Watch Now</button>
                                <button className='text-lg border-2 border-fuchsia-700 p-2 rounded-2xl'>Add To favorit</button>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center text-2xl font-bold">Slide 3</SwiperSlide>
                <SwiperSlide className="flex items-center justify-center text-2xl font-bold">Slide 4</SwiperSlide>
                <SwiperSlide className="flex items-center justify-center text-2xl font-bold">Slide 5</SwiperSlide>
                <SwiperSlide className="flex items-center justify-center text-2xl font-bold">Slide 6</SwiperSlide>
                <SwiperSlide className="flex items-center justify-center text-2xl font-bold">Slide 7</SwiperSlide>
                <SwiperSlide className="flex items-center justify-center text-2xl font-bold">Slide 8</SwiperSlide>
                <SwiperSlide className="flex items-center justify-center text-2xl font-bold">Slide 9</SwiperSlide>

                <div className="autoplay-progress absolute bottom-4 right-4 flex items-center space-x-2">
                    <svg viewBox="0 0 48 48" ref={progressCircle} className="w-8 h-8">
                    </svg>
                    <span ref={progressContent} className="text-fuchsia-900 text navlinks"></span>
                </div>
            </Swiper>
        </div >
    );
};

export default Caroussel;
