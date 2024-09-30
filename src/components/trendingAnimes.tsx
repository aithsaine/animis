"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import AnimeCard from './ui/animeCard'
import { StatesType } from '@/redux/reducers/mainReducer'
import anilist from '@/app/api/anilist'
import { GoToNextPopularPage } from '@/redux/actions/actionCreator'
import { Puff } from "react-loading-icons"



export const TrendingAnimes = () => {
  const [wait, setWait] = useState(true)
  const dispatch = useDispatch()
  const { trendingPage, trendingAnimes } = useSelector((state: StatesType) => state)

  const fetchTrendingAnimes = async (page: number) => {
    setWait(true)
    try {
      const animes = await anilist.getTrendingAnimes(page)
      dispatch(GoToNextPopularPage(animes))
    } catch (error) {
      console.log(error)
    } finally {
      setWait(false)
    }

  }

  useEffect(() => {
    fetchTrendingAnimes(trendingPage)
  }, [])
  return (
    <div className='flex flex-col py-5'>
      < h1 className=" px-5 py-9 text-pretty navlinks text-white text-2xl" > Trending Animes:</h1 >
      <div className=' cursor-auto grid grid-cols-1  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 '>
        {
          (true) && trendingAnimes?.map((anime, index: number) =>
            <AnimeCard key={index} anime={{ ...anime, id: anime?.id, releaseDate: Number(anime?.releaseDate), title: anime.title?.romaji, type: anime?.type }} />
          )
        }{

          (trendingAnimes.length == 0) && Array.from({ length: 12 }).map((item, index: number) => <div key={index} className="sm:w-[170px] animate-pulse w-[150px] h-[250px] rounded-md overflow-hidden  m-2 shadow-md bg-slate-900">
          </div>
          )

        }

      </div>
      <button onClick={() => fetchTrendingAnimes(trendingPage)} className='p-2 m-1 h-[40px] flex items-center justify-center bg-gradient-to-r from-slate-900 via-slate-600 text-center to-gray-900 hover:bg-gray-900 navlinks text-white rounded w-full'>{wait ? <Puff className='w-4' />
        : "More.."}</button>
    </div >
  )
}
