'use client'
import React from 'react'
import { motion } from "framer-motion"
const EpisodeCard = ({ episode }: { episode: EpisodeInfo }) => {
    return (
        <motion.div
            key={episode.episodeTitle}
            title={episode.episodeTitle}
            className="relative flex flex-col w-[200px] h-[350px] rounded-md overflow-hidden cursor-pointer shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <img className="group-hover:bg-opacity-45" alt={episode.episodeTitle} src={episode.image} width={200} height={300} />
            <span className='navlinks text-xs'>{episode.type} | Ep {episode.episodeNumber}</span>

            <motion.div
                className="absolute inset-0 bottom-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 transition-opacity duration-400 ease-in-out hover:opacity-100"
            >
                {/* Play and Save Icons */}

                {/* Anime Title */}
                <h1 className="text-white font-semibold text-lg">
                    {episode.title.romaji}
                </h1>

            </motion.div>
        </motion.div>
    )
}

export default EpisodeCard