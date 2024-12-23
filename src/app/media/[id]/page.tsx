"use client"
import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { toggleModalAuth } from '@/redux/actions/actionCreator'
import { useAuth } from '@/hooks/useAuth'
import { BookmarkIcon, PlayCircleIcon, BookOpenIcon, StarIcon } from '@heroicons/react/24/outline'
import { motion } from "framer-motion"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import AnimeCard from '@/components/ui/animeCard'
import anilist from '@/app/api/anilist'
import styles from "../../../../public/assets/styles/coverStyle.module.css"
import Episodes from '@/components/Episodes'
import gogoanime from '@/app/api/gogoanime'
import dynamic from 'next/dynamic'
import animationData from "../../../../public/assets/lottiefiles/notavailable.json"; // Ensure this path is correct
import aniwatch from '@/app/api/aniwatch'
import CharacterImage from '@/components/ui/CharacterImage'
import RelatedSlider from '@/components/relatedAnime'
import Chapters from '@/components/Chapters'
import Skeleton from '@/components/mediaSkeleton'
import { useRouter } from 'next/navigation'
const Lottie = dynamic(() => import('lottie-react'), {
    ssr: false
});


const Page = ({ params }: { params: { id: string } }) => {

    const { loading, user } = useAuth()
    const dispatch = useDispatch()
    const [anilistMedia, setAnilistMedia] = useState<AnilistMediaInfo | null>()
    const [GogoAnimeMediaInfo, setGogoAnimeMediaInfo] = useState<GogoAnimeInfo | null>()
    const [animeId] = useState<string | null>(params.id)
    const [aniwatchEpisodes, setAniwatchEpisodes] = useState<StreamingEpsiode[]>([])
    const [anilistEpisodes, setAnilistEpisodes] = useState<StreamingEpsiode[]>([])
    const [gogoanimeEisodes, setGogoAnimeEpisodes] = useState<StreamingEpsiode[]>([])
    const [coverBg, setCoverBg] = useState<string | unknown>('');
    const navigate = useRouter()
    const [mangaInfo,setMangaInfo] = useState<AnilistMediaInfo|null>(null)

    const getBgImage = () => {
        if (anilistMedia && typeof window !== 'undefined' && window.innerWidth > 700) {
            return setCoverBg(anilistMedia?.bannerImage);
        }
        return setCoverBg(anilistMedia?.coverImage?.extraLarge);
    };
    useEffect(() => {
        getBgImage();

        const handleResize = () => {
            getBgImage();
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('resize', handleResize);
            }
        };
    }, [anilistMedia]); // Ensure it updates if `anilistMedia` changes


    // const [waitGogo, setWaitGogo] = useState(false)

    //  get Media Info from Tmdb api
    // const getTmdbMediaInfo = async (media: AnilistMediaInfo) => {
    //     setWaitTmdb(true)

    //     try {
    //         const imdbMediaInfo = await getMediaInfo(
    //             {
    //                 search: true,
    //                 seachTitle: media?.title?.romaji,
    //                 releaseYear: media?.startDate?.year,
    //                 type: media?.format
    //             })
    //         setWaitTmdb(false)
    //         const episodes: StreamingEpsiode[] = []
    //         const seasonCurr = imdbMediaInfo?.seasons?.find((elem) => (elem?.episodes[0]?.releaseDate) == `${media?.startDate?.year}-${String(media?.startDate?.month).padStart(2, '0')}-${String(media?.startDate?.day).padStart(2, '0')}` && elem.episodes.length == media?.episodes ? media?.episodes : (GogoAnimeMediaInfo?.totalEpisodes ? GogoAnimeMediaInfo?.totalEpisodes : (TmdbMediaInfo?.totalEpisodes ?? null)))
    //         seasonCurr ? seasonCurr?.episodes?.map((eps: TmdbEps) => {
    //             episodes.push({ id: eps.id, title: eps.title, description: eps.description, thumbnail: eps.img?.hd || eps?.img?.mobile, provider: "tmdb" })
    //         }

    //         ) : imdbMediaInfo?.seasons?.map((item) => item.episodes.map((eps: TmdbEps) => {
    //             episodes.push({ id: eps.id, title: eps.title, description: eps.description, thumbnail: eps.img?.hd || eps?.img?.mobile, provider: "tmdb" })
    //         }

    //         ))
    //         setTmdbEpisodes(episodes?.filter((item: StreamingEpsiode) => item.thumbnail != null && item.description !== null))
    //         setTmdbMediaInfo(imdbMediaInfo)

    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // get Anime Info From GogoAnime
    const getGogoAnimeMediaInfo = async (media: AnilistMediaInfo) => {
        // setWaitGogo(true)
        try {
            const info = await gogoanime.getGogoAnimeMediaInfo({
                searchTitle: media?.title?.romaji,
                releasedYear: media?.startDate?.year
            })
            setGogoAnimeMediaInfo(info)
            const gogoEps: StreamingEpsiode[] = []
            info?.episodes?.map((item) => gogoEps.push({
                id: item?.id, title: "", description: "", thumbnail: media?.coverImage?.extraLarge
            }))
            setGogoAnimeEpisodes(gogoEps)
        }
        catch (error) {
            console.log(error)
        } finally {
            // setWaitGogo(false)

        }

    }

    // change background image tmdb cover >>>>> anilist cover

    useEffect(() => {

        const fetchMediaInfo = async () => {
            try {
                const media: AnilistMediaInfo | null = await anilist.getMediaInfo(String(animeId));

                if (media) {
                    if (media.type != "MANGA") {
                        try {
                            // setWaitAnimix(true)
                            const aniwatchEps: AniwatchEpisodes[] | null = await aniwatch.AniwatchStreamingEpisodes(media?.title?.romaji ?? media?.title?.english, media?.title?.userPreferred, media?.format)
                            if (aniwatchEps) {
                                setAniwatchEpisodes(aniwatchEps?.map((item: AniwatchEpisodes, index: number) => { return { id: item?.episodeId, title: item?.title ?? `Episode ${index + 1}`, description: "aniwatch", thumbnail: media?.coverImage?.extraLarge } }))
                            }
                        } catch (error) {

                        } finally {
                            // setWaitAnimix(false)
                        }
                        getGogoAnimeMediaInfo(media)
                        const episodes: StreamingEpsiode[] = []
                        media?.streamingEpisodes[media?.streamingEpisodes.length - 1]?.title?.search("Episode 1 ") ? media.streamingEpisodes.map((item: {
                            site: string,
                            thumbnail: string,
                            title: string,
                            url: string
                        }) => episodes.push({ id: "", title: item.title, thumbnail: item.thumbnail, description: "" }))

                            : media.streamingEpisodes?.reverse().map((item: {
                                site: string,
                                thumbnail: string,
                                title: string,
                                url: string
                            }) => episodes.push({ id: "", title: item.title, thumbnail: item.thumbnail, description: "" }))

                        setAnilistEpisodes(episodes)

                    }
                    else {
                        const mgInfo = await anilist?.getMangaInfo(String(animeId))
                        if(mgInfo){
                            setMangaInfo(mgInfo)
                        }

                    }
                    setAnilistMedia(media);
                }
            } catch (error) {
                console.error('Error fetching media info:', error);
            }
        };

        fetchMediaInfo();


    }, [animeId])


    if (!anilistMedia) {
        return <Skeleton />
    }
    return (
        <>
            <div className='flex flex-col w-full pt-20 min-h-screen'>
                <div
                    id={styles.banner_background_container}

                    style={{
                        background: `linear-gradient(rgba(0, 0, 0, 0.05), black 100%), url(${coverBg})`,
                    }}
                    className="flex flex-col justify-center items-center  md:items-start w-full  h-[400px]">
                    <div className='flex flex-col  w-full h-full justify-end items-center  md:items-start   space-x-2 space-y-3 md:justify-end '>
                        {/* {TmdbMediaInfo?.logos[0] ? <Image className='px-4' width={400} height={200} src={TmdbMediaInfo?.logos[0]?.url} alt="" />
                            :getBgImage
                         
                            <h1 style={{
                                color: anilistMedia?.coverImage?.color
                            }} <className="text-2xl lg:text-4xl    text-center line-clamp-6 font-sans >px-4 font-bold">{anilistMedia?.title?.romaji<className="text-2xl lg:text-4xl    text-center line-clamp-6 font-sans >px-4 font-bold">{anilistMedia?.title?.romaji}</h1>}</h1><
                        } */}
                        <h1 className="text-2xl lg:text-4xl  text-white  text-center line-clamp-6 font-sans >px-4 font-bold">{anilistMedia?.title?.romaji}</h1>
                    </div>
                    <div className='p-2 space-x-2 space-y-2'>
                        {anilistMedia?.genres?.map((genre: string, index: number) => <button className='px-3 py-1 text-sm border  bg-gray-800 border-gray-800 text-white rounded-xl hover:bg-fuchsia-950' key={index}>{genre}</button>)}
                    </div>
                </div>
                {/* watch or save buttons */}
                <div className="flex flex-col w-full md:flex-row p-4 justify-center items-center md:justify-start space-y-3 md:space-y-0 md:space-x-4">

                    {/* Conditional button for watching or reading */}
                    {anilistMedia?.type !== "MANGA" ? (
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate?.push(`/watch?ep=1&q=${anilistMedia?.title?.romaji}&userPreferredTitle=${anilistMedia?.title?.userPreferred}&type=${anilistMedia?.format}`)}
                            className="text-lg hover:bg-orange-500 border-orange-400 bg-orange-400 text-slate-800 hover:text-black flex items-center justify-center border-2 font-bold py-2 px-4 space-x-2 rounded-xl"
                        >
                            <PlayCircleIcon className="w-6" />
                            <span>Watch Now E1</span>
                        </motion.button>
                    ) : (
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => {
                                if (!loading && !user) {
                                    dispatch(toggleModalAuth(true));
                                }
                            }}
                            className="text-lg hover:bg-orange-500 border-orange-400 bg-orange-400 text-slate-800 hover:text-black flex items-center justify-center border-2 font-bold py-2 px-4 space-x-2 rounded-xl"
                        >
                            <BookOpenIcon className="w-6" />
                            <span>Read Now</span>
                        </motion.button>
                    )}

                    {/* Button to add favorite */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            if (!loading && !user) {
                                dispatch(toggleModalAuth(true));
                            }
                        }}
                        className="text-lg hover:bg-orange-500 border-orange-400 bg-orange-400 text-slate-800 hover:text-black flex items-center justify-center border-2 font-bold py-2 px-4 space-x-2 rounded-xl"
                    >
                        <BookmarkIcon className="w-6" />
                        <span>Add to Favorites</span>
                    </motion.button>

                    {/* Type button */}
                    <motion.button className="text-lg cursor-auto border-slate-800 text-slate-100 bg-slate-800 hover:text-slate-400 flex items-center justify-center border-2 font-bold py-2 px-4 rounded-xl">
                        {anilistMedia?.format || 'Unknown Type'}
                    </motion.button>

                    {/* Status button */}
                    <motion.button className="text-lg cursor-auto border-slate-800 text-slate-100 bg-slate-800 hover:text-slate-400 flex items-center justify-center border-2 font-bold py-2 px-4 rounded-xl">
                        {anilistMedia?.status?.replaceAll("_", ' ') || 'Unknown Status'}
                    </motion.button>

                    {/* Episodes button with null check */}
                    {anilistMedia?.status !== "NOT_YET_RELEASED" && <motion.button className="text-lg cursor-auto border-slate-800 text-slate-100 bg-slate-800 hover:text-slate-400 flex items-center justify-center border-2 font-bold py-2 px-4 rounded-xl">
                        {(aniwatchEpisodes.length || anilistMedia?.episodes) ? (aniwatchEpisodes.length || anilistMedia?.episodes) + " Episodes" : 'Episodes Unavailable'}
                    </motion.button>
                    }
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
                                {anilistMedia?.characters?.edges.map((character: Character, index: number) => (
                                    <CharacterImage key={index} character={character} />
                                ))}
                            </div>




                        </div>

                        {/* Episodes if is an anime*/}

                        {anilistMedia.type != "MANGA" && < div className="w-full ">


                            <div className="w-full">
                                {anilistMedia.type != "MANGA" &&
                                    < div className="py-7 relative ">

                                        <h1 className="text-xl  underline ">Episodes:</h1>
                                        {anilistMedia?.status !== "NOT_YET_RELEASED" ?

                                            < Episodes type={anilistMedia?.format} userPreferredTitle={anilistMedia?.title?.userPreferred} animeName={GogoAnimeMediaInfo?.title || anilistMedia?.title?.english || anilistMedia?.title?.romaji} aniwatchEps={aniwatchEpisodes} gogoAnimeEps={gogoanimeEisodes} anilistEpisodes={anilistEpisodes} episodesCount={aniwatchEpisodes.length || anilistMedia?.episodes ? anilistMedia?.episodes : (GogoAnimeMediaInfo?.totalEpisodes ? GogoAnimeMediaInfo?.totalEpisodes : (null))} anilistEpsCount={anilistMedia?.episodes || 0} tmdbEps={[]} />


                                            :
                                            <div className="flex bg-white shadow-inner shadow-black items-center h-[200px] justify-center w-full flex-col rounded">
                                                <Lottie className='w-[100px]' animationData={animationData} width={50} loop={true} autoplay={true} />
                                                <span className='font-bold text-black'>Sorry! Not Yet Released</span>

                                            </div>
                                        }
                                    </div>}
                            </div>
                        </div>}

                        {/* Chapters if is a manga*/}

                        {(mangaInfo && anilistMedia.type == "MANGA") && < div className="w-full ">


                            <div className="w-full">
                                    < div className="py-7 relative ">

                                        <h1 className="text-xl  underline ">Chapters:</h1>
                                        {anilistMedia?.status !== "NOT_YET_RELEASED" ?

                    <Chapters mangaId={mangaInfo?.id} chapters={mangaInfo?.chapters?.filter(chapter => chapter.id.includes('/en/'))}/>

                                            :
                                            <div className="flex bg-white shadow-inner shadow-black items-center h-[200px] justify-center w-full flex-col rounded">
                                                <Lottie className='w-[100px]' animationData={animationData} width={50} loop={true} autoplay={true} />
                                                <span className='font-bold text-black'>Sorry! Not Yet Released</span>

                                            </div>
                                        }
                                    </div>
                            </div>
                        </div>}





                    </div>
                    {/*  trailer and more*/}

                    <div className="md:w-2/6  flex flex-col justify-start  w-full py-3 ">
                        <div className="flex flex-col w-full justify-start">
                            <h1 className="text-xl py-3 underline">TRAILER:</h1>

                            <iframe className='md:h-[200px] h-full' src={`https://www.youtube.com/embed/${anilistMedia.trailer?.id}`} title="TVアニメ『薫る花は凛と咲く』ファーストPV" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <hr className="py-2" />

                        </div >
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
                        {
                            anilistMedia?.startDate && <div className="flex flex-col w-full justify-start">
                                <h1 className="text-xl py-3 underline">STARTED AT:</h1>
                                <p>{anilistMedia?.startDate?.day}-{anilistMedia?.startDate?.month}-{anilistMedia?.startDate?.year}</p>
                                <hr className="py-2" />

                            </div>
                        }

                        <div className="flex flex-col py-3 ">
                            <h1 className="text-xl py-2  underline">STUDIOS :</h1>
                            <ol>
                                {anilistMedia?.studios?.edges?.map((item, index: number) => <li key={index} className="py-1">{item?.node?.name}</li>)}
                            </ol>
                            <hr className="py-2" />

                        </div>
                    </div >



                </div >
                {/* Related animes or manga*/}
                < div className="pt-9 px-6" >
                    <h1 className="  text-pretty navlinks p-2 text-white text-2xl">Related :</h1>

                    <RelatedSlider animes={anilistMedia?.relations?.nodes} />

                </div >

                {/* Recommended animes or manga*/}
                < div className="flex flex-col p-3 " >

                    <h1 className="text-xl p-2 navlinks ">Similar Anime You May Like
                        :</h1>
                    <div className='flex justify-around  sm:justify-start flex-wrap'>

                        {anilistMedia?.recommendations?.edges.map((recommend: RecommendItem, index: number) => <AnimeCard key={index} anime={{ ...recommend?.node?.mediaRecommendation, image: recommend?.node?.mediaRecommendation?.coverImage?.extraLarge || recommend?.node?.mediaRecommendation?.coverImage?.large || recommend?.node?.mediaRecommendation?.coverImage?.medium, title: recommend?.node?.mediaRecommendation?.title?.romaji }} />)}
                    </div>
                </div >
            </div >
        </>

    )
}

export default Page