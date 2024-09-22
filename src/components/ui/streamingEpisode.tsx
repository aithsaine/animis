import { PlayCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

type Props = {
    title: string,
    thumbnail: string
}
export default function StreamingEpisode({ title, thumbnail }: Props) {
    return (
        <div className="flex group w-[180px] flex-col">

            <div
                style={{
                    backgroundImage: `url(${thumbnail})`,
                    backgroundSize: "cover"
                }}
                className='rounded transform group-hover:scale-105 transition-transform duration-500 ease-in-out w-full  flex items-center justify-center  h-[100px] bg-red-300'>
                <PlayCircleIcon className='w-14 hidden group-hover:block text-white' />
            </div>
            <p className='navlinks text-sm text-start'>{title}</p>
        </div>
    )
}
