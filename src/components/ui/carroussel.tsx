"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, A11y } from 'swiper/modules';
import { BookmarkIcon, PlayCircleIcon } from '@heroicons/react/24/outline';
import { useAuth } from '@/hooks/useAuth';
import { useDispatch } from 'react-redux';
import { toggleModalAuth } from '@/redux/actions/actionCreator';
import Image from "next/image"



const Caroussel = () => {
    const { user, loading } = useAuth()
    const dispatch = useDispatch()



    return (
        <div className="flex text-white justify-center items-center h-screen ">
            {(<Swiper
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
                modules={[Navigation, Pagination, A11y]}

                className="mySwiper w-full h-[500px]  rounded-lg shadow-lg relative"
            >
                <SwiperSlide
                    style={{
                        background: "linear-gradient(rgba(0, 0, 0, 0.05), black 100%), url(https://image.tmdb.org/t/p/original/a6ptrTUH1c5OdWanjyYtAkOuYD0.jpg)",
                        backgroundOrigin: "inherit",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundClip: "revert-layer"
                    }}
                    className="flex items-center  justify-center  text-2xl font-bold" >
                    <div className="w-full flex h-full"
                    >
                        <div className='md:w-1/2 backdrop-blur-0 flex flex-col space-y-4 h-full items-center justify-center'>
                            <Image alt='one piece' height={100} src={"https://image.tmdb.org/t/p/original/9F7daAmibx8ZHTE17CdM5FAwiHE.png"} width={100} className='w-full md:w-1/3' />
                            <p className='text-lg font-serif text-white text-justify w-2/3'>Takuma isn’t the most exciting guy. He’s awkward, single, and does nothing but go to work and come home. Tired of doing chores, he decides to buy a housekeeping robot named Mina. She can cook...</p>
                            <p className='text-sm'>1999 | Action | Ongoing</p>
                            <div className="flex w-full justify-center space-x-3">

                                <button
                                    onClick={() => {
                                        if (!loading && !user) {
                                            dispatch(toggleModalAuth(true))

                                        }
                                    }}
                                    className='text-lg hover:bg-fuchsia-700 hover:text-black flex items-center  border-2 border-fuchsia-700 p-2 space-x-2 rounded-2xl'><PlayCircleIcon className='w-6' /> Watch Now</button>
                                <button onClick={() => {
                                    if (!loading && !user) {
                                        dispatch(toggleModalAuth(true))

                                    }
                                }} className='text-lg hover:bg-fuchsia-700 hover:text-black flex items-center  border-2  border-fuchsia-700 p-2 space-x-2 rounded-2xl'><BookmarkIcon className='w-6' /> Add Favorit</button>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        background: "linear-gradient(rgba(0, 0, 0, 0.05), var(--background) 100%), url(https://s4.anilist.co/file/anilistcdn/media/anime/banner/153406-wP0TEqBVxY0V.jpg)",
                        backgroundOrigin: "inherit",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundClip: "revert-layer"
                    }}
                    className="flex items-center  justify-center  text-2xl font-bold" >
                    <div className="w-full flex h-full"
                    >
                        <div className='md:w-1/2 backdrop-blur-sm flex flex-col space-y-4 h-full items-center justify-center'>
                            <h1 className='text-4xl navlinks uppercase '>One Piece</h1>
                            <p className='text-lg font-serif text-slate-400 text-justify w-2/3'>Takuma isn’t the most exciting guy. He’s awkward, single, and does nothing but go to work and come home. Tired of doing chores, he decides to buy a housekeeping robot named Mina. She can cook...</p>
                            <p className='text-sm'>1999 | Action | Ongoing</p>
                            <div className="flex w-full justify-center space-x-3">

                                <button
                                    onClick={() => {
                                        if (!loading && !user) {
                                            dispatch(toggleModalAuth(true))

                                        }
                                    }}
                                    className='text-lg hover:bg-fuchsia-700 hover:text-black flex items-center  border-2 border-fuchsia-700 p-2 space-x-2 rounded-2xl'><PlayCircleIcon className='w-6' /> Watch Now</button>
                                <button onClick={() => {
                                    if (!loading && !user) {
                                        dispatch(toggleModalAuth(true))

                                    }
                                }} className='text-lg hover:bg-fuchsia-700 hover:text-black flex items-center  border-2  border-fuchsia-700 p-2 space-x-2 rounded-2xl'><BookmarkIcon className='w-6' /> Add Favorit</button>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide
                    style={{
                        background: "linear-gradient(rgba(0, 0, 0, 0.05), var(--background) 100%), url(https://s4.anilist.co/file/anilistcdn/media/anime/banner/162804-NwvD3Lya8IZp.jpg)",
                        backgroundOrigin: "inherit",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundClip: "revert-layer"
                    }}
                    className="flex items-center  justify-center  text-2xl font-bold" >
                    <div className="w-full flex h-full"
                    >
                        <div className='md:w-1/2 backdrop-blur-sm flex flex-col space-y-4 h-full items-center justify-center'>
                            <h1 className='text-4xl navlinks uppercase '>One Piece</h1>
                            <p className='text-lg font-serif text-slate-400 text-justify w-2/3'>Takuma isn’t the most exciting guy. He’s awkward, single, and does nothing but go to work and come home. Tired of doing chores, he decides to buy a housekeeping robot named Mina. She can cook...</p>
                            <p className='text-sm'>1999 | Action | Ongoing</p>
                            <div className="flex w-full justify-center space-x-3">

                                <button
                                    onClick={() => {
                                        if (!loading && !user) {
                                            dispatch(toggleModalAuth(true))

                                        }
                                    }}
                                    className='text-lg hover:bg-fuchsia-700 hover:text-black flex items-center  border-2 border-fuchsia-700 p-2 space-x-2 rounded-2xl'><PlayCircleIcon className='w-6' /> Watch Now</button>
                                <button onClick={() => {
                                    if (!loading && !user) {
                                        dispatch(toggleModalAuth(true))

                                    }
                                }} className='text-lg hover:bg-fuchsia-700 hover:text-black flex items-center  border-2  border-fuchsia-700 p-2 space-x-2 rounded-2xl'><BookmarkIcon className='w-6' /> Add Favorit</button>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>)}
        </div >
    );
};

export default Caroussel;
