"use client"
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import anilist from '../api/anilist'
import Loading from '@/components/loading'
import Link from 'next/link'
import Image from 'next/image'

export default function Page() {
  const searchParams = useSearchParams()
  const id = searchParams.get("id")
  const mangaId = searchParams?.get("manga")
  const [mangaInfo,setMangaInfo] = useState<AnilistMediaInfo|null>()
  const [wait,setWait] = useState(false)
  const [waitChapter,setWaitChapter] = useState(false)
  const [chapters,setChapters] = useState<StreamingChapter | null>()

  const getMangaInfo = async()=>{
    setWait(true)
    try {
      const info = await anilist?.getMangaInfo(String(mangaId))
        setMangaInfo(info)
    } catch (error) {
      console.log(error) 
    }
    finally{
      setWait(false)
    }
  }
  
  const getStreamingChapters = async()=>{
    setWaitChapter(true)
    try {
      const pages = await anilist?.getStreamingChapter(String(id))
      setChapters(pages)
      
    } catch (error) {
      
    }finally{
      setWaitChapter(false)
    }
  }

  useEffect(()=>{
    
    getMangaInfo()
  },[mangaId])

  useEffect(()=>{
    getStreamingChapters()

  },[id])
  if(wait || waitChapter){
    return <Loading/>
  }

  return (mangaInfo&&
    <div className='flex flex-col-reverse md:flex-row w-full h-screen pt-20 min-h-screen'>
      <div className='flex flex-col space-y-3 overflow-y-scroll  scrollbar-hide p-4 w-full md:w-1/3'>
      {
        mangaInfo?.chapters?.filter(chapter => chapter.id.includes('/en/'))?.map(item=>
          <Link
          key={item.id}
          href={`/read?manga=${mangaId}&id=${item?.id}`}
          className={`w-full px-4 py-3 navlinks text-left text-lg font-semibold rounded-xl ${id==item?.id?" border-2 border-white":""} bg-gray-900 text-white transition-transform transform hover:scale-105 hover:shadow-lg`}
        >
         Chapter N° {item?.chapter}
        </Link>

        )
      }
      </div>
     <div className='flex w-full flex-col overflow-y-scroll scrollbar-hide md:w-2/3'>
     {
     chapters&&  chapters?.map(item=> <Image src={item?.img} key={item?.img}  width={800} height={1000}  alt={item?.img}/> )
     }
      
      </div>
      </div>
  )
}
