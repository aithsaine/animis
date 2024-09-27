'use client'
import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'
import { TvIcon } from '@heroicons/react/24/outline'
const EpisodeCard = ({ episode }: { episode: EpisodeInfo }) => {
    return (
        <Link href={`/media/${episode.id}`}>
            <motion.div
                key={episode.episodeTitle}
                title={episode.episodeTitle}
                className="relative group flex flex-col rounded-md overflow-hidden cursor-pointer m-2 shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
            >
                <span className="top-1 px-1 transition duration-300 ease-in-out flex group-hover:opacity-100 space-x-1 navlinks     text-white  z-40 absolute left-2 bg-amber-700 rounded-full"><TvIcon className="w-4 h-4 p-0.5 " /><span className="hidden group-hover:block text-xs">{episode.type}</span></span>

                <img className="group-hover:bg-opacity-45" alt={episode.episodeTitle} src={episode.image} width={200} height={300} />

                <motion.div
                    className="absolute w-full h-full text-center navlinks inset-0 bottom-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 transition-opacity duration-400 ease-in-out hover:opacity-100"
                >
                    {/* Play and Save Icons */}

                    {/* Anime Title */}
                    <h1 className="text-white navlinks font-semibold text-lg">
                        {episode.title.romaji}
                    </h1>

                </motion.div>
            </motion.div>
        </Link>
    )
}

export default EpisodeCard