'use client'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState, useRef } from 'react'
import aniwatch from '../api/aniwatch'
import VideoPlayer from '@/components/ui/videoPlayer'
import CaracterAndVoiceActorCard from '@/components/ui/CaracterAndVoiceActorCard'
import dynamic from 'next/dynamic';
import animationData from "../../../public/assets/lottiefiles/noruto.json";
import WatchSkeleton from '@/components/watchSkeleton'

const Lottie = dynamic(() => import('lottie-react'), {
    ssr: false
});

type AnimeInfo = {
    info: {
        id: string,
        name: string,
        description: string,
        charactersVoiceActors: {
            character: {
                id: string,
                poster: string,
                name: string,
                cast: string
            },
            voiceActor: {
                id: string,
                poster: string,
                name: string,
                cast: string
            }
        }[],
    },
    moreInfo: {
        genres: string[]
    }
};

function Watch() {
    const searchParams = useSearchParams();
    const ep = searchParams.get("ep")?.match(/[0-9]+\?ep+/) ? searchParams.get("ep")?.split("?")[1].slice(3) : searchParams.get("ep");
    const title = searchParams.get("q") || "";
    const userPreferredTitle = searchParams.get("userPreferredTitle") || "";
    const type = searchParams.get("type") || "";

    const [episodes, setEpisodes] = useState<ZeroEpisode[] | []>([]);
    const [waitZoro, setWaitZero] = useState(true);
    const [currEpisode, setCurrEpisode] = useState<AniwatchEpisodeLinks | null>(null);
    const [animeInfo, setAnimeInfo] = useState<AnimeInfo | null>();
    const currentEpisodeRef = useRef<HTMLDivElement | null>(null);
    const navigate = useRouter()

    const getZoroEpisodes = async () => {
        try {
            const info = await aniwatch.getZoroEpisodesWithInfo({ searchTitle: title, type, userPreferredTitle });
            if (info) {
                setAnimeInfo(info?.info);
                setEpisodes(info?.episodes);

                const episode = await aniwatch.getStreamingEpisodeLinks({ episodeId: info?.episodes[Number(ep) - 1]?.episodeId });
                setCurrEpisode(episode);
            }
        } catch (e) {
            return null;
        } finally {
            setWaitZero(false);
        }
    };

    

    const getUpdatedUrl = (newEp: string) => {
        const queryParams = new URLSearchParams({
            ep: newEp,
            q: title,
            userPreferredTitle: userPreferredTitle,
            type: type || "TV",
        });
        return `/watch?${queryParams.toString()}`;
    };

    useEffect(() => {
        getZoroEpisodes();
    }, [ep]);

   

    if (waitZoro) {
        return <WatchSkeleton />;
    }

    if (!waitZoro && !currEpisode) {
        return (
            <div className='flex w-screen h-screen items-center justify-center'>
                <div className="flex md:w-1/2 w-4/5 rounded-2xl bg-white shadow-inner shadow-black items-center h-[600px] space-y-9 justify-center flex-col md:rounded">
                    <Lottie className='w-[100px]' animationData={animationData} loop={true} autoplay={true} />
                    <span className='font-bold text-black'>Sorry! Episodes Not Available</span>
                </div>
            </div>
        );
    }

    const currentEpisodeNumber = Number(ep);
    const nextEpisode = currentEpisodeNumber + 1;
    const prevEpisode = currentEpisodeNumber - 1;

    return (
        episodes && currEpisode && (
            <div className='flex flex-col w-full pt-16 min-h-screen'>
              

                <div className='flex flex-col items-center justify-center w-full'>
                    <div className='w-full md:w-3/5 rounded'>
                        <VideoPlayer
                            videoSrc={currEpisode?.sources[0].url}
                            subtitles={currEpisode?.tracks}
                            intro={currEpisode?.intro}
                            outro={currEpisode?.outro}
                        />
                    </div>
                </div>

                <h1 className='text-gray-300 font-bold mt-16 m-2'>
                    <span className='text-xl font-bold'>EP {ep} {title}: </span>
                    <span className='text-md text-gray-500'>{episodes[currentEpisodeNumber - 1]?.title}</span>
                </h1>
                <div className='p-2 space-x-2 space-y-2'>
                {animeInfo?.moreInfo?.genres.map((genre, index) => (
                        <button
                            className='px-3 py-1 text-sm border bg-gray-800 border-gray-800 text-white rounded-xl hover:bg-fuchsia-950'
                            key={index}
                        >
                            {genre}
                        </button>
                    ))}
                </div>

                <div className='flex md:flex-row flex-col-reverse items-start justify-between'>
                    
                    {animeInfo && (
                        <div className='w-full md:w-2/3 flex flex-col'>
                            
                            <h1 className='text-2xl text-sky-600 navlinks p-4 underline'>Characters & Voice Actor</h1>
                            <div className='flex overflow-x-scroll p-4 overflow-y-hidden scrollbar-hide w-full'>
                                {animeInfo?.info?.charactersVoiceActors?.map((item, index: number) => (
                                    <CaracterAndVoiceActorCard
                                        key={index}
                                        caracterImage={item.character.poster}
                                        caracterName={item.character.name}
                                        actorImage={item.voiceActor.poster}
                                        actorName={item.voiceActor.name}
                                    />
                                ))}
                            </div>

                            <h1 className='text-2xl text-sky-600 underline p-4 navlinks'>Description</h1>
                            <p
                                dangerouslySetInnerHTML={{ __html: animeInfo?.info?.description }}
                                className='navlinks text-gray-200 px-4 text-xl text-justify'
                                title={""}
                            />
                    
                        </div>
                    )}

                    <div className='w-full md:w-1/3 flex px-2 flex-col items-center  max-h-screen'>
                    <div className='flex w-full justify-between my-3 items-center  '>
                    <button
                        disabled={currentEpisodeNumber === 1}
                        onClick={() => navigate.push(getUpdatedUrl(String(prevEpisode))) }
                        className={`px-4 w-1/2 mx-2 py-2 rounded ${currentEpisodeNumber === 1 ? 'bg-gray-500' : 'bg-gray-900 hover:bg-gray-800'} text-white`}
                    >
                        Previous
                    </button>
                    <button
                        disabled={currentEpisodeNumber === episodes.length}
                        onClick={() => navigate.push(getUpdatedUrl(String(nextEpisode))) }
                        className={`px-4 w-1/2 mx-2 py-2 rounded ${currentEpisodeNumber === episodes.length ? 'bg-gray-500' : 'bg-gray-900 hover:bg-gray-800'} text-white`}
                    >
                        Next
                    </button>
                </div>
                       <div className='scrollbar-hide w-full overflow-y-scroll'>


                        {episodes.map((item: ZeroEpisode, index: number) => (
                            <div
                                ref={currentEpisodeNumber === item.number ? currentEpisodeRef : null}
                                key={index}
                                className={`group w-full bg-black relative border p-2 my-1 text-start navlinks font-thin rounded ${
                                    currentEpisodeNumber === item.number ? "bg-fuchsia-950" : "border-slate-700"
                                } hover:bg-fuchsia-800`}
                            >
                                <Link href={getUpdatedUrl(String(item.number))}>
                                    <span className='text-xl font-bold italic'>{"Episode " + item.number + ": "}</span>
                                    <span className='text-white'>{item.title}</span>
                                    {item.isFiller && <span className='rounded p-1 inline-block group-hover:hidden bg-slate-600 ms-2 text-xs font-bold'>filler</span>}
                                </Link>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    );
}

export default Watch;
