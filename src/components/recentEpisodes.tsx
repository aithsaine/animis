"use client";
import React, {  useEffect } from "react";
import EpisodeCard from "./ui/episodeCard";
import anilist from "@/app/api/anilist";
import { useDispatch, useSelector } from "react-redux"
import { StatesType } from "@/redux/reducers/mainReducer";
import { StoreRecentEpisodes } from "@/redux/actions/actionCreator";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';


const RecentEpisodes = () => {
    const { recentEpisodes } = useSelector((state: StatesType) => state)

    useEffect(() => {
        GetRecentEpisodes()
    }, [])




  
    const dispatch = useDispatch()
    const GetRecentEpisodes = async () => {
        try {
            const episodes = await anilist.getRecentEpisodes()
            dispatch(StoreRecentEpisodes(episodes))


        } catch (error) {
            console.log(error);
        }
    }


    return (


        <div className="w-full mx-auto px-1">
      < h1 className=" px-5 py-9 text-pretty navlinks text-white text-2xl" > Recent Episodes:</h1 >

        <Swiper
          slidesPerView="auto" 
          spaceBetween={20}
          effect='fade'
          freeMode={true}
          modules={[Pagination, Navigation]}
        >
                    {recentEpisodes.length > 0 ? recentEpisodes && recentEpisodes?.map((episode, index: number) =>(
            <SwiperSlide 
              key={episode.id} 
              className="flex" 
              style={{ width: 'fit-content' }} // Ensure dynamic width
            >
                        <EpisodeCard key={index} episode={{ ...episode }} />

            </SwiperSlide>
                    )) : Array.from({ length: 8 }).map((item, index: number) =>( 
                        <SwiperSlide 
                        key={index} 
                        className="flex" 
                        style={{ width: 'fit-content' }} // Ensure dynamic width
                      >
                    <div key={index} className="sm:w-[170px] animate-pulse w-[150px] h-[250px] rounded-md overflow-hidden  m-2 shadow-md bg-slate-900">
                    </div>
                    </SwiperSlide>))}
        </Swiper>
      </div>







     
    );
};

export default RecentEpisodes;
