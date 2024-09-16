"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AnimeCard from "./ui/animeCard";

const animeData = [
    {
        title: "Naruto",
        image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx174576-tpKcHG0eO6CS.jpg",
        description: "Takuma isn’t the most exciting guy...",
    },
    {
        title: "Attack on Titan",
        image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx162804-TBeptcAfvqTd.jpg",
        description: "Takuma isn’t the most exciting guy...",
    },
    {
        title: "Demon Slayer",
        image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx156822-Jzo2ITWgm4kM.jpg",
        description: "Takuma isn’t the most exciting guy...",
    },
    {
        title: "My Hero Academia",
        image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-73IhOXpJZiMF.jpg",
        description: "Takuma isn’t the most exciting guy...",
    },
    {
        title: "Death note",
        image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1535-4r88a1tsBEIz.jpg",
        description: "Takuma isn’t the most exciting guy...",
    },
    {
        title: "One Piece",
        image: "https://cdn.myanimelist.net/images/anime/6/73245.jpg",
        description: "Takuma isn’t the most exciting guy...",
    },
];

const CustomCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(4); // Default for large screens

    // Update number of slides based on screen size
    const handleResize = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 640) {
            setSlidesPerView(1); // Mobile view
        } else if (windowWidth <= 1024) {
            setSlidesPerView(3); // Tablet view
        } else if (windowWidth <= 1280) {
            setSlidesPerView(5); // Small desktop view
        } else {
            setSlidesPerView(6); // Large desktop view
        }
    };

    useEffect(() => {
        handleResize(); // Set initial value
        window.addEventListener("resize", handleResize); // Add resize listener
        return () => window.removeEventListener("resize", handleResize); // Cleanup
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % animeData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? animeData.length - 1 : prevIndex - 1
        );
    };

    // Sliced data to display the right number of cards
    const visibleAnimes = animeData.slice(
        currentIndex,
        currentIndex + slidesPerView
    ).concat(
        animeData.slice(0, Math.max(0, currentIndex + slidesPerView - animeData.length))
    );

    return (
        <>
            <h1 className=" ms-2 text-pretty navlinks text-white text-2xl">Most Popular :</h1>

            <div className="w-full flex items-center space-x-4 justify-center" >
                <button onClick={prevSlide} className="hover:bg-fuchsia-300 bg-white text-black rounded-full w-10 flex items-center justify-center h-10"><FaArrowLeft className="text-xl" /></button>
                <button onClick={nextSlide} className="hover:bg-fuchsia-300 bg-white text-black rounded-full w-10 flex items-center justify-center h-10"><FaArrowRight className="text-xl" /></button>
            </div>
            <div className="relative w-full py-2 h-[400px] bg-black flex items-center justify-center">

                <div className="flex items-center justify-around w-full  overflow-hidden">
                    {visibleAnimes.map((anime, index) => (

                        <AnimeCard anime={anime} />
                    ))}
                </div>


            </div>
        </>
    );
};

export default CustomCarousel;
