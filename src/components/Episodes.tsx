import React, { useEffect, useState } from 'react';
import StreamingEpisode from './ui/streamingEpisode';
import dynamic from 'next/dynamic';
import animationData from "../../public/assets/lottiefiles/dragon.json"; // Ensure this path is correct



const Lottie = dynamic(() => import('lottie-react'), {
    ssr: false
});


type Props = {
    tmdbEps: StreamingEpsiode[];
    anilistEpisodes: StreamingEpsiode[];
    anilistEpsCount: number;
    gogoAnimeEps: StreamingEpsiode[];
    episodesCount: number | null;
    aniwatchEps: StreamingEpsiode[];
    animeName: string;
    userPreferredTitle: string;
    type: string
};

const Episodes = ({ tmdbEps, type, anilistEpisodes, aniwatchEps, gogoAnimeEps, episodesCount, animeName, userPreferredTitle }: Props) => {
    const [episodes, setEpisodes] = useState<StreamingEpsiode[]>([]);
    const perPage: number = 8;
    const [pages, setPages] = useState<number>(Math.ceil((episodesCount ?? 0) / perPage));
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<StreamingEpsiode[]>([]);

    useEffect(() => {
        if (episodesCount && anilistEpisodes?.length === episodesCount) {
            setEpisodes(anilistEpisodes);
        }
        else if (episodesCount && tmdbEps?.length === episodesCount) {
            if (episodesCount && aniwatchEps?.length === episodesCount) {

                setEpisodes(tmdbEps?.map((item: StreamingEpsiode, index: number) => { return { ...item, title: anilistEpisodes[index]?.title } }));
            } else {
                setEpisodes(tmdbEps)

            }
        }

        else if (aniwatchEps.length > 0) {
            setEpisodes(aniwatchEps)
        }
        else {
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
        <div className='flex sm:justify-start justify-around  mt-10 flex-wrap gap-4'>
            {itemsPerPage.map((item: StreamingEpsiode, index: number) => (
                <StreamingEpisode
                    type={type}
                    id={item?.id}
                    userPreferredTitle={userPreferredTitle}
                    provider={item?.provider}
                    episodeNumber={(currentPage - 1) * perPage + index + 1}
                    title={item.title}
                    thumbnail={item.thumbnail}
                    key={index}
                    animeName={animeName}
                />
            ))}
            {/* previous Button */}
            {/* Pagination buttons */}

            {pages >= 2 && <div className="flex absolute  top-5 right-0 justify-center space-x-2 my-4 p-5 w-full">
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
