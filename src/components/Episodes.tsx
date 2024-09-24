import React, { useEffect, useState } from 'react';
import StreamingEpisode from './ui/streamingEpisode';
import dynamic from 'next/dynamic';
import animationData from "../../public/assets/lottiefiles/dragon.json"; // Ensure this path is correct

type StreamingEpisode = {
    title: string;
    thumbnail: string;
};

const Lottie = dynamic(() => import('lottie-react'), {
    ssr: false
});


type Props = {
    tmdbEps: StreamingEpisode[];
    anilistEpisodes: StreamingEpisode[];
    anilistEpsCount: number;
    gogoAnimeEps: StreamingEpisode[];
    episodesCount: number | null;
};

const Episodes = ({ tmdbEps, anilistEpisodes, anilistEpsCount, gogoAnimeEps, episodesCount }: Props) => {
    const [episodes, setEpisodes] = useState<StreamingEpisode[]>([]);
    const perPage: number = 8;
    const [pages, setPages] = useState<number>(Math.ceil((episodesCount ?? 0) / perPage));
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<StreamingEpisode[]>([]);

    useEffect(() => {
        console.log(tmdbEps)
        // Set the episodes source based on the provided logic
        if (episodesCount && tmdbEps?.length === episodesCount) {
            setEpisodes(tmdbEps);
        }
        else if (episodesCount && anilistEpisodes?.length === episodesCount) {
            setEpisodes(anilistEpisodes);
        } else {
            setEpisodes(gogoAnimeEps);
        }
    }, [episodesCount, anilistEpisodes, tmdbEps, gogoAnimeEps]);

    useEffect(() => {
        // Set the initial items for the first page
        setItemsPerPage(episodes.slice(0, perPage));
        setPages(Math.ceil(episodes.length / perPage));
    }, [episodes]);

    const switchPage = (page: number) => {
        const start = (page - 1) * perPage;
        const end = start + perPage;
        setItemsPerPage(episodes.slice(start, end));
        setCurrentPage(page);
    };
    const handleNext = () => {
        if (currentPage < pages) {
            switchPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            switchPage(currentPage - 1);
        }
    };

    return (itemsPerPage.length > 0 ?
        <div className='flex flex-wrap gap-4'>
            {itemsPerPage.map((item: StreamingEpisode, index: number) => (
                <StreamingEpisode
                    episodeNumber={(currentPage - 1) * perPage + index + 1}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    key={index}
                />
            ))}
            {/* previous Button */}
            {/* Pagination buttons */}

            {pages >= 2 && <div className="flex absolute  top-0 justify-center space-x-2 m-4 p-5 w-full">
                <button
                    onClick={handlePrevious}
                    className={`px-3 py-1  hover:bg-blue-500 hover:text-white bg-gray-300 text-black `}
                >
                    {"<"}
                </button>
                {Array.from({ length: 2 }, (_, idx) => (
                    <button
                        key={idx}
                        onClick={() => switchPage(idx + 1)}
                        className={`px-3 py-1 ${currentPage === idx + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                    >
                        {idx + 1}
                    </button>
                ))}

                {pages >= 3 && (
                    <React.Fragment>

                        <p>...</p>
                        <button
                            onClick={() => switchPage(pages)}
                            className={`px-3 py-1 ${currentPage === pages ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}
                        >
                            {pages}
                        </button>
                    </React.Fragment>


                )}
                <button
                    onClick={handleNext}
                    className={`px-3 py-1  hover:bg-blue-500 hover:text-white bg-gray-300 text-black `}
                >
                    {">"}
                </button>
            </div>}
        </div> :
        <div className="flex bg-white shadow-inner shadow-black items-center h-[200px] justify-center w-full flex-col rounded">
            <Lottie className='w-[100px]' animationData={animationData} width={50} loop={true} autoplay={true} />
            <span className='font-bold text-black'>Sorry! Episodes Not Available</span>

        </div>
    );
};

export default Episodes;
