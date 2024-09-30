"use client";
import React, { useState, useEffect } from "react";
import EpisodeCard from "./ui/episodeCard";
import anilist from "@/app/api/anilist";
import { useDispatch, useSelector } from "react-redux"
import { StatesType } from "@/redux/reducers/mainReducer";
import { StoreRecentEpisodes } from "@/redux/actions/actionCreator";


const RecentEpisodes = () => {
    const { recentEpisodes } = useSelector((state: StatesType) => state)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);

    useEffect(() => {
        GetRecentEpisodes()
    }, [])
    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) {
                setCardsToShow(4);
            } else if (window.innerWidth >= 768) {
                setCardsToShow(3);
            } else {
                setCardsToShow(1);
            }
        };

        window.addEventListener('resize', updateCardsToShow);
        updateCardsToShow();

        return () => {
            window.removeEventListener('resize', updateCardsToShow);
        };
    }, [recentEpisodes]);



    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? recentEpisodes?.length - cardsToShow : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === recentEpisodes?.length - cardsToShow;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };
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
        <div className="relative w-full max-w-7xl mx-auto">
            < h1 className=" px-5 py-9 text-pretty navlinks text-white text-2xl" >Recent Episodes:</h1 >

            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${(currentIndex / cardsToShow) * 100}%)` }}
                >
                    {recentEpisodes.length > 0 ? recentEpisodes && recentEpisodes?.map((episode, index: number) =>

                        <EpisodeCard key={index} episode={{ ...episode }} />
                    ) : Array.from({ length: 8 }).map((item, index: number) => <div key={index} className="sm:w-[170px] animate-pulse w-[150px] h-[250px] rounded-md overflow-hidden  m-2 shadow-md bg-slate-900">
                    </div>)}

                </div>
            </div>

            {/* Buttons */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-900 hover:bg-gray-700 rounded-full p-2"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-900 hover:bg-gray-700 rounded-full p-2"
            >
                &#10095;
            </button>
        </div>
    );
};

export default RecentEpisodes;
