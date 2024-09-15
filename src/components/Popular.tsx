"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
        <div className="relative w-full py-3 h-[450px] bg-black flex items-center justify-center">
            <div className="flex space-x-6 overflow-hidden">
                {visibleAnimes.map((anime, index) => (
                    <div
                        key={index}
                        className="anime-card w-[150px] md:w-[300px] h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-lg relative group"
                    >
                        <img
                            src={anime.image}
                            alt={anime.title}
                            className="w-full h-3/4  object-cover"
                        />
                        <div className="absolute inset-0 top-0 w-full h-full bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white text-center p-4">
                            <h2 className="text-lg font-bold">{anime.title}</h2>
                            <p className="text-sm">{anime.description}</p>
                        </div>
                        <div className="h-1/4 opacity-100 group-hover:hidden">
                            <h1 className="navlinks">{anime.title}</h1>
                            <p className="navlinks text-sm">{"2024 | TV | Completed "}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Previous Button */}
            <button
                className="absolute left-0 h-[300px] top-6  text-white flex items-center justify-center  hover:bg-gray-800 transition-colors duration-300"
                onClick={prevSlide}
            >
                <FaArrowLeft className="text-xl" />
            </button>

            {/* Next Button */}
            <button
                className="absolute right-0 h-[300px] top-6  text-white flex items-center justify-center  hover:bg-gray-800 transition-colors duration-300"
                onClick={nextSlide}
            >
                <FaArrowRight className="text-xl" />
            </button>
        </div>
    );
};

export default CustomCarousel;
