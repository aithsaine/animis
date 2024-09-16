"use client"
import React from 'react'
import EpisodeCard from './ui/episodeCard'

const episodes: EpisodeInfo[] =
  [
    {
      id: "174044",
      malId: "57947",
      title: {
        romaji: "Mayonaka Punch",
        english: "MAYONAKA PUNCH",
        native: "真夜中ぱんチ"
      },
      image: "https://artworks.thetvdb.com/banners/v4/series/445256/posters/65b410dfba1a5.jpg",
      imageHash: "hash",
      episodeId: "/mayonaka-punch-episode-11",
      episodeTitle: "Episode 11",
      episodeNumber: 11,
      type: "TV"
    },
    {
      id: "174044",
      malId: "57947",
      title: {
        romaji: "Na-Nare Hana-Nare",
        english: "MAYONAKA PUNCH",
        native: "真夜中ぱんチ"
      },
      image: "https://artworks.thetvdb.com/banners/v4/series/442054/posters/66684428ea8ce.jpg",
      imageHash: "hash",
      episodeId: "/mayonaka-punch-episode-11",
      episodeTitle: "Episode 11",
      episodeNumber: 11,
      type: "TV"
    }, {
      id: "174044",
      malId: "57947",
      title: {
        romaji: "Isekai Yururi Kikou: Kosodate Shinagara Boukensha Shimasu",
        english: "MAYONAKA PUNCH",
        native: "真夜中ぱんチ"
      },
      image: "https://artworks.thetvdb.com/banners/v4/series/442839/posters/6568300878985.jpg",
      imageHash: "hash",
      episodeId: "/mayonaka-punch-episode-11",
      episodeTitle: "Episode 11",
      episodeNumber: 11,
      type: "TV"
    }, {
      id: "174044",
      malId: "57947",
      title: {
        romaji: "Tsue to Tsurugi no Wistoria",
        english: "MAYONAKA PUNCH",
        native: "真夜中ぱんチ"
      },
      image: "https://artworks.thetvdb.com/banners/v4/series/445829/posters/660009d13fca0.jpg",
      imageHash: "hash",
      episodeId: "/mayonaka-punch-episode-11",
      episodeTitle: "Episode 11",
      episodeNumber: 11,
      type: "TV"
    }, {
      id: "174044",
      malId: "57947",
      title: {
        romaji: "FAIRY TAIL: 100 YEARS QUEST",
        english: "MAYONAKA PUNCH",
        native: "真夜中ぱんチ"
      },
      image: "https://media.kitsu.app/anime/45159/poster_image/d5b457ff66829e27cb9da82bc7ce6877.jpg",
      imageHash: "hash",
      episodeId: "/mayonaka-punch-episode-11",
      episodeTitle: "Episode 11",
      episodeNumber: 103,
      type: "TV"
    }, {
      id: "174044",
      malId: "57947",
      title: {
        romaji: "Mayonaka Punch",
        english: "MAYONAKA PUNCH",
        native: "真夜中ぱんチ"
      },
      image: "https://artworks.thetvdb.com/banners/v4/series/445256/posters/65b410dfba1a5.jpg",
      imageHash: "hash",
      episodeId: "/mayonaka-punch-episode-11",
      episodeTitle: "Episode 11",
      episodeNumber: 11,
      type: "TV"
    }, {
      id: "174044",
      malId: "57947",
      title: {
        romaji: "Mayonaka Punch",
        english: "MAYONAKA PUNCH",
        native: "真夜中ぱんチ"
      },
      image: "https://artworks.thetvdb.com/banners/v4/series/445256/posters/65b410dfba1a5.jpg",
      imageHash: "hash",
      episodeId: "/mayonaka-punch-episode-11",
      episodeTitle: "Episode 11",
      episodeNumber: 11,
      type: "TV"
    }, {
      id: "174044",
      malId: "57947",
      title: {
        romaji: "Mayonaka Punch",
        english: "MAYONAKA PUNCH",
        native: "真夜中ぱんチ"
      },
      image: "https://artworks.thetvdb.com/banners/v4/series/445256/posters/65b410dfba1a5.jpg",
      imageHash: "hash",
      episodeId: "/mayonaka-punch-episode-11",
      episodeTitle: "Episode 11",
      episodeNumber: 11,
      type: "TV"
    },
    {
      id: "174044",
      malId: "57947",
      title: {
        romaji: "Na-Nare Hana-Nare",
        english: "MAYONAKA PUNCH",
        native: "真夜中ぱんチ"
      },
      image: "https://artworks.thetvdb.com/banners/v4/series/442054/posters/66684428ea8ce.jpg",
      imageHash: "hash",
      episodeId: "/mayonaka-punch-episode-11",
      episodeTitle: "Episode 11",
      episodeNumber: 11,
      type: "TV"
    }, {
      id: "174044",
      malId: "57947",
      title: {
        romaji: "Isekai Yururi Kikou: Kosodate Shinagara Boukensha Shimasu",
        english: "MAYONAKA PUNCH",
        native: "真夜中ぱんチ"
      },
      image: "https://artworks.thetvdb.com/banners/v4/series/442839/posters/6568300878985.jpg",
      imageHash: "hash",
      episodeId: "/mayonaka-punch-episode-11",
      episodeTitle: "Episode 11",
      episodeNumber: 11,
      type: "TV"
    }, {
      id: "174044",
      malId: "57947",
      title: {
        romaji: "Tsue to Tsurugi no Wistoria",
        english: "MAYONAKA PUNCH",
        native: "真夜中ぱんチ"
      },
      image: "https://artworks.thetvdb.com/banners/v4/series/445829/posters/660009d13fca0.jpg",
      imageHash: "hash",
      episodeId: "/mayonaka-punch-episode-11",
      episodeTitle: "Episode 11",
      episodeNumber: 11,
      type: "TV"
    }, {
      id: "174044",
      malId: "57947",
      title: {
        romaji: "FAIRY TAIL: 100 YEARS QUEST",
        english: "MAYONAKA PUNCH",
        native: "真夜中ぱんチ"
      },
      image: "https://media.kitsu.app/anime/45159/poster_image/d5b457ff66829e27cb9da82bc7ce6877.jpg",
      imageHash: "hash",
      episodeId: "/mayonaka-punch-episode-11",
      episodeTitle: "Episode 11",
      episodeNumber: 103,
      type: "TV"
    }
  ]

export const RecentEpisodes = () => {
  return (
    <div className='flex flex-col'>
      < h1 className=" ms-2  text-pretty navlinks text-white text-2xl" > Recent Episodes:</h1 >
      <div className='flex justify-around flex-wrap'>

        {
          episodes.map((episode: EpisodeInfo) => <EpisodeCard episode={episode} />)
        }
        <button className='p-2 m-1 bg-fuchsia-950 navlinks text-white rounded w-full'>More..</button>
      </div>
    </div >
  )
}
