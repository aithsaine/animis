"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  EffectCreative,
  Autoplay,
} from "swiper/modules";
import { BookmarkIcon, PlayCircleIcon } from "@heroicons/react/24/outline";
import { useAuth } from "@/hooks/useAuth";
import { useDispatch } from "react-redux";
import { toggleModalAuth } from "@/redux/actions/actionCreator";
import Link from "next/link";

const Caroussel = () => {
  const { user, loading } = useAuth();
  const dispatch = useDispatch();

  const animes = [
    {
      id: 20605,
      title: "TOKYO GHOUL",
      year: "2014",
      type: "TV Series",
      poster:
        "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx20605-fmnHdfurM7m6.jpg",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20605-RCJ7M71zLmrh.jpg",
      category: "Horror",
    },
    {
      id: 21,
      title: "ONE PIECE",
      year: "1999",
      type: "TV Series",
      poster:
        "https://image.tmdb.org/t/p/original/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
      cover:
        "https://image.tmdb.org/t/p/original/a6ptrTUH1c5OdWanjyYtAkOuYD0.jpg",
      category: "action",
    },
    {
      id: 97940,
      title: "BLACK CLOVER",
      year: "2017",
      type: "TV Series",
      poster:
        "https://image.tmdb.org/t/p/original/kaMisKeOoTBPxPkbC3OW7Wgt6ON.jpg",
      cover:
        "https://s4.anilist.co/file/anilistcdn/media/anime/banner/97940-1URQdQ4U1a0b.jpg",
      category: "action",
    },
  ];

  return (
    <div className="flex text-white justify-center items-center h-full pt-10 ">
      {
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          effect={"creative"}
          creativeEffect={{
            prev: {
              translate: ["-100%", 0, -400],
            },
            next: {
              translate: ["100%", 0, -400],
            },
          }}
          modules={[EffectCreative, Autoplay]}
          className="h-[500px] w-full mt-[-3rem]"
        >
          {animes?.map((anime,index:number) => (
            <SwiperSlide
            key={index}
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.05), black 100%), url(${
                  window.innerWidth > 700 ? anime?.cover : anime?.poster
                })`,
                backgroundOrigin: "inherit",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundClip: "revert-layer",
              }}
              className="flex items-center  justify-center  text-2xl font-bold"
            >
              <div className="w-full flex h-full">
                <div className="md:w-1/2 backdrop-blur-0 flex  flex-col space-y-4 h-full items-center justify-end md:justify-center">
                  <h1
                    title={anime?.title}
                    className="w-auto text-4xl font-serif font-bold md:text-6xl text-ellipsis"
                  >
                    {anime?.title}
                  </h1>
                  {/* <p className='text-lg font-serif text-white text-justify w-2/3'>Takuma isn’t the most exciting guy. He’s awkward, single, and does nothing but go to work and come home. Tired of doing chores, he decides to buy a housekeeping robot named Mina. She can cook...</p> */}
                  <p className="text-sm">
                    {anime?.year} | {anime?.category} | {anime?.type}
                  </p>
                  <div className="flex w-full justify-center space-x-3">
                    <Link href={`/media/${anime?.id}`}
                      
                      className="relative text-lg flex items-center border-2 border-fuchsia-700 p-2 space-x-2 rounded-2xl 
             hover:bg-fuchsia-700 hover:text-black backdrop-blur-xl bg-white/30"
                    >
                      <PlayCircleIcon className="w-6" /> Watch Now
                    </Link>

                    <button
                      onClick={() => {
                        if (!loading && !user) {
                          dispatch(toggleModalAuth(true));
                        }
                      }}
                      className="relative text-lg flex items-center border-2 border-fuchsia-700 p-2 space-x-2 rounded-2xl 
                      hover:bg-fuchsia-700 hover:text-black backdrop-blur-xl bg-white/30"
                    >
                      <BookmarkIcon className="w-6" /> Add Favorit
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      }
    </div>
  );
};

export default Caroussel;
