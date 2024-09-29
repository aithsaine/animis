"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AnimeCard from "./ui/animeCard";



const CustomCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(1);
    const [animes, setAnimes] = useState<TrendingAnime[]>([])

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
    }, []);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? animes?.length - cardsToShow : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === animes?.length - cardsToShow;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };


    return (


        <div className="relative w-full max-w-7xl mx-auto">
            < h1 className=" px-5 py-9 text-pretty navlinks text-white text-2xl" >Recent Episodes:</h1 >

            <div className="overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${(currentIndex / cardsToShow) * 100}%)` }}
                >
                    {animes.length > 0 ? animes && animes?.map((anime: any, index: number) =>

                        <AnimeCard key={index} anime={{ ...anime, status: "", title: anime.title }} />
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

export default CustomCarousel;
