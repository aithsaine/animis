"use client"
import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { toggleModalAuth } from '@/redux/actions/actionCreator'
import { useAuth } from '@/hooks/useAuth'
import { BookmarkIcon, PlayCircleIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import { animate, motion } from "framer-motion"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import AnimeCard from '@/components/ui/animeCard'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import anilist from '@/app/api/anilist'
import Loading from '@/components/loading'
import { ApiMediaResults, ImdbMediaInfo } from '@/app/ts/interfaces/imdbInterfaces'
import styles from "../../../../public/assets/styles/coverStyle.module.css"
import { getMediaInfo } from '@/app/api/consumetImdb'
import { StreamOptions } from 'stream'
import Episodes from '@/components/Episodes'



const Page = ({ params }: { params: { id: String } }) => {
    const { loading, user } = useAuth()
    const dispatch = useDispatch()
    const [anilistMedia, setAnilistMedia] = useState<any | null>()
    const [TmdbMediaInfo, setTmdbMediaInfo] = useState<ImdbMediaInfo | null>()
    const [Manga, setManga] = useState()
    const [animeId, setAnimeId] = useState<String | null>(params.id)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(4); // Default for large screens
    const [waitTmdb, setWaitTmdb] = useState(false)
    const [anilistEpisodes, setAnilistEpisodes] = useState<StreamingEpsiode[]>([])
    const [tmdbEpisodes, setTmdbEpisodes] = useState<StreamingEpsiode[]>([])

    //  get Media Info from Tmdb api
    const getTmdbMediaInfo = async (media: any) => {
        setWaitTmdb(true)

        try {
            const imdbMediaInfo = await getMediaInfo(
                {
                    search: true,
                    seachTitle: media?.title?.romaji,
                    releaseYear: media?.startDate?.year,
                    type: media?.format
                })
            setWaitTmdb(false)
            const episodes: StreamingEpsiode[] = []
            imdbMediaInfo?.seasons.map((item: any) => item.episodes.map((eps: TmdbEps) => {
                episodes.push({ id: eps.id, title: eps.title, description: eps.description, thumbnail: eps.img?.hd || eps?.img?.mobile })
            }))
            setTmdbEpisodes(episodes)
            setTmdbMediaInfo(imdbMediaInfo)

        } catch (error) {
            console.log(error)
        }
    }

    // change background image tmdb cover >>>>> anilist cover
    const getBgImage = () => {
        if (anilistMedia && anilistMedia?.type !== "MANGA" && TmdbMediaInfo) {
            return TmdbMediaInfo?.cover
        }
        return anilistMedia?.bannerImage ? anilistMedia?.bannerImage : anilistMedia?.coverImage?.extraLarge
    }
    useEffect(() => {
        console.log(anilistEpisodes)
    }, [anilistEpisodes])

    useEffect(() => {

        const fetchMediaInfo = async () => {
            try {
                const media: AnilistMediaInfo | null = await anilist.getMediaInfo(animeId);

                if (media) {
                    if (media.type != "MANGA") {
                        const episodes: StreamingEpsiode[] = []
                        media.streamingEpisodes.map((item: {
                            site: string,
                            thumbnail: string,
                            title: string,
                            url: string
                        }) => episodes.push({ id: "", title: item.title, thumbnail: item.thumbnail, description: "" }))
                        setAnilistEpisodes(episodes)
                        getTmdbMediaInfo(media)
                    }
                    setAnilistMedia(media);
                }
            } catch (error) {
                console.error('Error fetching media info:', error);
            }
        };

        fetchMediaInfo();


    }, [animeId])




    // Update number of slides based on screen size
    const handleResize = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 550) {
            setSlidesPerView(2); // Mobile view
        }
        else if (windowWidth <= 640) {
            setSlidesPerView(3); // Mobile view
        } else if (windowWidth <= 1024) {
            setSlidesPerView(3); // Tablet view
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
        anilistMedia && setCurrentIndex((prevIndex) => (prevIndex + 1) % anilistMedia?.relations?.edges.length);
    };

    const prevSlide = () => {
        anilistMedia && setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? anilistMedia?.relations?.edges.length - 1 : prevIndex - 1
        );
    }

    if (waitTmdb) {
        return <Loading />
    }


    if (!anilistMedia) {
        return <Loading />
    }
    return (
        <>
            <div className='flex flex-col  pt-20 min-h-screen'>
                <div
                    id={styles.banner_background_container}

                    style={{
                        background: `linear-gradient(rgba(0, 0, 0, 0.05), var(--background) 100%), url(${getBgImage()})`,
                    }}
                    className="flex flex-col justify-center items-center  md:items-start w-full m-2 h-[400px]">
                    <div className='flex flex-col w-full h-full justify-end items-center  md:items-end md:flex-row  space-x-2 space-y-3 md:justify-start '>
                        <h1 style={{
                            color: anilistMedia.coverImage.color
                        }} className="text-6xl    text-center line-clamp-6 font-sans p-4 font-bold">{anilistMedia?.title?.romaji}</h1>
                    </div>
                    <div className='p-2 flex flex-wrap'>

                        {anilistMedia?.genres?.map((genre: string, index: number) => <button className='px-3 py-1 text-sm border  bg-gray-800 border-gray-800 text-white rounded-xl hover:bg-fuchsia-950' key={index}>{genre}</button>)}
                    </div>
                </div>
                {/* watch or save buttons */}
                <div className="flex w-full p-2 justify-start space-x-3">

                    {anilistMedia?.type !== "MANGA" ? <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            if (!loading && !user) {
                                dispatch(toggleModalAuth(true))

                            }
                        }}
                        className='text-lg hover:bg-orange-500 bg-orange-400  border-orange-400 text-slate-800 hover:text-black flex items-center  border-2 text-justify navlinks font-bold py-2 px-4 space-x-2 rounded-2xl'><PlayCircleIcon className='w-6' /> Watch Now</motion.button>
                        :
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                if (!loading && !user) {
                                    dispatch(toggleModalAuth(true))

                                }
                            }}
                            className='text-lg hover:bg-orange-500 bg-orange-400  border-orange-400 text-slate-800 hover:text-black flex items-center  border-2 text-justify navlinks font-bold py-2 px-4 space-x-2 rounded-2xl'><BookOpenIcon className='w-6' /> Read Now</motion.button>
                    }
                    <motion.button
                        whileTap={{ scale: 0.95 }}

                        onClick={() => {
                            if (!loading && !user) {
                                dispatch(toggleModalAuth(true))

                            }
                        }} className='text-lg hover:bg-orange-500 border-orange-400 bg-orange-400 text-slate-800 hover:text-black flex items-center  border-2  text-justify navlinks font-bold py-2 px-4 space-x-2 rounded-2xl'><BookmarkIcon className='w-6' /> Add Favorit</motion.button>





                    <motion.button className='text-lg cursor-auto  border-slate-800 text-slate-100   bg-slate-800 hover:text-slate-400 flex items-center  border-2  text-justify navlinks font-bold py-2 px-4 space-x-2 rounded-2xl'> {anilistMedia?.type}</motion.button>
                    <motion.button className='text-lg cursor-auto  border-slate-800  text-slate-100 bg-slate-800 hover:text-slate-400 flex items-center  border-2  text-justify navlinks font-bold py-2 px-4 space-x-2 rounded-2xl'> {anilistMedia?.status}</motion.button>
                    <motion.button className='text-lg cursor-auto  border-slate-800  text-slate-100 bg-slate-800 hover:text-slate-400 flex items-center  border-2  text-justify navlinks font-bold py-2 px-4 space-x-2 rounded-2xl'> {anilistMedia?.totalEpisodes} Episode</motion.button>

                </div>

                <div className="flex w-full   md:flex-row flex-col  p-1">

                    {/*  anime info*/}
                    <div className="md:w-4/6  text-white w-full  p-2 pe-4">
                        <div className="w-full">

                            <h1 className="text-xl p-3  underline ">INTRO:</h1>
                            <p dangerouslySetInnerHTML={{ __html: anilistMedia?.description }} className="navlinks leading-10 text-justify"></p>
                        </div>

                        <div className="w-full">

                            <h1 className="text-xl p-3 underline ">CASTS:</h1>
                            <div className="flex w-full p-2 overflow-x-scroll overflow-y-hidden scrollbar-hide">
                                {anilistMedia?.characters?.edges.map((character: Character) => (
                                    <img
                                        key={character.id}
                                        title={character.node.name.full}
                                        onMouseLeave={(e) => (e.currentTarget.src = character.node?.image.medium)}
                                        onMouseOver={(e) => {
                                            if (character.voiceActorRoles[0]) {
                                                e.currentTarget.src = character.voiceActorRoles[0].voiceActor.image.medium;
                                            }
                                        }}
                                        src={character.node?.image?.medium}
                                        className="rounded-full h-28 object-cover m-2"
                                    />
                                ))}
                            </div>




                        </div>

                        {/* Episodes */}



                        {anilistMedia.type != "MANGA" && < div className="w-full ">

                            <h1 className="text-xl p-3 underline ">Episodes:</h1>
                            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4'>

                                {(anilistEpisodes.length > 0 || tmdbEpisodes.length > 0) && <Episodes anilistEpisodes={anilistEpisodes} tmdbEps={tmdbEpisodes} />
                                }
                            </div>
                        </div>}






                    </div>
                    {/*  trailer and more*/}


                    <div className="md:w-2/6 flex flex-col justify-start  w-full py-3 ">
                        <div className="flex flex-col w-full justify-start">
                            <h1 className="text-xl py-3 underline">TRAILER:</h1>

                            <iframe width="356" height="200" src={`https://www.youtube.com/embed/${anilistMedia.trailer?.id}`} title="TVアニメ『薫る花は凛と咲く』ファーストPV" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <hr className="py-2" />

                        </div>
                        <div className="py-3">
                            <h1 className="text-xl py-3 underline">RAITING :</h1>
                            <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                                <Rating
                                    name="text-feedback"
                                    value={anilistMedia?.averageScore !== 0 ? anilistMedia?.averageScore / 20 : 0}
                                    readOnly
                                    precision={0.5}
                                    emptyIcon={<StarIcon style={{ opacity: 0.55, color: "white" }} fontSize="inherit" />}
                                />
                                <Box sx={{ ml: 2 }}>{Number(anilistMedia?.averageScore) !== 0 ? parseFloat((anilistMedia?.averageScore / 20).toFixed(2)) : 0}</Box>
                            </Box>
                            <hr className="py-2" />

                        </div>

                        <div className="flex flex-col py-3 ">
                            <h1 className="text-xl py-2  underline">STUDIOS :</h1>
                            <ol>
                                {anilistMedia?.studios?.edges?.map((item: string) => <li key={item.node.id} className="py-1">{item.node.name}</li>)}
                            </ol>
                            <hr className="py-2" />

                        </div>
                    </div>



                </div>
                {/* Related animes or manga*/}
                <div className="pt-9 px-6">
                    <div className="w-full flex px-2 items-start  justify-between " >
                        <h1 className="  text-pretty navlinks text-white text-2xl">Related :</h1>
                        <div className="flex space-x-4">

                            <button onClick={prevSlide} className="hover:bg-fuchsia-300 bg-white text-black rounded-full w-10 flex items-center justify-center h-10"><FaArrowLeft className="text-xl" /></button>
                            <button onClick={nextSlide} className="hover:bg-fuchsia-300 bg-white text-black rounded-full w-10 flex items-center justify-center h-10"><FaArrowRight className="text-xl" /></button>
                        </div>
                    </div>
                    <div className="relative w-full bg-slate-950 py-2 h-[400px]  flex items-center justify-center">

                        <div className="flex items-start justify-center md:justify-start w-full  overflow-hidden">
                            {anilistMedia?.relations?.nodes.slice(currentIndex, currentIndex + slidesPerView).concat(anilistMedia?.relations?.nodes.slice(0, Math.max(0, currentIndex + slidesPerView - anilistMedia?.relations?.nodes.length))
                            ).map((anime: any, index: number) => (
                                <AnimeCard key={index} anime={{ ...anime, image: anime.coverImage?.extraLarge, title: anime.title?.romaji }} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recommended animes or manga*/}
                <div className="flex flex-col p-3 ">

                    <h1 className="text-xl p-2  underline">SIMILAR ANIMES YOU MAY LIKE
                        :</h1>
                    <div className='flex justify-around flex-wrap'>

                        {anilistMedia?.recommendations?.edges.map((recommend: any, index: number) => <AnimeCard key={index} anime={{ ...recommend.node.mediaRecommendation, image: recommend.node?.mediaRecommendation.coverImage.extraLarge, title: recommend.node?.mediaRecommendation.title.romaji }} />)}

                    </div>
                </div>
            </div >
        </>

    )
}

export default Page