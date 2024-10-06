'use client'
import Loading from '@/components/loading'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import aniwatch from '../api/aniwatch'
import VideoPlayer from '@/components/ui/videoPlayer'
import CaracterAndVoiceActorCard from '@/components/ui/CaracterAndVoiceActorCard'
import dynamic from 'next/dynamic';
import animationData from "../../../public/assets/lottiefiles/noruto.json"; // Ensure this path is correct



const Lottie = dynamic(() => import('lottie-react'), {
    ssr: false
});

type AnimeInfo = {
    info: {
        id: string,
        name: string,
        description: string,
        charactersVoiceActors:{
            character: {
                id: string,
                poster: string,
                name: string,
                cast:string
            },
            voiceActor: {
                id: string,
                poster: string,
                name: string,
                cast: string
            }
        }[],
        }
    

}
function Watch() {
    const searchParams = useSearchParams()
    // const id = searchParams.get("id")
    // const [id, setId] = useState<string | null | undefined>(searchParams.get("ep")?.match(/[0-9]+\?ep+/) ? `${params?.id}?ep=${searchParams.get("ep")?.split("?")[0]}` : params?.id)
    const ep = searchParams.get("ep")?.match(/[0-9]+\?ep+/) ? searchParams.get("ep")?.split("?")[1].slice(3) : searchParams.get("ep")
    const title = searchParams.get("q") || ""
    const userPreferredTitle = searchParams.get("userPreferredTitle") || ""
    const type = searchParams.get("type") || ""
    const [episodes, setEpisodes] = useState([])
    const [waitZoro, setWaitZero] = useState(false)
    const [currEpisode, setCurrEpisode] = useState<AniwatchEpisodeLinks | null>(null)
    const [animeInfo, setAnimeInfo] = useState<AnimeInfo | null>()
    const getZoroEpisodes = async () => {
        setWaitZero(true)
        try {
            const info = await aniwatch.getZoroEpisodesWithInfo({ searchTitle: title, type, userPreferredTitle })
            if (info) {
                setAnimeInfo(info?.info)
                console.log(info?.info)
                setEpisodes(info?.episodes)

                    const episode = await aniwatch.getStreamingEpisodeLinks({ episodeId: info?.episodes[Number(ep) - 1]?.episodeId })
                    
                    setCurrEpisode(episode)
               
            }
        } catch (e) {
            return null

        } finally {
            setWaitZero(false)
        }
    }
    useEffect(() => {
        getZoroEpisodes()
    }, [])
    if (waitZoro) {
        return <Loading />
    }
    if( !waitZoro&&!currEpisode ){
        return(
            <div className='flex w-screen h-screen items-center justify-center'>


            <div className="flex w-1/2 bg-white shadow-inner shadow-black items-center h-[500px] space-y-9 justify-center  flex-col rounded">
            <Lottie className='w-[100px]' animationData={animationData} width={50} loop={true} autoplay={true} />
            <span className='font-bold text-black'>Sorry! Episodes Not Available</span>

            </div>
        </div>
        )
    }

    return (
        episodes && currEpisode && (
            <div className='flex flex-col w-full pt-16 px-4  min-h-screen'>
                <hr />
                {/* <div className="w-full  me-6 rounded-xl bg-orange-600 h-[60px]"></div> */}
                <div className='flex flex-col items-center justify-center h-[460px] row space-x-2 space-y-2 w-full '>

                    <div className='w-full md:w-3/5 mt-10 rounded  '>
                        <VideoPlayer
                            videoSrc={currEpisode?.sources[0].url}
                            subtitles={currEpisode?.tracks}
                            intro={currEpisode?.intro}
                            outro={currEpisode?.outro}
                        />                  
                      </div>
                   
                </div>

                            <h1 className='md:text-4xl text-xl font-bold mt-16  m-2'>{title}</h1>
                <div className='flex items-start justify-between '>
                    
               
                <div className='w-full  md:w-1/3 flex px-2 flex-col items-center scrollbar-hide overflow-y-scroll md:h-[460px] h-[400px]' >
                        {
                            episodes && episodes?.map((item: ZeroEpisode, index: number) => <Link href={'#'} className={`group w-full text-white relative border-2 p-2 my-1  text-start navlinks font-thin rounded ${(Number(ep) == item?.number) ? "bg-fuchsia-950" : "border-slate-700"}  hover:bg-fuchsia-500`} key={index + 21}><span className='text-xl font-bold'>{"Episode " + item?.number + ": "}</span>{item?.title}
                                {item?.isFiller ? <span className='rounded p-1 inline-block group-hover:hidden bg-slate-600 ms-2 text-xs font-bold'>filler</span> : ""}
                            </Link>
                            )

                        }
                    </div>

                    {animeInfo && (
                        <div className='w-full md:w-2/3 flex flex-col p-5'>
                            <div>
                            <h1 className='text-2xl navlinks  p-1'>Characters & Voice Actor</h1>
                            <div className='flex flex-wrap'>
                                {animeInfo?.info?.charactersVoiceActors?.map((item,index:number)=><CaracterAndVoiceActorCard key={index} caracterImage={item.character.poster} caracterName={item?.character?.name} actorImage={item?.voiceActor?.poster} actorName={item?.voiceActor?.name}/>)}
                            </div>


                            </div>
                            <div>

                            <h1 className='text-2xl navlinks  p-1'>Description</h1>
                            <p dangerouslySetInnerHTML={{ __html: animeInfo?.info?.description }} className='navlinks text-justify' title={""}></p>
                            </div>
                        </div>
                    )}
                </div>
               
                </div>
        )
    )
}

export default Watch