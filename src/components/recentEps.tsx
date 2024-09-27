"use client"
import React from 'react'
import EpisodeCard from './ui/episodeCard'

const episodes: EpisodeInfo[] =
  [
    {
      "id": "152137",
      "malId": "52367",
      "title": {
        "romaji": "Isekai Shikkaku",
        "english": "No Longer Allowed in Another World",
        "native": "異世界失格"
      },
      "image": "https://artworks.thetvdb.com/banners/v4/series/422250/posters/65c31797bac18.jpg",
      "imageHash": "hash",
      "episodeId": "/isekai-shikkaku-episode-11",
      "episodeTitle": "Episode 11",
      "episodeNumber": 11,
      "type": "TV"
    },
    {
      "id": "145728",
      "malId": "51122",
      "title": {
        "romaji": "Ookami to Koushinryou: MERCHANT MEETS THE WISE WOLF",
        "english": "Spice and Wolf: MERCHANT MEETS THE WISE WOLF",
        "native": "狼と香辛料 MERCHANT MEETS THE WISE WOLF"
      },
      "image": "https://artworks.thetvdb.com/banners/v4/series/417147/posters/6601409b9a27f.jpg",
      "imageHash": "hash",
      "episodeId": "/ookami-to-koushinryou-merchant-meets-the-wise-wolf-episode-24",
      "episodeTitle": "Episode 24",
      "episodeNumber": 24,
      "type": "TV"
    },
    {
      "id": "173295",
      "malId": "57810",
      "title": {
        "romaji": "Shoushimin Series",
        "english": "SHOSHIMIN: How to Become Ordinary",
        "native": "小市民シリーズ"
      },
      "image": "https://artworks.thetvdb.com/banners/v4/series/444609/posters/66632fb9ce1eb.jpg",
      "imageHash": "hash",
      "episodeId": "/shoushimin-series-episode-10",
      "episodeTitle": "Episode 10",
      "episodeNumber": 10,
      "type": "TV"
    },
    {
      "id": "174044",
      "malId": "57947",
      "title": {
        "romaji": "Mayonaka Punch",
        "english": "MAYONAKA PUNCH",
        "native": "真夜中ぱんチ"
      },
      "image": "https://artworks.thetvdb.com/banners/v4/series/445256/posters/65b410dfba1a5.jpg",
      "imageHash": "hash",
      "episodeId": "/mayonaka-punch-episode-11",
      "episodeTitle": "Episode 11",
      "episodeNumber": 11,
      "type": "TV"
    },

    {
      "id": "174576",
      "malId": "58059",
      "title": {
        "romaji": "Tsue to Tsurugi no Wistoria",
        "english": "Wistoria: Wand and Sword",
        "native": "杖と剣のウィストリア"
      },
      "image": "https://artworks.thetvdb.com/banners/v4/series/445829/posters/660009d13fca0.jpg",
      "imageHash": "hash",
      "episodeId": "/tsue-to-tsurugi-no-wistoria-episode-10",
      "episodeTitle": "Episode 10",
      "episodeNumber": 10,
      "type": "TV"
    },

    {
      "id": "158898",
      "malId": "53865",
      "title": {
        "romaji": "Yozakura-san Chi no Daisakusen",
        "english": "Mission: Yozakura Family",
        "native": "夜桜さんちの大作戦"
      },
      "image": "https://artworks.thetvdb.com/banners/v4/series/424019/posters/66131d582f232.jpg",
      "imageHash": "hash",
      "episodeId": "/yozakura-san-chi-no-daisakusen-episode-24",
      "episodeTitle": "Episode 24",
      "episodeNumber": 24,
      "type": "TV"
    },

    {
      "id": "173295",
      "malId": "57810",
      "title": {
        "romaji": "Shoushimin Series",
        "english": "SHOSHIMIN: How to Become Ordinary",
        "native": "小市民シリーズ"
      },
      "image": "https://artworks.thetvdb.com/banners/v4/series/444609/posters/66632fb9ce1eb.jpg",
      "imageHash": "hash",
      "episodeId": "/shoushimin-series-episode-10",
      "episodeTitle": "Episode 10",
      "episodeNumber": 10,
      "type": "TV"
    },
    {
      "id": "171457",
      "malId": "57524",
      "title": {
        "romaji": "Make Heroine ga Oosugiru!",
        "english": "Makeine: Too Many Losing Heroines!",
        "native": "負けヒロインが多すぎる！"
      },
      "image": "https://artworks.thetvdb.com/banners/v4/series/443377/posters/6668852a315dc.jpg",
      "imageHash": "hash",
      "episodeId": "/make-heroine-ga-oosugiru-episode-10",
      "episodeTitle": "Episode 10",
      "episodeNumber": 10,
      "type": "TV"
    },
    {
      "id": "166910",
      "malId": "55911",
      "title": {
        "romaji": "The Fable",
        "english": "The Fable",
        "native": "ザ・ファブル"
      },
      "image": "https://artworks.thetvdb.com/banners/v4/series/436948/posters/6678d3bd6f91a.jpg",
      "imageHash": "hash",
      "episodeId": "/the-fable-episode-23",
      "episodeTitle": "Episode 23",
      "episodeNumber": 23,
      "type": "TV"
    }
  ]

export const RecentEpisodes = () => {
  return (
    <div className='flex flex-col py-5'>
      < h1 className=" px-5 py-9 text-pretty navlinks text-white text-2xl" > Recent Episodes:</h1 >
      <div className='flex justify-around flex-wrap'>

        {
          episodes.map((episode: EpisodeInfo, number: number) => <EpisodeCard key={number} episode={episode} />)
        }
        <button className='p-2 m-1 bg-gradient-to-r from-slate-900 via-slate-600  to-gray-900 hover:bg-gray-900 navlinks text-white rounded w-full'>More..</button>
      </div>
    </div >
  )
}
