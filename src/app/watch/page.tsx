'use client'
import zoro from '@/app/api/zoro'
import Loading from '@/components/loading'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

function Watch() {
    const searchParams = useSearchParams()
    const id = searchParams.get("id")
    // const [id, setId] = useState<string | null | undefined>(searchParams.get("ep")?.match(/[0-9]+\?ep+/) ? `${params?.id}?ep=${searchParams.get("ep")?.split("?")[0]}` : params?.id)
    const ep = searchParams.get("ep")?.match(/[0-9]+\?ep+/) ? searchParams.get("ep")?.split("?")[1].slice(3) : searchParams.get("ep")
    const title = searchParams.get("q") || ""
    const userPreferredTitle = searchParams.get("userPreferredTitle") || ""
    const type = searchParams.get("type") || ""
    const [zoroInfo, setzoroInfo] = useState<ZeroAnimeInfo | null>(null)
    const [waitZoro, setWaitZero] = useState(false)
    const getZoroEpisodes = async () => {
        setWaitZero(true)
        try {
            const info = await zoro?.getZoroEpisodesWithInfo({ searchTitle: title, type, userPreferredTitle, episodes: 0 })
            info && setzoroInfo(info)
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

    return (
        zoroInfo && (
            <div className='flex flex-col px-2 md:flex-row space-x-2 space-y-2 w-full pt-20 min-h-screen'>

                {/* <div>wecome To Anime {ep}</div>
            <div>title {title}</div>
            <div>preferTitle {userPreferredTitle}</div>
            <div>id {id}</div> */}
                <div className='w-full md:w-2/3  rounded md:h-[360px] h-[200px] bg-gray-700'></div>
                <div className='w-full md:w-1/3 flex flex-col scrollbar-hide overflow-y-scroll md:h-[360px] h-[200px]' >
                    {
                        zoroInfo?.episodes?.map((item: ZeroEpisode, index: number) => <div className='text-white relative border-2 p-2 my-1  text-start navlinks font-thin rounded border-fuchsia-500 hover:bg-fuchsia-500' key={index + 21}>{item?.title}

                        </div>)

                    }
                </div>
            </div>)
    )
}

export default Watch