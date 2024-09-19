"use client"
import React, { useState, useEffect } from 'react'
import { useDispatch } from "react-redux"
import { toggleModalAuth } from '@/redux/actions/actionCreator'
import { useAuth } from '@/hooks/useAuth'
import { BookmarkIcon, PlayCircleIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import { motion } from "framer-motion"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import AnimeCard from '@/components/ui/animeCard'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const MetaMedia: MetaMediaInfo = {
    "id": "105333",
    "title": {
        "romaji": "Dr. STONE",
        "english": "Dr. STONE",
        "native": "Dr.STONE"
    },
    "malId": 38691,
    "synonyms": [
        "Dcst",
        "石纪元",
        "ドクターストーン",
        "ดร.สโตน เจ้าแห่งวิทยาศาสตร์กู้คืนอารยธรรมโลก"
    ],
    "isLicensed": true,
    "isAdult": false,
    "countryOfOrigin": "JP",
    "trailer": {
        "id": "7YZzYeBartM",
        "site": "youtube",
        "thumbnail": "https://i.ytimg.com/vi/7YZzYeBartM/hqdefault.jpg",
        "thumbnailHash": "hash"
    },
    "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
    "imageHash": "hash",
    "popularity": 421739,
    "color": "#788628",
    "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
    "coverHash": "hash",
    "description": "After five years of harboring unspoken feelings, high-schooler Taiju Ooki is finally ready to confess his love to Yuzuriha Ogawa. Just when Taiju begins his confession however, a blinding green light strikes the Earth and petrifies mankind around the world— turning every single human into stone.\n<br><br>\nSeveral millennia later, Taiju awakens to find the modern world completely nonexistent, as nature has flourished in the years humanity stood still. Among a stone world of statues, Taiju encounters one other living human: his science-loving friend Senkuu, who has been active for a few months. Taiju learns that Senkuu has developed a grand scheme—to launch the complete revival of civilization with science. Taiju's brawn and Senkuu's brains combine to forge a formidable partnership, and they soon uncover a method to revive those petrified.\n<br><br>\nHowever, Senkuu's master plan is threatened when his ideologies are challenged by those who awaken. All the while, the reason for mankind's petrification remains unknown.\n<br><br>\n(Source: MAL Rewrite)",
    "status": "Completed",
    "releaseDate": 2019,
    "startDate": {
        "year": 2019,
        "month": 7,
        "day": 5
    },
    "endDate": {
        "year": 2019,
        "month": 12,
        "day": 13
    },
    "totalEpisodes": 24,
    "currentEpisode": 24,
    "rating": 81,
    "duration": 24,
    "genres": [
        "Action",
        "Adventure",
        "Comedy",
        "Sci-Fi"
    ],
    "season": "SUMMER",
    "studios": [
        "TMS Entertainment"
    ],
    "subOrDub": "sub",
    "type": "TV",
    "recommendations": [
        {
            "id": 108268,
            "malId": 39468,
            "title": {
                "romaji": "Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen",
                "english": "Ascendance of a Bookworm",
                "native": "本好きの下剋上 司書になるためには手段を選んでいられません",
                "userPreferred": "Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen"
            },
            "status": "Completed",
            "episodes": 14,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108268-eRkvln6eoChs.jpg",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108268-JbUzGiUlmCTy.jpg",
            "coverHash": "hash",
            "rating": 78,
            "type": "TV"
        },
        {
            "id": 105807,
            "malId": 38735,
            "title": {
                "romaji": "7SEEDS",
                "english": "7SEEDS",
                "native": "7SEEDS",
                "userPreferred": "7SEEDS"
            },
            "status": "Completed",
            "episodes": 12,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105807-cq1TUGWJmvRE.jpg",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105807-cq1TUGWJmvRE.jpg",
            "coverHash": "hash",
            "rating": 63,
            "type": "ONA"
        },
        {
            "id": 107663,
            "malId": 39198,
            "title": {
                "romaji": "Kanata no Astra",
                "english": "ASTRA LOST IN SPACE",
                "native": "彼方のアストラ",
                "userPreferred": "Kanata no Astra"
            },
            "status": "Completed",
            "episodes": 12,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx107663-eDkgpoa4UWhN.jpg",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/107663-tIwWetvU4k6W.jpg",
            "coverHash": "hash",
            "rating": 78,
            "type": "TV"
        },
        {
            "id": 108388,
            "malId": 39523,
            "title": {
                "romaji": "Choujin Koukousei-tachi wa Isekai demo Yoyuu de Ikinuku you desu!",
                "english": "High School Prodigies Have It Easy Even In Another World",
                "native": "超人高校生たちは異世界でも余裕で生き抜くようです!",
                "userPreferred": "Choujin Koukousei-tachi wa Isekai demo Yoyuu de Ikinuku you desu!"
            },
            "status": "Completed",
            "episodes": 12,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108388-DV17bODJAKlR.jpg",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108388-eZP0Niki1Ca2.jpg",
            "coverHash": "hash",
            "rating": 61,
            "type": "TV"
        },
        {
            "id": 100977,
            "malId": 37141,
            "title": {
                "romaji": "Hataraku Saibou",
                "english": "Cells at Work!",
                "native": "はたらく細胞",
                "userPreferred": "Hataraku Saibou"
            },
            "status": "Completed",
            "episodes": 13,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/b100977-ANZk4PFfqNAb.jpg",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n100977-IztHpiaTckCh.jpg",
            "coverHash": "hash",
            "rating": 73,
            "type": "TV"
        },
        {
            "id": 20923,
            "malId": 28171,
            "title": {
                "romaji": "Shokugeki no Souma",
                "english": "Food Wars!",
                "native": "食戟のソーマ",
                "userPreferred": "Shokugeki no Souma"
            },
            "status": "Completed",
            "episodes": 24,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20923-XbHSitEDhaxx.jpg",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20923-9tFdZ5hIrRiF.png",
            "coverHash": "hash",
            "rating": 79,
            "type": "TV"
        },
        {
            "id": 12431,
            "malId": 12431,
            "title": {
                "romaji": "Uchuu Kyoudai",
                "english": "Space Brothers",
                "native": "宇宙兄弟",
                "userPreferred": "Uchuu Kyoudai"
            },
            "status": "Completed",
            "episodes": 99,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx12431-U8HbfcuLihBp.png",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/12431-L8FNRD2Ylvei.jpg",
            "coverHash": "hash",
            "rating": 83,
            "type": "TV"
        },
        {
            "id": 101280,
            "malId": 37430,
            "title": {
                "romaji": "Tensei Shitara Slime Datta Ken",
                "english": "That Time I Got Reincarnated as a Slime",
                "native": "転生したらスライムだった件",
                "userPreferred": "Tensei Shitara Slime Datta Ken"
            },
            "status": "Completed",
            "episodes": 24,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101280-ezBXqEHi8pg0.jpg",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101280-9t7J3774n955.jpg",
            "coverHash": "hash",
            "rating": 80,
            "type": "TV"
        },
        {
            "id": 97986,
            "malId": 34599,
            "title": {
                "romaji": "Made in Abyss",
                "english": "Made in Abyss",
                "native": "メイドインアビス",
                "userPreferred": "Made in Abyss"
            },
            "status": "Completed",
            "episodes": 13,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97986-tXLonOO0vhHb.jpg",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/97986-C55UnbJKB7ZF.jpg",
            "coverHash": "hash",
            "rating": 85,
            "type": "TV"
        },
        {
            "id": 17265,
            "malId": 17265,
            "title": {
                "romaji": "Log Horizon",
                "english": "Log Horizon",
                "native": "ログ・ホライズン",
                "userPreferred": "Log Horizon"
            },
            "status": "Completed",
            "episodes": 25,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx17265-95SA9keO8Jtv.jpg",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/17265-53eBCC34SKyM.jpg",
            "coverHash": "hash",
            "rating": 76,
            "type": "TV"
        },
        {
            "id": 107067,
            "malId": 38992,
            "title": {
                "romaji": "Rikei ga Koi ni Ochita no de Shoumei shitemita.",
                "english": "Science Fell in Love, So I Tried to Prove It",
                "native": "理系が恋に落ちたので証明してみた。",
                "userPreferred": "Rikei ga Koi ni Ochita no de Shoumei shitemita."
            },
            "status": "Completed",
            "episodes": 12,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx107067-UOEanLoeuvYh.png",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/107067-QWr4Ity7NZbx.jpg",
            "coverHash": "hash",
            "rating": 72,
            "type": "ONA"
        },
        {
            "id": 21824,
            "malId": 33341,
            "title": {
                "romaji": "Time Travel Shoujo: Mari Waka to 8-nin no Kagakusha-tachi",
                "english": "Time Travel Girl",
                "native": "タイムトラベル少女～マリ・ワカと8人の科学者たち～",
                "userPreferred": "Time Travel Shoujo: Mari Waka to 8-nin no Kagakusha-tachi"
            },
            "status": "Completed",
            "episodes": 12,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21824-HpGRQlvbgLNW.png",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21824-HpGRQlvbgLNW.png",
            "coverHash": "hash",
            "rating": 61,
            "type": "TV"
        },
        {
            "id": 116055,
            "malId": 30278,
            "title": {
                "romaji": "Ghost Messenger Movie",
                "english": "Ghost Messenger",
                "native": "고스트 메신저 극장판",
                "userPreferred": "Ghost Messenger Movie"
            },
            "status": "Completed",
            "episodes": 1,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116055-qraqMaiLxTjt.jpg",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx116055-qraqMaiLxTjt.jpg",
            "coverHash": "hash",
            "rating": 51,
            "type": "MOVIE"
        },
        {
            "id": 112444,
            "malId": 40532,
            "title": {
                "romaji": "Appare-Ranman!",
                "english": "APPARE-RANMAN!",
                "native": "天晴爛漫！",
                "userPreferred": "Appare-Ranman!"
            },
            "status": "Completed",
            "episodes": 13,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx112444-S7bhKskrAqSI.jpg",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/112444-jl2dffsH64I7.jpg",
            "coverHash": "hash",
            "rating": 70,
            "type": "TV"
        },
        {
            "id": 113693,
            "malId": 40815,
            "title": {
                "romaji": "Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen 2nd Season",
                "english": "Ascendance of a Bookworm Part 2",
                "native": "本好きの下剋上 司書になるためには手段を選んでいられません 第2期",
                "userPreferred": "Honzuki no Gekokujou: Shisho ni Naru Tame ni wa Shudan wo Erandeiraremasen 2nd Season"
            },
            "status": "Completed",
            "episodes": 12,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113693-3tHbslFxD47R.jpg",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113693-i9Wm6xjTlQGQ.jpg",
            "coverHash": "hash",
            "rating": 79,
            "type": "TV"
        },
        {
            "id": 302,
            "malId": 302,
            "title": {
                "romaji": "Mirai Shounen Conan",
                "english": "Future Boy Conan",
                "native": "未来少年コナン",
                "userPreferred": "Mirai Shounen Conan"
            },
            "status": "Completed",
            "episodes": 26,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/302-S5gpJhVePiNq.png",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/302-6lfV0hg7KVj1.jpg",
            "coverHash": "hash",
            "rating": 77,
            "type": "TV"
        },
        {
            "id": 709,
            "malId": 709,
            "title": {
                "romaji": "Mujin Wakusei Survive",
                "english": null,
                "native": "無人惑星サヴァイヴ",
                "userPreferred": "Mujin Wakusei Survive"
            },
            "status": "Completed",
            "episodes": 52,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx709-VbLR6kLmYRxv.jpg",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/709-yZhiELkWfzZQ.jpg",
            "coverHash": "hash",
            "rating": 75,
            "type": "TV"
        },
        {
            "id": 21364,
            "malId": 31637,
            "title": {
                "romaji": "GATE: Jieitai Kanochi nite, Kaku Tatakaeri 2",
                "english": "Gate 2",
                "native": "GATE 自衛隊 彼の地にて、斯く戦えり 2",
                "userPreferred": "GATE: Jieitai Kanochi nite, Kaku Tatakaeri 2"
            },
            "status": "Completed",
            "episodes": 12,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21364-6ikYd5J46dt0.jpg",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21364-e2myFtThuuVC.jpg",
            "coverHash": "hash",
            "rating": 75,
            "type": "TV"
        },
        {
            "id": 3001,
            "malId": 3001,
            "title": {
                "romaji": "Moyashimon",
                "english": null,
                "native": "もやしもん",
                "userPreferred": "Moyashimon"
            },
            "status": "Completed",
            "episodes": 11,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx3001-MhrRs4v3tCPs.png",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/3001-xsTcQO6yqoxP.jpg",
            "coverHash": "hash",
            "rating": 72,
            "type": "TV"
        },
        {
            "id": 108111,
            "malId": 39456,
            "title": {
                "romaji": "Sounan desu ka?",
                "english": "Are You Lost?",
                "native": "ソウナンですか？",
                "userPreferred": "Sounan desu ka?"
            },
            "status": "Completed",
            "episodes": 12,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108111-SSkE9VuTPL2w.jpg",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108111-jKEczkIqKQqT.jpg",
            "coverHash": "hash",
            "rating": 63,
            "type": "TV_SHORT"
        },
        {
            "id": 108631,
            "malId": 39586,
            "title": {
                "romaji": "Hataraku Saibou!!",
                "english": "Cells at Work!!",
                "native": "はたらく細胞!!",
                "userPreferred": "Hataraku Saibou!!"
            },
            "status": "Completed",
            "episodes": 8,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108631-R3yjfHmOJDET.jpg",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108631-NnAkKEveLSlc.jpg",
            "coverHash": "hash",
            "rating": 72,
            "type": "TV"
        },
        {
            "id": 117696,
            "malId": 41762,
            "title": {
                "romaji": "Tenchi Souzou Design-bu",
                "english": "Heaven’s Design Team",
                "native": "天地創造デザイン部",
                "userPreferred": "Tenchi Souzou Design-bu"
            },
            "status": "Completed",
            "episodes": 12,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx117696-oqodbcesiazN.jpg",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/117696-VdaMljYfJT0h.jpg",
            "coverHash": "hash",
            "rating": 69,
            "type": "TV"
        },
        {
            "id": 6610,
            "malId": 6610,
            "title": {
                "romaji": "Ibara no Ou: King of Thorn",
                "english": "King of Thorn",
                "native": "いばらの王 -King of Thorn-",
                "userPreferred": "Ibara no Ou: King of Thorn"
            },
            "status": "Completed",
            "episodes": 1,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/6610.jpg",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n6610-dU539ywie9Da.jpg",
            "coverHash": "hash",
            "rating": 64,
            "type": "MOVIE"
        },
        {
            "id": 114535,
            "malId": 41025,
            "title": {
                "romaji": "Fumetsu no Anata e",
                "english": "To Your Eternity",
                "native": "不滅のあなたへ",
                "userPreferred": "Fumetsu no Anata e"
            },
            "status": "Completed",
            "episodes": 20,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx114535-y3NnjexcqKG1.jpg",
            "imageHash": "hash",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/114535-ASUprf4AsNwC.jpg",
            "coverHash": "hash",
            "rating": 81,
            "type": "TV"
        }
    ],
    "characters": [
        {
            "id": 124142,
            "role": "MAIN",
            "name": {
                "first": "Senkuu",
                "last": "Ishigami",
                "full": "Senkuu Ishigami",
                "native": "石神千空",
                "userPreferred": "Senkuu Ishigami"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b124142-fFBZo37G0pao.png",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 118407,
                    "language": "Japanese",
                    "name": {
                        "first": "Yuusuke",
                        "last": "Kobayashi",
                        "full": "Yuusuke Kobayashi",
                        "native": "小林裕介",
                        "userPreferred": "Yuusuke Kobayashi"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n118407-QvEt3bGtuRQM.png",
                    "imageHash": "hash"
                },
                {
                    "id": 105071,
                    "language": "Japanese",
                    "name": {
                        "first": "Mikako",
                        "last": "Komatsu",
                        "full": "Mikako Komatsu",
                        "native": "小松未可子",
                        "userPreferred": "Mikako Komatsu"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n105071-Hcj0X2gcliPq.png",
                    "imageHash": "hash"
                },
                {
                    "id": 95254,
                    "language": "English",
                    "name": {
                        "first": "Aaron",
                        "last": "Dismuke",
                        "full": "Aaron Dismuke",
                        "native": null,
                        "userPreferred": "Aaron Mitchell  Dismuke"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/95254-xJ1ehSZtmMsE.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 157484,
                    "language": "Italian",
                    "name": {
                        "first": "Jacopo",
                        "last": "Calatroni",
                        "full": "Jacopo Calatroni",
                        "native": null,
                        "userPreferred": "Jacopo Calatroni"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n157484-s0pcFLG0e3Pz.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 182229,
                    "language": "Spanish",
                    "name": {
                        "first": "Alejandro",
                        "last": "Orozco",
                        "full": "Alejandro Orozco",
                        "native": "Alejandro Orozco Antúnez",
                        "userPreferred": "Alejandro Orozco"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n182229-45duKmz9Eupa.png",
                    "imageHash": "hash"
                },
                {
                    "id": 153004,
                    "language": "Portuguese",
                    "name": {
                        "first": "Felipe",
                        "last": "Grinnan",
                        "full": "Felipe Grinnan",
                        "native": null,
                        "userPreferred": "Felipe Grinnan"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n153004-CgGmVAsohWRg.png",
                    "imageHash": "hash"
                },
                {
                    "id": 116395,
                    "language": "French",
                    "name": {
                        "first": "Maxime",
                        "last": "Donnay",
                        "full": "Maxime Donnay",
                        "native": null,
                        "userPreferred": "Maxime Donnay"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/21395.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 132486,
                    "language": "German",
                    "name": {
                        "first": "Tim",
                        "last": "Schwarzmaier",
                        "full": "Tim Schwarzmaier",
                        "native": null,
                        "userPreferred": "Tim Schwarzmaier"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n132486-VQ8o7ToC8ij7.png",
                    "imageHash": "hash"
                },
                {
                    "id": 133026,
                    "language": "German",
                    "name": {
                        "first": "Laurine",
                        "last": "Betz",
                        "full": "Laurine Betz",
                        "native": null,
                        "userPreferred": "Laurine Betz"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n133026-vAXGKoZOij0U.png",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 124145,
            "role": "MAIN",
            "name": {
                "first": "Chrome",
                "last": null,
                "full": "Chrome",
                "native": "クロム",
                "userPreferred": "Chrome"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b124145-EEvQmsj8jku4.png",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 141083,
                    "language": "Japanese",
                    "name": {
                        "first": "Gen",
                        "last": "Satou",
                        "full": "Gen Satou",
                        "native": "佐藤元",
                        "userPreferred": "Gen Satou"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n141083-Oc5rYAP6e3D7.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 129217,
                    "language": "English",
                    "name": {
                        "first": "Matt",
                        "last": "Shipman",
                        "full": "Matt Shipman",
                        "native": null,
                        "userPreferred": "Matt Shipman"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n129217-OyigTIiyseI9.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 159631,
                    "language": "Italian",
                    "name": {
                        "first": "Andrea",
                        "last": "Oldani",
                        "full": "Andrea Oldani",
                        "native": null,
                        "userPreferred": "Andrea Oldani"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n159631-okKoTeucFaB3.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 184136,
                    "language": "Spanish",
                    "name": {
                        "first": "José Luis",
                        "last": "Piedra",
                        "full": "José Luis Piedra",
                        "native": null,
                        "userPreferred": "José Luis Piedra"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n184136-P5OErpyW1HSF.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 125007,
                    "language": "Portuguese",
                    "name": {
                        "first": "Renan",
                        "last": "Alonso",
                        "full": "Renan Alonso",
                        "native": null,
                        "userPreferred": "Renan Alonso"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n125007-2NGGCGqXr2NB.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 104935,
                    "language": "French",
                    "name": {
                        "first": "Grégory",
                        "last": "Praet",
                        "full": "Grégory Praet",
                        "native": null,
                        "userPreferred": "Grégory Praet"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n104935-iWRWHjUvrCiA.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 177218,
                    "language": "German",
                    "name": {
                        "first": "Julian",
                        "last": "Tennstedt",
                        "full": "Julian Tennstedt",
                        "native": null,
                        "userPreferred": "Julian Tennstedt"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n177218-cURKNXHbg6LT.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 138238,
                    "language": "German",
                    "name": {
                        "first": "Melinda",
                        "last": "Rachfahl",
                        "full": "Melinda Rachfahl",
                        "native": null,
                        "userPreferred": "Melinda Rachfahl"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n138238-91AAoUEBzO2e.png",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 124144,
            "role": "MAIN",
            "name": {
                "first": "Tsukasa",
                "last": "Shishiou",
                "full": "Tsukasa Shishiou",
                "native": "獅子王司",
                "userPreferred": "Tsukasa Shishiou"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b124144-KOjcmhunbvYn.png",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 95513,
                    "language": "Japanese",
                    "name": {
                        "first": "Yuuichi",
                        "last": "Nakamura",
                        "full": "Yuuichi Nakamura",
                        "native": "中村悠一",
                        "userPreferred": "Yuuichi Nakamura"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95513-up9ZDuocHgRs.png",
                    "imageHash": "hash"
                },
                {
                    "id": 104087,
                    "language": "English",
                    "name": {
                        "first": "Ian",
                        "last": "Sinclair",
                        "full": "Ian Sinclair",
                        "native": null,
                        "userPreferred": "Ian Sinclair"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n104087-3g10GTeSoeuW.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 164443,
                    "language": "Italian",
                    "name": {
                        "first": "Alessandro",
                        "last": "Zurla",
                        "full": "Alessandro Zurla",
                        "native": null,
                        "userPreferred": "Alessandro Zurla"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n164443-oPViuyFa0v03.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 184290,
                    "language": "Spanish",
                    "name": {
                        "first": "Arturo",
                        "last": "Cataño",
                        "full": "Arturo Cataño",
                        "native": null,
                        "userPreferred": "Arturo Cataño"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n184290-kxfR4s0kSdY3.png",
                    "imageHash": "hash"
                },
                {
                    "id": 192669,
                    "language": "Portuguese",
                    "name": {
                        "first": "Arthur",
                        "last": "Machado",
                        "full": "Arthur Machado",
                        "native": null,
                        "userPreferred": "Arthur Machado"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n192669-KXt2808ZETsl.png",
                    "imageHash": "hash"
                },
                {
                    "id": 286715,
                    "language": "French",
                    "name": {
                        "first": "Bernard",
                        "last": "Grand",
                        "full": "Bernard Grand",
                        "native": null,
                        "userPreferred": "Bernard Grand"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n286715-HwxFjhwDGEzG.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 135847,
                    "language": "German",
                    "name": {
                        "first": "Jacob",
                        "last": "Weigert",
                        "full": "Jacob Weigert",
                        "native": null,
                        "userPreferred": "Jacob Weigert"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n135847-wdMiGecB8cj0.png",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 124147,
            "role": "MAIN",
            "name": {
                "first": "Yuzuriha",
                "last": "Ogawa",
                "full": "Yuzuriha Ogawa",
                "native": "小川杠",
                "userPreferred": "Yuzuriha Ogawa"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/124147-y3uE9rBepdad.jpg",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 124390,
                    "language": "Japanese",
                    "name": {
                        "first": "Kana",
                        "last": "Ichinose",
                        "full": "Kana Ichinose",
                        "native": "市ノ瀬加那",
                        "userPreferred": "Kana Ichinose"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n124390-03LHel2XSFel.png",
                    "imageHash": "hash"
                },
                {
                    "id": 127740,
                    "language": "English",
                    "name": {
                        "first": "Brittany",
                        "last": "Lauda",
                        "full": "Brittany Lauda",
                        "native": null,
                        "userPreferred": "Brittany Lauda"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n127740-O7kEd5orxMeM.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 167061,
                    "language": "Italian",
                    "name": {
                        "first": "Annalisa",
                        "last": "Longo",
                        "full": "Annalisa Longo",
                        "native": null,
                        "userPreferred": "Annalisa Longo"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n167061-BE4Zgk6uRIIA.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 181976,
                    "language": "Spanish",
                    "name": {
                        "first": "Jessica",
                        "last": "Ángeles",
                        "full": "Jessica Ángeles",
                        "native": "Jessica Iveth Ángeles Ramírez",
                        "userPreferred": "Jessica Ángeles"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n181976-1USsTdPqcj9G.png",
                    "imageHash": "hash"
                },
                {
                    "id": 180908,
                    "language": "Portuguese",
                    "name": {
                        "first": "Isabella",
                        "last": "Guarnieri",
                        "full": "Isabella Guarnieri",
                        "native": null,
                        "userPreferred": "Isabella Guarnieri"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n180908-fFQlH2VSXlQH.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 138997,
                    "language": "French",
                    "name": {
                        "first": "Marie",
                        "last": "Braam",
                        "full": "Marie Braam",
                        "native": null,
                        "userPreferred": "Marie Braam"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n138997-4QqdKGTuW0sd.png",
                    "imageHash": "hash"
                },
                {
                    "id": 140262,
                    "language": "German",
                    "name": {
                        "first": "Jodie",
                        "last": "Blank",
                        "full": "Jodie Blank",
                        "native": null,
                        "userPreferred": "Jodie Blank"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n140262-zWOru2zKOTAD.jpg",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 124146,
            "role": "MAIN",
            "name": {
                "first": "Taiju",
                "last": "Ooki",
                "full": "Taiju Ooki",
                "native": "大木大樹",
                "userPreferred": "Taiju Ooki"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b124146-TeXd4r0upuIX.jpg",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 112635,
                    "language": "Japanese",
                    "name": {
                        "first": "Makoto",
                        "last": "Furukawa",
                        "full": "Makoto Furukawa",
                        "native": "古川慎",
                        "userPreferred": "Makoto Furukawa"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n112635-ORlGvRvgf5Nq.png",
                    "imageHash": "hash"
                },
                {
                    "id": 111775,
                    "language": "English",
                    "name": {
                        "first": "Ricco",
                        "last": "Fajardo",
                        "full": "Ricco Fajardo",
                        "native": null,
                        "userPreferred": "Ricco Fajardo"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n111775-TVUcuiV0X1Dg.png",
                    "imageHash": "hash"
                },
                {
                    "id": 153456,
                    "language": "Italian",
                    "name": {
                        "first": "Marco",
                        "last": "Benedetti",
                        "full": "Marco Benedetti",
                        "native": null,
                        "userPreferred": "Marco Benedetti"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n153456-au2y9zeAClez.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 116839,
                    "language": "Spanish",
                    "name": {
                        "first": "Miguel Ángel",
                        "last": "Ruiz",
                        "full": "Miguel Ángel Ruiz",
                        "native": null,
                        "userPreferred": "Miguel Ángel Ruiz"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n116839-9EnQTp30Vy4R.png",
                    "imageHash": "hash"
                },
                {
                    "id": 116937,
                    "language": "Portuguese",
                    "name": {
                        "first": "Alex",
                        "last": "Minei",
                        "full": "Alex Minei",
                        "native": null,
                        "userPreferred": "Alex Minei"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/21937.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 215508,
                    "language": "French",
                    "name": {
                        "first": "Maxime",
                        "last": "Van Stantfoort",
                        "full": "Maxime Van Stantfoort",
                        "native": null,
                        "userPreferred": "Maxime Van Stantfoort"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n215508-icCa7ZKOmwlV.png",
                    "imageHash": "hash"
                },
                {
                    "id": 135846,
                    "language": "German",
                    "name": {
                        "first": "Nick",
                        "last": "Forsberg",
                        "full": "Nick Forsberg",
                        "native": null,
                        "userPreferred": "Nick Forsberg"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n135846-2ptkaVYIxdQX.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 138243,
                    "language": "German",
                    "name": {
                        "first": "Peggy",
                        "last": "Pollow",
                        "full": "Peggy Pollow",
                        "native": null,
                        "userPreferred": "Peggy Pollow"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n138243-RKcrEagAmizj.png",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 124143,
            "role": "MAIN",
            "name": {
                "first": "Kohaku",
                "last": null,
                "full": "Kohaku",
                "native": "コハク",
                "userPreferred": "Kohaku"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b124143-DABUFs3cPNrP.png",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 104973,
                    "language": "Japanese",
                    "name": {
                        "first": "Manami",
                        "last": "Numakura",
                        "full": "Manami Numakura",
                        "native": "沼倉愛美",
                        "userPreferred": "Manami Numakura"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n104973-rymSxCu8uP0Y.png",
                    "imageHash": "hash"
                },
                {
                    "id": 119962,
                    "language": "English",
                    "name": {
                        "first": "Felecia",
                        "last": "Angelle",
                        "full": "Felecia Angelle",
                        "native": null,
                        "userPreferred": "Felecia Angelle"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n119962-1cSvJVipQhMq.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 258109,
                    "language": "Italian",
                    "name": {
                        "first": "Chiara",
                        "last": "Leoncini",
                        "full": "Chiara Leoncini",
                        "native": null,
                        "userPreferred": "Chiara Leoncini"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n258109-bdSCt6AVXwp3.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 182221,
                    "language": "Spanish",
                    "name": {
                        "first": "Alicia",
                        "last": "Barragán",
                        "full": "Alicia Barragán",
                        "native": null,
                        "userPreferred": "Alicia Barragán"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n182221-N9LZsRKJBTCd.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 193984,
                    "language": "Portuguese",
                    "name": {
                        "first": "Luisa",
                        "last": "Horta",
                        "full": "Luisa Horta",
                        "native": "Luísa Horta",
                        "userPreferred": "Luisa Horta"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n193984-qOYDnXxprD0F.png",
                    "imageHash": "hash"
                },
                {
                    "id": 214875,
                    "language": "French",
                    "name": {
                        "first": "Audrey",
                        "last": "D'Hulstère",
                        "full": "Audrey D'Hulstère",
                        "native": null,
                        "userPreferred": "Audrey D'Hulstère"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n214875-QKVH3u1kdhh4.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 153410,
                    "language": "German",
                    "name": {
                        "first": "Marie",
                        "last": "Hinze",
                        "full": "Marie Hinze",
                        "native": null,
                        "userPreferred": "Marie Hinze"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n153410-ug0Os3E2foxO.jpg",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 136446,
            "role": "SUPPORTING",
            "name": {
                "first": "Kaseki",
                "last": null,
                "full": "Kaseki",
                "native": "カセキ",
                "userPreferred": "Kaseki"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b136446-gpvtw5cb2I3Q.jpg",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 96436,
                    "language": "Japanese",
                    "name": {
                        "first": "Mugihito",
                        "last": "",
                        "full": "Mugihito",
                        "native": "麦人",
                        "userPreferred": "Mugihito"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/1436.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 104978,
                    "language": "English",
                    "name": {
                        "first": "Kenny",
                        "last": "Green",
                        "full": "Kenny Green",
                        "native": null,
                        "userPreferred": "Kenny Green"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n104978-LUeUklhFVPZy.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 96240,
                    "language": "Italian",
                    "name": {
                        "first": "Mario",
                        "last": "Scarabelli",
                        "full": "Mario Scarabelli",
                        "native": null,
                        "userPreferred": "Mario Scarabelli"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96240-skGulG7kauYH.png",
                    "imageHash": "hash"
                },
                {
                    "id": 184116,
                    "language": "Spanish",
                    "name": {
                        "first": "Óscar",
                        "last": "Rangel",
                        "full": "Óscar Rangel",
                        "native": null,
                        "userPreferred": "Óscar Rangel"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n184116-BRn61ie2HXy5.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 190264,
                    "language": "Portuguese",
                    "name": {
                        "first": "Carlos",
                        "last": "Seidl",
                        "full": "Carlos Seidl",
                        "native": null,
                        "userPreferred": "Carlos Seidl"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n190264-g9ogZgCzESfm.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 201460,
                    "language": "French",
                    "name": {
                        "first": "Robert",
                        "last": "Dubois",
                        "full": "Robert Dubois",
                        "native": null,
                        "userPreferred": "Robert Dubois"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n201460-HgY2QmvXPaa5.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 135845,
                    "language": "German",
                    "name": {
                        "first": "Elmar",
                        "last": "Gutmann",
                        "full": "Elmar Gutmann",
                        "native": null,
                        "userPreferred": "Elmar Gutmann"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n135845-SH5HyIeTZ7iI.png",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 147570,
            "role": "SUPPORTING",
            "name": {
                "first": "Mantle",
                "last": null,
                "full": "Mantle",
                "native": "マントル",
                "userPreferred": "Mantle"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b147570-fWUSdX2qQ8Mh.jpg",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 147641,
                    "language": "Japanese",
                    "name": {
                        "first": "Shin",
                        "last": "Matsushige",
                        "full": "Shin Matsushige",
                        "native": "松重慎",
                        "userPreferred": "Shin Matsushige"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n147641-EgOoyxTVQqnn.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 96602,
                    "language": "English",
                    "name": {
                        "first": "J. Michael",
                        "last": "Tatum",
                        "full": "J. Michael Tatum",
                        "native": "John Michael Tatum",
                        "userPreferred": "J. Michael Tatum"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96602-ztTfuo3nzu5t.png",
                    "imageHash": "hash"
                },
                {
                    "id": 96286,
                    "language": "Italian",
                    "name": {
                        "first": "Massimo",
                        "last": "Di Benedetto",
                        "full": "Massimo Di Benedetto",
                        "native": null,
                        "userPreferred": "Massimo Di Benedetto"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96286-TD02rKR1qiHV.png",
                    "imageHash": "hash"
                },
                {
                    "id": 114920,
                    "language": "Portuguese",
                    "name": {
                        "first": "Francisco",
                        "last": "Freitas",
                        "full": "Francisco Freitas",
                        "native": null,
                        "userPreferred": "Francisco Freitas"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/19920.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 201462,
                    "language": "French",
                    "name": {
                        "first": "Patrick",
                        "last": "Waleffe",
                        "full": "Patrick Waleffe",
                        "native": null,
                        "userPreferred": "Patrick Waleffe"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n201462-1C6GNLMC2oRq.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 177231,
                    "language": "German",
                    "name": {
                        "first": "Dirc",
                        "last": "Simpson",
                        "full": "Dirc Simpson",
                        "native": null,
                        "userPreferred": "Dirc Simpson"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 150511,
            "role": "SUPPORTING",
            "name": {
                "first": "Turquoise",
                "last": null,
                "full": "Turquoise",
                "native": "ターコイズ",
                "userPreferred": "Turquoise"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b150511-NVZi4WZqJVGW.jpg",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 109251,
                    "language": "Japanese",
                    "name": {
                        "first": "You",
                        "last": "Taichi",
                        "full": "You Taichi",
                        "native": "大地葉",
                        "userPreferred": "You Taichi"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n109251-ge8rmZwppqxy.png",
                    "imageHash": "hash"
                },
                {
                    "id": 119697,
                    "language": "English",
                    "name": {
                        "first": "Mallorie",
                        "last": "Rodak",
                        "full": "Mallorie Rodak",
                        "native": null,
                        "userPreferred": "Mallorie Rodak"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/24697-qQBZowFoHEye.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 224060,
                    "language": "Italian",
                    "name": {
                        "first": "Katia",
                        "last": "Sorrentino",
                        "full": "Katia Sorrentino",
                        "native": null,
                        "userPreferred": "Katia Sorrentino"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n224060-1HPCAFItT5Sc.png",
                    "imageHash": "hash"
                },
                {
                    "id": 196308,
                    "language": "Portuguese",
                    "name": {
                        "first": "Fernanda",
                        "last": "Hartmann",
                        "full": "Fernanda Hartmann",
                        "native": null,
                        "userPreferred": "Fernanda Hartmann"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 216886,
                    "language": "French",
                    "name": {
                        "first": "Sandrine",
                        "last": "Henry",
                        "full": "Sandrine Henry",
                        "native": null,
                        "userPreferred": "Sandrine Henry"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 114958,
                    "language": "German",
                    "name": {
                        "first": "Gundi",
                        "last": "Eberhard",
                        "full": "Gundi Eberhard",
                        "native": null,
                        "userPreferred": "Gundi Eberhard"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/19958.jpg",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 203951,
            "role": "SUPPORTING",
            "name": {
                "first": "Genbu",
                "last": null,
                "full": "Genbu",
                "native": "玄武",
                "userPreferred": "Genbu"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b203951-e2bGNxsIkMq7.png",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 111959,
                    "language": "Japanese",
                    "name": {
                        "first": "Itaru",
                        "last": "Yamamoto",
                        "full": "Itaru Yamamoto",
                        "native": "山本格",
                        "userPreferred": "Itaru Yamamoto"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/16959.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 194896,
                    "language": "English",
                    "name": {
                        "first": "Matt",
                        "last": "Thurston",
                        "full": "Matt Thurston",
                        "native": null,
                        "userPreferred": "Matt Thurston"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 184302,
                    "language": "Spanish",
                    "name": {
                        "first": "Esteban",
                        "last": "Desco",
                        "full": "Esteban Desco",
                        "native": "Esteban Alejandro Desco Mendoza",
                        "userPreferred": "Esteban Desco"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n184302-5XGTZcN1CT8c.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 258936,
                    "language": "Portuguese",
                    "name": {
                        "first": "Gilberto",
                        "last": "de Syllos",
                        "full": "Gilberto de Syllos",
                        "native": null,
                        "userPreferred": "Gilberto de Syllos"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n258936-5Ytni3IBLCzR.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 201462,
                    "language": "French",
                    "name": {
                        "first": "Patrick",
                        "last": "Waleffe",
                        "full": "Patrick Waleffe",
                        "native": null,
                        "userPreferred": "Patrick Waleffe"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n201462-1C6GNLMC2oRq.jpg",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 255671,
            "role": "SUPPORTING",
            "name": {
                "first": "Alumi",
                "last": null,
                "full": "Alumi",
                "native": "あるみ",
                "userPreferred": "Alumi"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b255671-RPBXF4QBa5rS.png",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 162831,
                    "language": "Japanese",
                    "name": {
                        "first": "Hitomi",
                        "last": "Shogawa",
                        "full": "Hitomi Shogawa",
                        "native": "所河ひとみ",
                        "userPreferred": "Hitomi Shogawa"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n162831-6yVHuuecChhl.png",
                    "imageHash": "hash"
                },
                {
                    "id": 249017,
                    "language": "Portuguese",
                    "name": {
                        "first": "Cláudia",
                        "last": "Victória",
                        "full": "Cláudia Victória",
                        "native": null,
                        "userPreferred": "Cláudia Victória"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 143270,
            "role": "SUPPORTING",
            "name": {
                "first": "Ginrou",
                "last": null,
                "full": "Ginrou",
                "native": " 銀狼",
                "userPreferred": "Ginrou"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b143270-8kC2e32r7CyE.jpg",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 110919,
                    "language": "Japanese",
                    "name": {
                        "first": "Ayumu",
                        "last": "Murase",
                        "full": "Ayumu Murase",
                        "native": "村瀬歩",
                        "userPreferred": "Ayumu Murase"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n110919-zz5dq39kyzNC.png",
                    "imageHash": "hash"
                },
                {
                    "id": 119611,
                    "language": "English",
                    "name": {
                        "first": "Justin",
                        "last": "Briner",
                        "full": "Justin Briner",
                        "native": null,
                        "userPreferred": "Justin Briner"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/119611-CwI54lOhSnDQ.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 167599,
                    "language": "Italian",
                    "name": {
                        "first": "Alessandro",
                        "last": "Germano",
                        "full": "Alessandro Germano",
                        "native": null,
                        "userPreferred": "Alessandro Germano"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n167599-JCQoEsDje5Ei.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 286495,
                    "language": "Spanish",
                    "name": {
                        "first": "Francisco",
                        "last": "Vargas",
                        "full": "Francisco Vargas",
                        "native": "Francisco Tomás Vargas Balzanny",
                        "userPreferred": "Francisco Vargas"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n286495-jdqvrONOQZhS.png",
                    "imageHash": "hash"
                },
                {
                    "id": 176952,
                    "language": "Portuguese",
                    "name": {
                        "first": "Carloz",
                        "last": "Magno",
                        "full": "Carloz Magno",
                        "native": null,
                        "userPreferred": "Carloz Magno"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n176952-JcbjR202Pkb6.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 286714,
                    "language": "French",
                    "name": {
                        "first": "Arthur",
                        "last": "Dubois",
                        "full": "Arthur Dubois",
                        "native": null,
                        "userPreferred": "Arthur Dubois"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n286714-SzhtpTSCftNR.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 106906,
                    "language": "German",
                    "name": {
                        "first": "Sebastian",
                        "last": "Fitzner",
                        "full": "Sebastian Fitzner",
                        "native": null,
                        "userPreferred": "Sebastian Fitzner"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n106906-Vpij6JzOEfFQ.png",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 145065,
            "role": "SUPPORTING",
            "name": {
                "first": "Homura",
                "last": "Momiji",
                "full": "Homura Momiji",
                "native": "紅葉ほむら",
                "userPreferred": "Homura Momiji"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b145065-NjHaMBBRg49I.png",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 95599,
                    "language": "Japanese",
                    "name": {
                        "first": "Aki",
                        "last": "Toyosaki",
                        "full": "Aki Toyosaki",
                        "native": "豊崎愛生",
                        "userPreferred": "Aki Toyosaki"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95599-XDGiluZB7IXL.png",
                    "imageHash": "hash"
                },
                {
                    "id": 120247,
                    "language": "English",
                    "name": {
                        "first": "Megan",
                        "last": "Shipman",
                        "full": "Megan Shipman",
                        "native": null,
                        "userPreferred": "Megan Shipman"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n120247-s5bNWV2Pi4Y0.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 231691,
                    "language": "Italian",
                    "name": {
                        "first": "Elisa",
                        "last": "Giorgio",
                        "full": "Elisa Giorgio",
                        "native": null,
                        "userPreferred": "Elisa Giorgio"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n231691-fXZU0GOxIhda.png",
                    "imageHash": "hash"
                },
                {
                    "id": 182631,
                    "language": "Spanish",
                    "name": {
                        "first": "Erika",
                        "last": "Langarica",
                        "full": "Erika Langarica",
                        "native": null,
                        "userPreferred": "Erika Langarica"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n182631-ybXCM5pXa7Mu.png",
                    "imageHash": "hash"
                },
                {
                    "id": 199070,
                    "language": "Portuguese",
                    "name": {
                        "first": "Nathalia",
                        "last": "Guillen",
                        "full": "Nathalia Guillen",
                        "native": null,
                        "userPreferred": "Nathalia Guillen"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n199070-yBeJgzjLB8Q1.png",
                    "imageHash": "hash"
                },
                {
                    "id": 215500,
                    "language": "French",
                    "name": {
                        "first": "Helena",
                        "last": "Coppejans",
                        "full": "Helena Coppejans",
                        "native": null,
                        "userPreferred": "Helena Coppejans"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n215500-x06L0HKfwO5E.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 96653,
                    "language": "German",
                    "name": {
                        "first": "Julia",
                        "last": "Meynen",
                        "full": "Julia Meynen",
                        "native": null,
                        "userPreferred": "Julia Meynen"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96653-gHy4EvG6FSqx.png",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 150512,
            "role": "SUPPORTING",
            "name": {
                "first": "Yakov",
                "last": "Nikitin",
                "full": "Yakov Nikitin",
                "native": "ヤコフ・ニキーチン",
                "userPreferred": "Yakov Nikitin"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b150512-H0QgQUepWssp.jpg",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 110543,
                    "language": "Japanese",
                    "name": {
                        "first": "Kanehira",
                        "last": "Yamamoto",
                        "full": "Kanehira Yamamoto",
                        "native": "山本兼平 ",
                        "userPreferred": "Kanehira Yamamoto"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/15543.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 104720,
                    "language": "English",
                    "name": {
                        "first": "Mike",
                        "last": "Pollock",
                        "full": "Mike Pollock",
                        "native": null,
                        "userPreferred": "Mike Pollock"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n104720-YrS8GnziY5Lr.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 224061,
                    "language": "Italian",
                    "name": {
                        "first": "Matteo",
                        "last": "Brusamonti",
                        "full": "Matteo Brusamonti",
                        "native": null,
                        "userPreferred": "Matteo Brusamonti"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n224061-vdqfx9y81YXQ.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 182217,
                    "language": "Spanish",
                    "name": {
                        "first": "Jorge",
                        "last": "Ornelas",
                        "full": "Jorge Ornelas",
                        "native": null,
                        "userPreferred": "Jorge Ornelas"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n182217-CNQMYqAnfut7.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 245242,
                    "language": "Portuguese",
                    "name": {
                        "first": "Sidney",
                        "last": "César",
                        "full": "Sidney César",
                        "native": null,
                        "userPreferred": "Sidney César"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n245242-08KDjIO57lUE.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 142045,
                    "language": "German",
                    "name": {
                        "first": "Hans-Eckart",
                        "last": "Eckhardt",
                        "full": "Hans-Eckart Eckhardt",
                        "native": null,
                        "userPreferred": "Hans-Eckart Eckhardt"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n142045-LKwoQbsIYsDm.png",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 203953,
            "role": "SUPPORTING",
            "name": {
                "first": "Sagan",
                "last": null,
                "full": "Sagan",
                "native": "サガン",
                "userPreferred": "Sagan"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b203953-E1wUG7AUEiJr.png",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 106141,
                    "language": "Japanese",
                    "name": {
                        "first": "Ryou",
                        "last": "Sugisaki",
                        "full": "Ryou Sugisaki",
                        "native": "杉崎亮",
                        "userPreferred": "Ryou Sugisaki"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n106141-R83sRuA84w7s.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 96342,
                    "language": "English",
                    "name": {
                        "first": "Chris",
                        "last": "Rager",
                        "full": "Chris Rager",
                        "native": null,
                        "userPreferred": "Chris Rager"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/1342.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 202449,
                    "language": "Spanish",
                    "name": {
                        "first": "Hugo",
                        "last": "Navarrete",
                        "full": "Hugo Navarrete",
                        "native": null,
                        "userPreferred": "Hugo Navarrete"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n202449-DCDC6MUf38CJ.png",
                    "imageHash": "hash"
                },
                {
                    "id": 258936,
                    "language": "Portuguese",
                    "name": {
                        "first": "Gilberto",
                        "last": "de Syllos",
                        "full": "Gilberto de Syllos",
                        "native": null,
                        "userPreferred": "Gilberto de Syllos"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n258936-5Ytni3IBLCzR.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 153409,
                    "language": "German",
                    "name": {
                        "first": "Stefan",
                        "last": "Bräuler",
                        "full": "Stefan Bräuler",
                        "native": null,
                        "userPreferred": "Stefan Bräuler"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 124162,
            "role": "SUPPORTING",
            "name": {
                "first": "Suika",
                "last": null,
                "full": "Suika",
                "native": "スイカ",
                "userPreferred": "Suika"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/124162-htFFNeC04bzw.jpg",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 125920,
                    "language": "Japanese",
                    "name": {
                        "first": "Karin",
                        "last": "Takahashi",
                        "full": "Karin Takahashi",
                        "native": "高橋花林",
                        "userPreferred": "Karin Takahashi"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n125920-eGCWlgvsrOyz.png",
                    "imageHash": "hash"
                },
                {
                    "id": 119619,
                    "language": "English",
                    "name": {
                        "first": "Sarah",
                        "last": "Wiedenheft",
                        "full": "Sarah Wiedenheft",
                        "native": null,
                        "userPreferred": "Sarah Wiedenheft"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n119619-ozgAK9to6Ijy.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 158646,
                    "language": "Italian",
                    "name": {
                        "first": "Deborah",
                        "last": "Morese",
                        "full": "Deborah Morese",
                        "native": null,
                        "userPreferred": "Deborah Morese"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n158646-c8RWusctqltH.png",
                    "imageHash": "hash"
                },
                {
                    "id": 196472,
                    "language": "Spanish",
                    "name": {
                        "first": "Valeria",
                        "last": "Mejía",
                        "full": "Valeria Mejía",
                        "native": null,
                        "userPreferred": "Valeria Mejía"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n196472-ZRrUr2nlww3M.png",
                    "imageHash": "hash"
                },
                {
                    "id": 193983,
                    "language": "Portuguese",
                    "name": {
                        "first": "Beatriz",
                        "last": "Singer",
                        "full": "Beatriz Singer",
                        "native": null,
                        "userPreferred": "Beatriz Singer"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n193983-5BQvupyjGLgQ.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 232336,
                    "language": "French",
                    "name": {
                        "first": "Marie",
                        "last": "Du Bled",
                        "full": "Marie Du Bled",
                        "native": null,
                        "userPreferred": "Marie Du Bled"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n232336-I4pyPcp3wzfj.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 138738,
                    "language": "German",
                    "name": {
                        "first": "Charlotte",
                        "last": "Uhlig",
                        "full": "Charlotte Uhlig",
                        "native": null,
                        "userPreferred": "Charlotte Uhlig"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n138738-merLp1ufa0Gz.jpg",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 143271,
            "role": "SUPPORTING",
            "name": {
                "first": "Kinrou",
                "last": null,
                "full": "Kinrou",
                "native": "金狼",
                "userPreferred": "Kinrou"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b143271-6dNgt1Mcy3PU.jpg",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 96489,
                    "language": "Japanese",
                    "name": {
                        "first": "Tomoaki",
                        "last": "Maeno",
                        "full": "Tomoaki Maeno",
                        "native": "前野智昭",
                        "userPreferred": "Tomoaki Maeno"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96489-xTzYxgdC9g9l.png",
                    "imageHash": "hash"
                },
                {
                    "id": 96047,
                    "language": "English",
                    "name": {
                        "first": "Jessie James",
                        "last": "Grelle",
                        "full": "Jessie James Grelle",
                        "native": null,
                        "userPreferred": "Jessie James Grelle"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96047-E9nBWn3YL0Tn.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 157480,
                    "language": "Italian",
                    "name": {
                        "first": "Mattia",
                        "last": "Bressan",
                        "full": "Mattia Bressan",
                        "native": "Mattia Bressan",
                        "userPreferred": "Mattia Bressan"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n157480-SxPNCg5EQDlK.png",
                    "imageHash": "hash"
                },
                {
                    "id": 286497,
                    "language": "Spanish",
                    "name": {
                        "first": "Alan",
                        "last": "Huarte",
                        "full": "Alan Huarte",
                        "native": null,
                        "userPreferred": "Alan Huarte"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 116195,
                    "language": "Portuguese",
                    "name": {
                        "first": "Caio",
                        "last": "Guarnieri",
                        "full": "Caio Guarnieri",
                        "native": null,
                        "userPreferred": "Caio Guarnieri"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n116195-Q7WnpXsxDDJF.png",
                    "imageHash": "hash"
                },
                {
                    "id": 201461,
                    "language": "French",
                    "name": {
                        "first": "Jonathan",
                        "last": "Simon",
                        "full": "Jonathan Simon",
                        "native": null,
                        "userPreferred": "Jonathan Simon"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 116417,
                    "language": "German",
                    "name": {
                        "first": "Roman",
                        "last": "Wolko",
                        "full": "Roman Wolko",
                        "native": null,
                        "userPreferred": "Roman Wolko"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n116417-TJXhgYKKp2hs.jpg",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 149274,
            "role": "SUPPORTING",
            "name": {
                "first": "Lillian",
                "last": "Weinberg",
                "full": "Lillian Weinberg",
                "native": "リリアン ・ ワインバーグ",
                "userPreferred": "Lillian Weinberg"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b149274-lYJFmrdqT7Hq.jpg",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 118806,
                    "language": "Japanese",
                    "name": {
                        "first": "Lynn",
                        "last": "",
                        "full": "Lynn",
                        "native": "Lynn",
                        "userPreferred": "Lynn"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n118806-AlHvdje5aHje.png",
                    "imageHash": "hash"
                },
                {
                    "id": 95313,
                    "language": "English",
                    "name": {
                        "first": "Caitlin",
                        "last": "Glass",
                        "full": "Caitlin Glass",
                        "native": null,
                        "userPreferred": "Caitlin Glass"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95313-zK3WpeNtACvm.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 95313,
                    "language": "English",
                    "name": {
                        "first": "Caitlin",
                        "last": "Glass",
                        "full": "Caitlin Glass",
                        "native": null,
                        "userPreferred": "Caitlin Glass"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95313-zK3WpeNtACvm.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 231691,
                    "language": "Italian",
                    "name": {
                        "first": "Elisa",
                        "last": "Giorgio",
                        "full": "Elisa Giorgio",
                        "native": null,
                        "userPreferred": "Elisa Giorgio"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n231691-fXZU0GOxIhda.png",
                    "imageHash": "hash"
                },
                {
                    "id": 206477,
                    "language": "Spanish",
                    "name": {
                        "first": "Miriam",
                        "last": "Aceves",
                        "full": "Miriam Aceves",
                        "native": null,
                        "userPreferred": "Miriam Aceves"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n206477-PrrGJEmyVPeT.png",
                    "imageHash": "hash"
                },
                {
                    "id": 182109,
                    "language": "Portuguese",
                    "name": {
                        "first": "Lina",
                        "last": "Mendes",
                        "full": "Lina Mendes",
                        "native": null,
                        "userPreferred": "Lina Mendes"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n182109-x09mMcYL5cjW.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 138998,
                    "language": "French",
                    "name": {
                        "first": "Fanny",
                        "last": "Roy",
                        "full": "Fanny Roy",
                        "native": null,
                        "userPreferred": "Fanny Roy"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n138998-Wb29H8gQ1O6D.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 101108,
                    "language": "German",
                    "name": {
                        "first": "Maria",
                        "last": "Koschny",
                        "full": "Maria Koschny",
                        "native": null,
                        "userPreferred": "Maria Koschny"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/6108.jpg",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 145096,
            "role": "SUPPORTING",
            "name": {
                "first": "Minami",
                "last": "Hokutouzai",
                "full": "Minami Hokutouzai",
                "native": "北東西南",
                "userPreferred": "Minami Hokutouzai"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b145096-Xk4D4sK7nZy9.png",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 102263,
                    "language": "Japanese",
                    "name": {
                        "first": "Youko",
                        "last": "Hikasa",
                        "full": "Youko Hikasa",
                        "native": "日笠陽子",
                        "userPreferred": "Youko Hikasa"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n102263-aaPZtNXVUljW.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 128534,
                    "language": "English",
                    "name": {
                        "first": "Kristi",
                        "last": "Rothrock",
                        "full": "Kristi Rothrock",
                        "native": null,
                        "userPreferred": "Kristi Rothrock"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n128534-eqvLKndZMeK1.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 165037,
                    "language": "Italian",
                    "name": {
                        "first": "Ludovica",
                        "last": "De Caro",
                        "full": "Ludovica De Caro",
                        "native": null,
                        "userPreferred": "Ludovica De Caro"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n165037-AIVdlZArSgfj.png",
                    "imageHash": "hash"
                },
                {
                    "id": 101100,
                    "language": "German",
                    "name": {
                        "first": "Giuliana",
                        "last": "Jakobeit",
                        "full": "Giuliana Jakobeit",
                        "native": null,
                        "userPreferred": "Giuliana Jakobeit"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/6100.jpg",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 224995,
            "role": "SUPPORTING",
            "name": {
                "first": "Titan",
                "last": null,
                "full": "Titan",
                "native": "チタン",
                "userPreferred": "Titan"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b224995-kZkEBHiTQE62.jpg",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 124759,
                    "language": "Japanese",
                    "name": {
                        "first": "Kentarou",
                        "last": "Kumagai",
                        "full": "Kentarou Kumagai",
                        "native": "熊谷健太郎",
                        "userPreferred": "Kentarou Kumagai"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n124759-Qd1CVnWr4D8L.png",
                    "imageHash": "hash"
                },
                {
                    "id": 148764,
                    "language": "English",
                    "name": {
                        "first": "Jordan Dash",
                        "last": "Cruz",
                        "full": "Jordan Dash Cruz",
                        "native": null,
                        "userPreferred": "Jordan Dash Cruz"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n148764-jKjUXzYlCikt.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 157476,
                    "language": "Italian",
                    "name": {
                        "first": "Mosè ",
                        "last": "Singh",
                        "full": "Mosè  Singh",
                        "native": "Mosè Singh",
                        "userPreferred": "Mosè  Singh"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n157476-Aqhj80XXKHHa.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 202431,
                    "language": "Portuguese",
                    "name": {
                        "first": "Guilherme",
                        "last": "Conradi",
                        "full": "Guilherme Conradi",
                        "native": null,
                        "userPreferred": "Guilherme Conradi"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n202431-mYzxc05qtP52.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 101923,
                    "language": "German",
                    "name": {
                        "first": "Julius",
                        "last": "Jellinek",
                        "full": "Julius Jellinek",
                        "native": null,
                        "userPreferred": "Julius Jellinek"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/6923.jpg",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 143272,
            "role": "SUPPORTING",
            "name": {
                "first": "Ruri",
                "last": null,
                "full": "Ruri",
                "native": "ルリ",
                "userPreferred": "Ruri"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b143272-IHdEdAbE4C4t.png",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 118602,
                    "language": "Japanese",
                    "name": {
                        "first": "Reina",
                        "last": "Ueda",
                        "full": "Reina Ueda",
                        "native": "上田麗奈",
                        "userPreferred": "Reina Ueda"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n118602-SFsQabl6KLu9.png",
                    "imageHash": "hash"
                },
                {
                    "id": 120664,
                    "language": "English",
                    "name": {
                        "first": "Kristen",
                        "last": "McGuire",
                        "full": "Kristen McGuire",
                        "native": null,
                        "userPreferred": "Kristen McGuire"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n120664-R9g32vsbhPaO.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 167449,
                    "language": "Italian",
                    "name": {
                        "first": "Valentina",
                        "last": "Pallavicino",
                        "full": "Valentina Pallavicino",
                        "native": null,
                        "userPreferred": "Valentina Pallavicino"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n167449-CC9dnkiSxqYi.png",
                    "imageHash": "hash"
                },
                {
                    "id": 201273,
                    "language": "Spanish",
                    "name": {
                        "first": "Alexa",
                        "last": "Navarro",
                        "full": "Alexa Navarro",
                        "native": null,
                        "userPreferred": "Alexa Navarro"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n201273-qGrcVWcQpUmf.png",
                    "imageHash": "hash"
                },
                {
                    "id": 176945,
                    "language": "Portuguese",
                    "name": {
                        "first": "Amanda",
                        "last": "Tavares",
                        "full": "Amanda Tavares",
                        "native": null,
                        "userPreferred": "Amanda Tavares"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n176945-j0SIOVCvG28s.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 158222,
                    "language": "French",
                    "name": {
                        "first": "Laetitia",
                        "last": "Liénart",
                        "full": "Laetitia Liénart",
                        "native": null,
                        "userPreferred": "Laetitia Liénart"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 103846,
                    "language": "German",
                    "name": {
                        "first": "Julia",
                        "last": "Stoepel",
                        "full": "Julia Stoepel",
                        "native": null,
                        "userPreferred": "Julia Stoepel"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/8846.jpg",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 149275,
            "role": "SUPPORTING",
            "name": {
                "first": "Byakuya",
                "last": "Ishigami",
                "full": "Byakuya Ishigami",
                "native": "石神百夜 ",
                "userPreferred": "Byakuya Ishigami"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b149275-ghZG8Itl5Iz9.jpg",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 95063,
                    "language": "Japanese",
                    "name": {
                        "first": "Keiji",
                        "last": "Fujiwara",
                        "full": "Keiji Fujiwara",
                        "native": "藤原啓治",
                        "userPreferred": "Keiji Fujiwara"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n95063-xAsEUzspuLMG.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 95872,
                    "language": "English",
                    "name": {
                        "first": "Kent",
                        "last": "Williams",
                        "full": "Kent Williams",
                        "native": null,
                        "userPreferred": "Kent Williams"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/872.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 96239,
                    "language": "Italian",
                    "name": {
                        "first": "Lorenzo",
                        "last": "Scattorin",
                        "full": "Lorenzo Scattorin",
                        "native": null,
                        "userPreferred": "Lorenzo Scattorin"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n96239-P3XLQtzk2cGc.png",
                    "imageHash": "hash"
                },
                {
                    "id": 189579,
                    "language": "Spanish",
                    "name": {
                        "first": "Héctor",
                        "last": "Estrada",
                        "full": "Héctor Estrada",
                        "native": null,
                        "userPreferred": "Héctor Estrada"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n189579-vj82YhdMx4DD.png",
                    "imageHash": "hash"
                },
                {
                    "id": 244871,
                    "language": "Portuguese",
                    "name": {
                        "first": "Bruno",
                        "last": "Azevedo",
                        "full": "Bruno Azevedo",
                        "native": null,
                        "userPreferred": "Bruno Azevedo"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n244871-iFo5GzoqjXHL.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 215501,
                    "language": "French",
                    "name": {
                        "first": "Nicolas",
                        "last": "Matthys",
                        "full": "Nicolas Matthys",
                        "native": null,
                        "userPreferred": "Nicolas Matthys"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n215501-09R79wPr9sQg.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 100130,
                    "language": "German",
                    "name": {
                        "first": "Peter",
                        "last": "Flechtner",
                        "full": "Peter Flechtner",
                        "native": null,
                        "userPreferred": "Peter Flechtner"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n100130-8uV5PEqiYW6k.jpg",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 202545,
            "role": "SUPPORTING",
            "name": {
                "first": "Ganen",
                "last": null,
                "full": "Ganen",
                "native": "ガンエン",
                "userPreferred": "Ganen"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b202545-GIcUFbF3BhtY.png",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 108055,
                    "language": "Japanese",
                    "name": {
                        "first": "Genki",
                        "last": "Muro",
                        "full": "Genki Muro",
                        "native": "室元気",
                        "userPreferred": "Genki Muro"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n108055-xpbp6CAEStk2.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 143604,
                    "language": "English",
                    "name": {
                        "first": "Travis",
                        "last": "Mullenix",
                        "full": "Travis Mullenix",
                        "native": null,
                        "userPreferred": "Travis Mullenix"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n143604-ScB3SXJCuyJd.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 115238,
                    "language": "Italian",
                    "name": {
                        "first": "Giorgio",
                        "last": "Bonino",
                        "full": "Giorgio Bonino",
                        "native": null,
                        "userPreferred": "Giorgio Bonino"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n115238-Ir7FfYulWTxt.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 179632,
                    "language": "Portuguese",
                    "name": {
                        "first": "Matheus",
                        "last": "Ferreira",
                        "full": "Matheus Ferreira",
                        "native": null,
                        "userPreferred": "Matheus Ferreira"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n179632-EXTsnfvDL7P8.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 242846,
                    "language": "French",
                    "name": {
                        "first": "Brieuc",
                        "last": "Lemaire",
                        "full": "Brieuc Lemaire",
                        "native": null,
                        "userPreferred": "Brieuc Lemaire"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/default.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 105712,
                    "language": "German",
                    "name": {
                        "first": "Roland",
                        "last": "Wolf",
                        "full": "Roland Wolf",
                        "native": null,
                        "userPreferred": "Roland Wolf"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/10712.jpg",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 224994,
            "role": "SUPPORTING",
            "name": {
                "first": "Shovel",
                "last": null,
                "full": "Shovel",
                "native": "シャベル",
                "userPreferred": "Shovel"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b224994-0rQX2ZwHUpNG.png",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 126963,
                    "language": "Japanese",
                    "name": {
                        "first": "Sayumi",
                        "last": "Suzushiro",
                        "full": "Sayumi Suzushiro",
                        "native": "鈴代紗弓",
                        "userPreferred": "Sayumi Suzushiro"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n126963-0LMbvLzSSADw.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 129030,
                    "language": "English",
                    "name": {
                        "first": "Dani",
                        "last": "Chambers",
                        "full": "Dani Chambers",
                        "native": null,
                        "userPreferred": "Dani Chambers"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n129030-JpDHbjigIejb.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 138517,
                    "language": "Portuguese",
                    "name": {
                        "first": "Raíssa",
                        "last": "Bueno",
                        "full": "Raíssa Bueno",
                        "native": null,
                        "userPreferred": "Raíssa Bueno"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n138517-n5MOdoZ68Y53.png",
                    "imageHash": "hash"
                },
                {
                    "id": 140994,
                    "language": "German",
                    "name": {
                        "first": "Anni C.",
                        "last": "Salander",
                        "full": "Anni C. Salander",
                        "native": null,
                        "userPreferred": "Anni C. Salander"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n140994-dG7Qej0NORMZ.png",
                    "imageHash": "hash"
                }
            ]
        },
        {
            "id": 286712,
            "role": "SUPPORTING",
            "name": {
                "first": "Ruby",
                "last": null,
                "full": "Ruby",
                "native": "ルビィ",
                "userPreferred": "Ruby"
            },
            "image": "https://s4.anilist.co/file/anilistcdn/character/large/b286712-w2mD2322cYU2.jpg",
            "imageHash": "hash",
            "voiceActors": [
                {
                    "id": 124747,
                    "language": "Japanese",
                    "name": {
                        "first": "Reina",
                        "last": "Kondou",
                        "full": "Reina Kondou",
                        "native": "近藤玲奈",
                        "userPreferred": "Reina Kondou"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n124747-uWJRlxZ05TaM.png",
                    "imageHash": "hash"
                },
                {
                    "id": 251138,
                    "language": "Portuguese",
                    "name": {
                        "first": "Maria Clara",
                        "last": "Rosis",
                        "full": "Maria Clara Rosis",
                        "native": null,
                        "userPreferred": "Maria Clara Rosis"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n251138-TWLgbuRWhWFv.jpg",
                    "imageHash": "hash"
                },
                {
                    "id": 163444,
                    "language": "French",
                    "name": {
                        "first": "Emilie",
                        "last": "Guillaume",
                        "full": "Emilie Guillaume",
                        "native": null,
                        "userPreferred": "Emilie Guillaume"
                    },
                    "image": "https://s4.anilist.co/file/anilistcdn/staff/large/n163444-TKusfSG4MXCD.png",
                    "imageHash": "hash"
                }
            ]
        }
    ],
    "relations": [
        {
            "id": 98416,
            "relationType": "ADAPTATION",
            "malId": 103897,
            "title": {
                "romaji": "Dr. STONE",
                "english": "Dr. STONE",
                "native": "Dr.STONE",
                "userPreferred": "Dr. STONE"
            },
            "status": "Completed",
            "episodes": null,
            "image": "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/nx98416-BtFDPRVQHHZe.jpg",
            "imageHash": "hash",
            "color": "#f1bb35",
            "type": "MANGA",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/manga/banner/98416-1XM7oOALCGjA.jpg",
            "coverHash": "hash",
            "rating": 81
        },
        {
            "id": 113936,
            "relationType": "SEQUEL",
            "malId": 40852,
            "title": {
                "romaji": "Dr. STONE: STONE WARS",
                "english": "Dr. STONE: STONE WARS",
                "native": "Dr.STONE STONE WARS",
                "userPreferred": "Dr. STONE: STONE WARS"
            },
            "status": "Completed",
            "episodes": 11,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113936-41Lz6Vtmfh1A.jpg",
            "imageHash": "hash",
            "color": "#e4bb50",
            "type": "TV",
            "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113936-PpMtCY9kCwwV.jpg",
            "coverHash": "hash",
            "rating": 81
        }
    ],
    "mappings": [
        {
            "id": "/watch/dr-stone.lo6q",
            "providerId": "9anime",
            "similarity": 1,
            "providerType": "ANIME"
        },
        {
            "id": "3332",
            "providerId": "animepahe",
            "similarity": 1,
            "providerType": "ANIME"
        },
        {
            "id": "/category/dr-stone",
            "providerId": "gogoanime",
            "similarity": 1,
            "providerType": "ANIME"
        },
        {
            "id": "/dr-stone-175?ref=search",
            "providerId": "zoro",
            "similarity": 1,
            "providerType": "ANIME"
        },
        {
            "id": "/series/355774",
            "providerId": "tvdb",
            "similarity": 1,
            "providerType": "META"
        },
        {
            "id": "105333",
            "providerId": "anilist",
            "similarity": 1,
            "providerType": "META"
        },
        {
            "id": "/tv/86031",
            "providerId": "tmdb",
            "similarity": 1,
            "providerType": "META"
        },
        {
            "id": "/anime/14491",
            "providerId": "anidb",
            "similarity": 1,
            "providerType": "META"
        }
    ],
    "artwork": [
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-BBxkPhen07Zj.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-BBxkPhen07Zj.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/666bf8a762ef8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/66641cd011eae.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6669cc0395164.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/666bf8a762ef8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/66641cd011eae.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6669cc0395164.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/65117a7ae9831.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/63f7aa24e97c6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/64ea267d9b13c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/668a69f2ca467.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/666bf8a762ef8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/2100026/posters/66ba44c80e8bf.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/66641cd011eae.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6669cc0395164.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/669f6e0e49db7.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/668a69f2ca467.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/666bf8a762ef8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/2100026/posters/66ba44c80e8bf.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/66641cd011eae.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6669cc0395164.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/669f6e0e49db7.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/668a69f2ca467.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/666bf8a762ef8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/2100026/posters/66ba44c80e8bf.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/66641cd011eae.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6669cc0395164.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/669f6e0e49db7.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/668a69f2ca467.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/666bf8a762ef8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/2100026/posters/66ba44c80e8bf.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/66641cd011eae.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6669cc0395164.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/669f6e0e49db7.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/668a69f2ca467.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/666bf8a762ef8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/2100026/posters/66ba44c80e8bf.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/66641cd011eae.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6669cc0395164.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/669f6e0e49db7.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/668a69f2ca467.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/666bf8a762ef8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/2100026/posters/66ba44c80e8bf.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/66641cd011eae.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6669cc0395164.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/669f6e0e49db7.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/668a69f2ca467.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/666bf8a762ef8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/2100026/posters/66ba44c80e8bf.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/66641cd011eae.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6669cc0395164.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/669f6e0e49db7.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/668a69f2ca467.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/666bf8a762ef8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/2100026/posters/66ba44c80e8bf.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/66641cd011eae.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6669cc0395164.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/669f6e0e49db7.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/668a69f2ca467.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/666bf8a762ef8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/2100026/posters/66ba44c80e8bf.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/66641cd011eae.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6669cc0395164.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/669f6e0e49db7.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/668a69f2ca467.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "type": "poster",
            "providerId": "anilist"
        },
        {
            "img": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/105333-KWKGvBM8Hyga.jpg",
            "type": "banner",
            "providerId": "anilist"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/666bf8a762ef8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/2100026/posters/66ba44c80e8bf.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/66641cd011eae.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6669cc0395164.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/669f6e0e49db7.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/668a69f2ca467.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/628ed4e8ef3c8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061977.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/602ec892bff94.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d204358254c2.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8799f1b9b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d0c89a231bdc.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd12f2dc00.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/641bd18acded9.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62061976.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6430027e039be.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463eef1ef504.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/6463ef07e16cf.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/backgrounds/62100678.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/backgrounds/648f61ca9864f.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2dfbddc49.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d1a2e72749ba.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/666bf8a762ef8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/seasons/1842798/posters/5f7b8961ee763.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec22c61708.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a2fd865259.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1a30895a26e.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/61bef9008d884.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d4f48a264d09.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6514040fa8ca8.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c19736415371.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/posters/62061988.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/2100026/posters/66ba44c80e8bf.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5dca24a1d2ac5.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930ab8bd11d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d1d24713e3a2.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5c1e1a5b81a97.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309be1b67b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/60930923db231.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/series/355774/icons/6023f8a5bdbc8.jpg",
            "type": "icon",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d8ec19e36813.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/seasons/5d3c17d809d50.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787037/posters/609308ca28c5d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d4b79d4.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/fanart/original/5d59508fabe2b.jpg",
            "type": "banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6425603a42476.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/61454dcf1cfc6.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/66641cd011eae.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/646d01bc7460b.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6093187a8489d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/647a553cc253c.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/6669cc0395164.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/posters/5d6e7b0eba8af.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/669f6e0e49db7.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/6495449c54585.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/647976b4607fa.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/787277/posters/626ec083d963d.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1913522/posters/642ed9c06d5a1.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/60930982f35f4.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/season/1842798/posters/609309f1c3692.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/60930bac0d6c0.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/posters/668a69f2ca467.jpg",
            "type": "poster",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/v4/series/355774/clearlogo/611ca7d7d8020.png",
            "type": "clear_logo",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d2826c972ae0.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        },
        {
            "img": "https://artworks.thetvdb.com/banners/graphical/5d26ff1c1cb40.jpg",
            "type": "top_banner",
            "providerId": "tvdb"
        }
    ],
    "episodes": [
        {
            "id": "dr-stone-episode-1",
            "title": "EP 1",
            "description": null,
            "number": 1,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-2",
            "title": "EP 2",
            "description": null,
            "number": 2,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-3",
            "title": "EP 3",
            "description": null,
            "number": 3,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-4",
            "title": "EP 4",
            "description": null,
            "number": 4,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-5",
            "title": "EP 5",
            "description": null,
            "number": 5,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-6",
            "title": "EP 6",
            "description": null,
            "number": 6,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-7",
            "title": "EP 7",
            "description": null,
            "number": 7,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-8",
            "title": "EP 8",
            "description": null,
            "number": 8,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-9",
            "title": "EP 9",
            "description": null,
            "number": 9,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-10",
            "title": "EP 10",
            "description": null,
            "number": 10,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-11",
            "title": "EP 11",
            "description": null,
            "number": 11,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-12",
            "title": "EP 12",
            "description": null,
            "number": 12,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-13",
            "title": "EP 13",
            "description": null,
            "number": 13,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-14",
            "title": "EP 14",
            "description": null,
            "number": 14,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-15",
            "title": "EP 15",
            "description": null,
            "number": 15,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-16",
            "title": "EP 16",
            "description": null,
            "number": 16,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-17",
            "title": "EP 17",
            "description": null,
            "number": 17,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-18",
            "title": "EP 18",
            "description": null,
            "number": 18,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-19",
            "title": "EP 19",
            "description": null,
            "number": 19,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-20",
            "title": "EP 20",
            "description": null,
            "number": 20,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-21",
            "title": "EP 21",
            "description": null,
            "number": 21,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-22",
            "title": "EP 22",
            "description": null,
            "number": 22,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-23",
            "title": "EP 23",
            "description": null,
            "number": 23,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        },
        {
            "id": "dr-stone-episode-24",
            "title": "EP 24",
            "description": null,
            "number": 24,
            "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx105333-02NGkx1vey2C.jpg",
            "imageHash": "hash",
            "airDate": null
        }
    ]
}


const Page = ({ params }: { params: { id: String } }) => {
    const { loading, user } = useAuth()
    const dispatch = useDispatch()
    const [metaMedia, setMetaMedia] = useState(MetaMedia)
    const [zoroAnime, setZoroAnime] = useState()
    const [Manga, setManga] = useState()
    const [animeId, setAnimeId] = useState<String | null>(params.id)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(4); // Default for large screens

    // Update number of slides based on screen size
    const handleResize = () => {
        const windowWidth = window.innerWidth;
        if (windowWidth <= 550) {
            setSlidesPerView(2); // Mobile view
        }
        else if (windowWidth <= 640) {
            setSlidesPerView(3); // Mobile view
        } else if (windowWidth <= 1024) {
            setSlidesPerView(3); // Tablet view
        } else {
            setSlidesPerView(6); // Large desktop view
        }
    };

    useEffect(() => {
        handleResize(); // Set initial value
        window.addEventListener("resize", handleResize); // Add resize listener
        return () => window.removeEventListener("resize", handleResize); // Cleanup
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % metaMedia.relations.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? metaMedia.relations.length - 1 : prevIndex - 1
        );
    };


    return (<>
        <div className='flex flex-col  pt-20 min-h-screen'>
            <div
                style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.05), var(--background) 100%), url(${metaMedia.artwork ? window.innerWidth < 550 ? metaMedia.artwork[0]?.img : metaMedia.cover : metaMedia.cover})`,
                    backgroundOrigin: "inherit",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundClip: "revert-layer"
                }}
                className="flex flex-col justify-end items-center md:items-start w-full m-2 h-[400px]">
                <div className='flex flex-col md:flex-row items-center space-x-2 space-y-3 justify-start '>
                    <h1 className="text-4xl  text-justify font-sans p-4 font-bold">{metaMedia.title.romaji}</h1>
                    {metaMedia.genres.map((genre: string, index: number) => <button className='px-3 py-1 text-sm border  bg-gray-800 border-gray-800 text-white rounded-xl hover:bg-fuchsia-950' key={index}>{genre}</button>)}
                </div>
            </div>
            {/* watch or save buttons */}
            <div className="flex w-full p-2 justify-start space-x-3">

                {metaMedia.type !== "MANGA" ? <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        if (!loading && !user) {
                            dispatch(toggleModalAuth(true))

                        }
                    }}
                    className='text-lg hover:bg-orange-500 bg-orange-400  border-orange-400 text-slate-800 hover:text-black flex items-center  border-2 text-justify navlinks font-bold py-2 px-4 space-x-2 rounded-2xl'><PlayCircleIcon className='w-6' /> Watch Now</motion.button>
                    :
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            if (!loading && !user) {
                                dispatch(toggleModalAuth(true))

                            }
                        }}
                        className='text-lg hover:bg-orange-500 bg-orange-400  border-orange-400 text-slate-800 hover:text-black flex items-center  border-2 text-justify navlinks font-bold py-2 px-4 space-x-2 rounded-2xl'><BookOpenIcon className='w-6' /> Read Now</motion.button>
                }
                <motion.button
                    whileTap={{ scale: 0.95 }}

                    onClick={() => {
                        if (!loading && !user) {
                            dispatch(toggleModalAuth(true))

                        }
                    }} className='text-lg hover:bg-orange-500 border-orange-400 bg-orange-400 text-slate-800 hover:text-black flex items-center  border-2  text-justify navlinks font-bold py-2 px-4 space-x-2 rounded-2xl'><BookmarkIcon className='w-6' /> Add Favorit</motion.button>





                <motion.button className='text-lg cursor-auto  border-slate-800 text-slate-100   bg-slate-800 hover:text-slate-400 flex items-center  border-2  text-justify navlinks font-bold py-2 px-4 space-x-2 rounded-2xl'> {metaMedia.type}</motion.button>
                <motion.button className='text-lg cursor-auto  border-slate-800  text-slate-100 bg-slate-800 hover:text-slate-400 flex items-center  border-2  text-justify navlinks font-bold py-2 px-4 space-x-2 rounded-2xl'> {metaMedia.status}</motion.button>
                <motion.button className='text-lg cursor-auto  border-slate-800  text-slate-100 bg-slate-800 hover:text-slate-400 flex items-center  border-2  text-justify navlinks font-bold py-2 px-4 space-x-2 rounded-2xl'> {metaMedia.totalEpisodes} Episode</motion.button>

            </div>

            <div className="flex w-full   md:flex-row flex-col  p-1">

                {/*  anime info*/}
                <div className="md:w-4/6  text-white w-full  p-2 pe-4">
                    <div className="w-full">

                        <h1 className="text-xl p-3  underline ">INTRO:</h1>
                        <p dangerouslySetInnerHTML={{ __html: metaMedia.description }} className="navlinks leading-10 text-justify"></p>
                    </div>

                    <div className="w-full">

                        <h1 className="text-xl p-3 underline ">CASTS:</h1>
                        <div className="flex w-full p-2 overflow-x-scroll overflow-y-hidden scrollbar-hide">
                            {metaMedia.characters.map((character: Character) => (
                                <img
                                    key={character.id}
                                    title={character.name.full}
                                    onMouseLeave={(e) => (e.currentTarget.src = character.image)}
                                    onMouseOver={(e) => {
                                        if (character.voiceActors[0]) {
                                            e.currentTarget.src = character.voiceActors[0].image;
                                        }
                                    }}
                                    src={character.image}
                                    className="rounded-full h-28 object-cover m-2"
                                />
                            ))}
                        </div>

                    </div>

                </div>
                {/*  trailer and more*/}


                <div className="md:w-2/6 flex flex-col justify-start  w-full py-3 ">
                    <div className="flex flex-col justify-start">
                        <h1 className="text-xl py-3 underline">TRAILER:</h1>

                        <iframe width="356" height="200" src={`https://www.youtube.com/embed/${metaMedia.trailer?.id}`} title="TVアニメ『薫る花は凛と咲く』ファーストPV" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <hr className="py-2" />

                    </div>
                    <div className="py-3">
                        <h1 className="text-xl py-3 underline">RAITING :</h1>
                        <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                            <Rating
                                name="text-feedback"
                                value={metaMedia.rating !== 0 ? metaMedia.rating / 20 : 0}
                                readOnly
                                precision={0.5}
                                emptyIcon={<StarIcon style={{ opacity: 0.55, color: "white" }} fontSize="inherit" />}
                            />
                            <Box sx={{ ml: 2 }}>{Number(metaMedia.rating) !== 0 ? parseFloat((metaMedia.rating / 20).toFixed(2)) : 0}</Box>
                        </Box>
                        <hr className="py-2" />

                    </div>

                    <div className="flex flex-col py-3 ">
                        <h1 className="text-xl py-2  underline">STUDIOS :</h1>
                        <ol>
                            {metaMedia.studios.map((item: string) => <li key={item} className="py-1">{item}</li>)}
                        </ol>
                        <hr className="py-2" />

                    </div>
                </div>



            </div>
            {/* Related animes or manga*/}
            <div className="pt-9">
                <div className="w-full flex px-5 items-center  justify-between" >
                    <h1 className="  text-pretty navlinks text-white text-2xl">Related :</h1>
                    <div className="flex space-x-4">

                        <button onClick={prevSlide} className="hover:bg-fuchsia-300 bg-white text-black rounded-full w-10 flex items-center justify-center h-10"><FaArrowLeft className="text-xl" /></button>
                        <button onClick={nextSlide} className="hover:bg-fuchsia-300 bg-white text-black rounded-full w-10 flex items-center justify-center h-10"><FaArrowRight className="text-xl" /></button>
                    </div>
                </div>
                <div className="relative w-full bg-slate-950 py-2 h-[400px]  flex items-center justify-center">

                    <div className="flex items-center justify-around w-full  overflow-hidden">
                        {metaMedia.relations.slice(currentIndex, currentIndex + slidesPerView).concat(metaMedia.relations.slice(0, Math.max(0, currentIndex + slidesPerView - metaMedia.relations.length))
                        ).map((anime, index) => (
                            <AnimeCard anime={{ ...anime, title: anime.title.romaji }} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Recommended animes or manga*/}
            <div className="flex flex-col p-3 ">

                <h1 className="text-xl p-2  underline">SIMILAR ANIMES YOU MAY LIKE
                    :</h1>
                <div className='flex justify-around flex-wrap'>

                    {metaMedia.recommendations.map((recommend) => <AnimeCard anime={{ ...recommend, title: recommend.title.romaji }} />)}

                </div>
            </div>
        </div >
    </>

    )
}

export default Page