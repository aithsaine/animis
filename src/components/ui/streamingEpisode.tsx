import { PlayCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

type Props = {
    title: string,
    thumbnail: string,
    episodeNumber: number
}
export default function StreamingEpisode({ title, thumbnail, episodeNumber }: Props) {
    return (
        <div className="flex group w-[180px] flex-col">

            <div
                style={{
                    backgroundImage: `url(${thumbnail})`,
                    backgroundSize: "cover"
                }}
                className='rounded relative transform group-hover:scale-105 transition-transform duration-500 ease-in-out w-full  flex items-center justify-center  h-[100px] bg-red-300'>
                <span className="absolute top-1 left-2 text-white text-xs group-hover:block hidden font-serif">Episode {episodeNumber}</span>
                <PlayCircleIcon className='w-14 hidden group-hover:block text-white' />
            </div>
            <p className='navlinks text-sm text-start'>{title}</p>
        </div>
    )
}
