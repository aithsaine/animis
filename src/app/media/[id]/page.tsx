"use client"
import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { toggleModalAuth } from '@/redux/actions/actionCreator'
import { useAuth } from '@/hooks/useAuth'
import { BookmarkIcon, PlayCircleIcon } from '@heroicons/react/24/outline'
import { motion } from "framer-motion"
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';



const anime: AnimeInfo = {
    id: "174044",
    title: {
        romaji: "Mayonaka Punch",
        english: "MAYONAKA PUNCH",
        native: "真夜中ぱんチ"
    },
    malId: 57947,
    synonyms: [
        "Midnight Punch",
        "MayoPan",
        "マヨぱん",
        "深夜PUNCH"
    ],
    isLicensed: true,
    isAdult: false,
    countryOfOrigin: "JP",
    trailer: {
        id: "jtTGkbjtrbM",
        site: "youtube",
        thumbnail: "https://i.ytimg.com/vi/jtTGkbjtrbM/hqdefault.jpg",
        thumbnailHash: "hash"
    },
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx174044-HBvsyKjDVPyO.jpg",
    imageHash: "hash",
    popularity: 15697,
    color: "#e4865d",
    cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20605-RCJ7M71zLmrh.jpg",
    coverHash: "hash",
    description: "Meet Masaki, the now former member of the popular NewTuber group, Harikiri Sisters. After a career setback, aka getting fired unexpectedly via a livestream, she joins forces with Live, a partner with superhuman abilities. Together, they aim to create sensational content and reach 1 million subscribers. Will they reach their content dreams or be hit with the block button?<br><br>\n\n(Source: Crunchyroll)",
    status: "Ongoing",
    releaseDate: 2024,
    startDate: {
        year: 2024,
        month: 7,
        day: 8
    },
    endDate: {
        year: 2024,
        month: 9,
        day: 23
    },
    nextAiringEpisode: {
        airingTime: 1727098200,
        timeUntilAiring: 568206,
        episode: 12
    },
    totalEpisodes: 12,
    currentEpisode: 11,
    rating: 69,
    duration: 24,
    genres: [
        "Comedy",
        "Supernatural"
    ],
    season: "SUMMER",
    studios: [
        "P.A. Works"
    ],
    subOrDub: "sub",
    type: "TV",
    recommendations: [
        {
            id: 141391,
            malId: 50346,
            title: {
                romaji: "Yofukashi no Uta",
                english: "Call of the Night",
                native: "よふかしのうた",
                userPreferred: "Yofukashi no Uta"
            },
            status: "Completed",
            episodes: 13,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx141391-pUVgnceYVhJE.jpg",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/141391-JErChZ8G3b49.jpg",
            coverHash: "hash",
            rating: 79,
            type: "TV"
        },
        {
            id: 159808,
            malId: 54103,
            title: {
                romaji: "Hikikomari Kyuuketsuki no Monmon",
                english: "The Vexations of a Shut-In Vampire Princess",
                native: "ひきこまり吸血姫の悶々",
                userPreferred: "Hikikomari Kyuuketsuki no Monmon"
            },
            status: "Completed",
            episodes: 12,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx159808-svpzcGb6ig4X.jpg",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/159808-hHtK0HhZlyzD.jpg",
            coverHash: "hash",
            rating: 70,
            type: "TV"
        },
        {
            id: 20964,
            malId: 28617,
            title: {
                romaji: "Punch Line",
                english: "PUNCH LINE",
                native: "パンチライン",
                userPreferred: "Punch Line"
            },
            status: "Completed",
            episodes: 12,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx20964-hyNT7edgcS7z.jpg",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20964-etLaKGc0pXvo.jpg",
            coverHash: "hash",
            rating: 65,
            type: "TV"
        },
        {
            id: 101371,
            malId: 37579,
            title: {
                romaji: "Tonari no Kyuuketsuki-san",
                english: "Ms. vampire who lives in my neighborhood.",
                native: "となりの吸血鬼さん",
                userPreferred: "Tonari no Kyuuketsuki-san"
            },
            status: "Completed",
            episodes: 12,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx101371-36M9Eu65MKlU.jpg",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/n101371-gQWOSSQe6WVE.jpg",
            coverHash: "hash",
            rating: 69,
            type: "TV"
        },
        {
            id: 110200,
            malId: 39990,
            title: {
                romaji: "Vlad Love",
                english: "VLAD LOVE",
                native: "ぶらどらぶ",
                userPreferred: "Vlad Love"
            },
            status: "Completed",
            episodes: 12,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110200-QB9smw3HWyQC.jpg",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/110200-w9PiOKLQm0z9.jpg",
            coverHash: "hash",
            rating: 55,
            type: "ONA"
        },
        {
            id: 160488,
            malId: 54284,
            title: {
                romaji: "VTuber nanda ga Haishin Kiri Wasuretara Densetsu ni Natteta",
                english: "VTuber Legend: How I Went Viral after Forgetting to Turn Off My Stream",
                native: "VTuberなんだが配信切り忘れたら伝説になってた",
                userPreferred: "VTuber nanda ga Haishin Kiri Wasuretara Densetsu ni Natteta"
            },
            status: "Ongoing",
            episodes: 12,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx160488-Fqeh9b9iDOZF.jpg",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/160488-fKULYQGRg2Dp.jpg",
            coverHash: "hash",
            rating: 68,
            type: "TV"
        },
        {
            id: 108357,
            malId: 39518,
            title: {
                romaji: "Vampire in the Garden",
                english: "Vampire in the Garden",
                native: "ヴァンパイア・イン・ザ・ガーデン",
                userPreferred: "Vampire in the Garden"
            },
            status: "Completed",
            episodes: 5,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108357-522aPG6TOa7t.jpg",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108357-W2qWgnGDIbYe.jpg",
            coverHash: "hash",
            rating: 70,
            type: "ONA"
        },
        {
            id: 118103,
            malId: 41833,
            title: {
                romaji: "Kyuuketsuki Sugu Shinu",
                english: "The Vampire Dies in No Time",
                native: "吸血鬼すぐ死ぬ",
                userPreferred: "Kyuuketsuki Sugu Shinu"
            },
            status: "Completed",
            episodes: 12,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx118103-pue9xw0RB1mc.jpg",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/118103-ezW2oJ9T49BJ.jpg",
            coverHash: "hash",
            rating: 70,
            type: "TV"
        },
        {
            id: 131019,
            malId: 48471,
            title: {
                romaji: "Tsuki to Laika to Nosferatu",
                english: "Irina: The Vampire Cosmonaut",
                native: "月とライカと吸血姫",
                userPreferred: "Tsuki to Laika to Nosferatu"
            },
            status: "Completed",
            episodes: 12,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx131019-xaTtBN2G6BrO.jpg",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/131019-kC3Tu6e6dfxr.jpg",
            coverHash: "hash",
            rating: 71,
            type: "TV"
        },
        {
            id: 6747,
            malId: 6747,
            title: {
                romaji: "Dance in the Vampire Bund",
                english: "Dance in the Vampire Bund",
                native: "ダンスインザヴァンパイアバンド",
                userPreferred: "Dance in the Vampire Bund"
            },
            status: "Completed",
            episodes: 12,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx6747-GEGb8Pwg8X7a.png",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/6747-6MTKSeRIBD6p.jpg",
            coverHash: "hash",
            rating: 65,
            type: "TV"
        },
        {
            id: 2993,
            malId: 2993,
            title: {
                romaji: "Rosario to Vampire",
                english: "Rosario + Vampire",
                native: "ロザリオとバンパイア",
                userPreferred: "Rosario to Vampire"
            },
            status: "Completed",
            episodes: 13,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/2993.jpg",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/2993-wZmgsXUSnJUa.jpg",
            coverHash: "hash",
            rating: 62,
            type: "TV"
        },
        {
            id: 4214,
            malId: 4214,
            title: {
                romaji: "Rosario to Vampire Capu2",
                english: "Rosario + Vampire Capu2",
                native: "ロザリオとバンパイア Capu2",
                userPreferred: "Rosario to Vampire Capu2"
            },
            status: "Completed",
            episodes: 13,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/4214.jpg",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/4214-J0YeC9OWUXp6.jpg",
            coverHash: "hash",
            rating: 64,
            type: "TV"
        },
        {
            id: 170891,
            malId: 57099,
            title: {
                romaji: "Na-Nare Hana-Nare",
                english: "Narenare -Cheer for you!-",
                native: "菜なれ花なれ",
                userPreferred: "Na-Nare Hana-Nare"
            },
            status: "Ongoing",
            episodes: 12,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx170891-Bhxn5y4a86Q0.jpg",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/170891-4OuuElPLL20Q.jpg",
            coverHash: "hash",
            rating: 62,
            type: "TV"
        },
        {
            id: 10165,
            malId: 10165,
            title: {
                romaji: "Nichijou",
                english: "Nichijou - My Ordinary Life",
                native: "日常",
                userPreferred: "Nichijou"
            },
            status: "Completed",
            episodes: 26,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx10165-1j2Qn8wIIn5S.png",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/10165.jpg",
            coverHash: "hash",
            rating: 83,
            type: "TV"
        },
        {
            id: 130003,
            malId: 47917,
            title: {
                romaji: "Bocchi the Rock!",
                english: "BOCCHI THE ROCK!",
                native: "ぼっち・ざ・ろっく！",
                userPreferred: "Bocchi the Rock!"
            },
            status: "Completed",
            episodes: 12,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx130003-OBj8AZKPvnV9.png",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/130003-FEBlngeJSTEm.jpg",
            coverHash: "hash",
            rating: 87,
            type: "TV"
        },
        {
            id: 155419,
            malId: 53262,
            title: {
                romaji: "Hoshikuzu Telepath",
                english: "Stardust Telepath",
                native: "星屑テレパス",
                userPreferred: "Hoshikuzu Telepath"
            },
            status: "Completed",
            episodes: 12,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx155419-tPkRvXYb9ffC.png",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/155419-yO6MTtDbaeDj.jpg",
            coverHash: "hash",
            rating: 70,
            type: "TV"
        },
        {
            id: 108092,
            malId: 39388,
            title: {
                romaji: "Koisuru Asteroid",
                english: "Asteroid in Love",
                native: "恋する小惑星〈アステロイド〉",
                userPreferred: "Koisuru Asteroid"
            },
            status: "Completed",
            episodes: 12,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx108092-vbL3rf0b23sp.jpg",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/108092-y9c4xaGJU8m9.jpg",
            coverHash: "hash",
            rating: 66,
            type: "TV"
        },
        {
            id: 107490,
            malId: 39071,
            title: {
                romaji: "Machikado Mazoku",
                english: "The Demon Girl Next Door",
                native: "まちカドまぞく",
                userPreferred: "Machikado Mazoku"
            },
            status: "Completed",
            episodes: 12,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx107490-wolT0UvNSetx.png",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/107490-wQ8rfnjOa7TO.jpg",
            coverHash: "hash",
            rating: 75,
            type: "TV"
        },
        {
            id: 123330,
            malId: 42745,
            title: {
                romaji: "Machikado Mazoku: 2-Choume",
                english: "The Demon Girl Next Door Season 2",
                native: "まちカドまぞく 2丁目",
                userPreferred: "Machikado Mazoku: 2-Choume"
            },
            status: "Completed",
            episodes: 12,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx123330-AU2jllC75uSE.png",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/123330-g5hGEeefeioP.jpg",
            coverHash: "hash",
            rating: 78,
            type: "TV"
        },
        {
            id: 97592,
            malId: 33988,
            title: {
                romaji: "Demi-chan wa Kataritai",
                english: "Interviews with Monster Girls",
                native: "亜人ちゃんは語りたい",
                userPreferred: "Demi-chan wa Kataritai"
            },
            status: "Completed",
            episodes: 12,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx97592-2m8qtzJLuGY3.jpg",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/97592-4xX73GaqvbL6.png",
            coverHash: "hash",
            rating: 74,
            type: "TV"
        },
        {
            id: 153629,
            malId: 52736,
            title: {
                romaji: "Tensei Oujo to Tensai Reijou no Mahou Kakumei",
                english: "The Magical Revolution of the Reincarnated Princess and the Genius Young Lady",
                native: "転生王女と天才令嬢の魔法革命",
                userPreferred: "Tensei Oujo to Tensai Reijou no Mahou Kakumei"
            },
            status: "Completed",
            episodes: 12,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx153629-LNRlLFrbDTi8.jpg",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/153629-dliAKZ1VM2OQ.jpg",
            coverHash: "hash",
            rating: 75,
            type: "TV"
        },
        {
            id: 18441,
            malId: 18441,
            title: {
                romaji: "Blood Lad: Wagahai wa Neko de wa Nai",
                english: null,
                native: "ブラッドラッド 我輩は猫ではない",
                userPreferred: "Blood Lad: Wagahai wa Neko de wa Nai"
            },
            status: "Completed",
            episodes: 1,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx18441-UKhY0FflBETV.jpg",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx18441-UKhY0FflBETV.jpg",
            coverHash: "hash",
            rating: 68,
            type: "OVA"
        },
        {
            id: 11633,
            malId: 11633,
            title: {
                romaji: "Blood Lad",
                english: null,
                native: "ブラッドラッド",
                userPreferred: "Blood Lad"
            },
            status: "Completed",
            episodes: 10,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11633-vIjtabJq64Xt.jpg",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11633-LRJK2MSqP1Ya.jpg",
            coverHash: "hash",
            rating: 69,
            type: "TV"
        },
        {
            id: 11499,
            malId: 11499,
            title: {
                romaji: "Sankarea",
                english: "Sankarea: Undying Love",
                native: "さんかれあ",
                userPreferred: "Sankarea"
            },
            status: "Completed",
            episodes: 12,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11499-SeYog5nP4Uks.png",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11499-etOfsgdjZY4L.jpg",
            coverHash: "hash",
            rating: 70,
            type: "TV"
        },
        {
            id: 21483,
            malId: 30714,
            title: {
                romaji: "Owari no Seraph: Owaranai Seraph",
                english: "Seraph of the End: Vampire Reign - Owaranai Seraph",
                native: "終わりのセラフ「終わらないセラフ」",
                userPreferred: "Owari no Seraph: Owaranai Seraph"
            },
            status: "Completed",
            episodes: 9,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/21483-yJfFGWvTGzy1.jpg",
            imageHash: "hash",
            cover: "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21483-Wr7fOg28VHiB.jpg",
            coverHash: "hash",
            rating: 72,
            type: "SPECIAL"
        }
    ],
    characters: [
        {
            id: 329072,
            role: "MAIN",
            name: {
                first: "Masaki",
                last: null,
                full: "Masaki",
                native: "真咲",
                userPreferred: "Masaki"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b329072-qlJPAUzAV1W7.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 132768,
                    language: "Japanese",
                    name: {
                        first: "Ikumi",
                        last: "Hasegawa",
                        full: "Ikumi Hasegawa",
                        native: "長谷川育美",
                        userPreferred: "Ikumi Hasegawa"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n132768-eIoq58EHCA4F.png",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 329074,
            role: "MAIN",
            name: {
                first: "Live",
                last: null,
                full: "Live",
                native: "りぶ",
                userPreferred: "Live"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b329074-z0UmlvTqWSBa.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 133625,
                    language: "Japanese",
                    name: {
                        first: "Fairouz Ai",
                        last: "",
                        full: "Fairouz Ai",
                        native: "ファイルーズあい",
                        userPreferred: "Fairouz Ai"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n133625-YpEgKD7flV2S.jpg",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 329217,
            role: "MAIN",
            name: {
                first: "Ichiko",
                last: null,
                full: "Ichiko",
                native: "苺子",
                userPreferred: "Ichiko"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b329217-P4HcatW5fRSV.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 188507,
                    language: "Japanese",
                    name: {
                        first: "Yuina",
                        last: "Itou",
                        full: "Yuina Itou",
                        native: "伊藤ゆいな",
                        userPreferred: "Yuina Itou"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n188507-G1nyoC2q08RL.png",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 329443,
            role: "MAIN",
            name: {
                first: "Fu",
                last: null,
                full: "Fu",
                native: "譜風",
                userPreferred: "Fu"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b329443-vVlExvpfq0lk.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 205892,
                    language: "Japanese",
                    name: {
                        first: "Hina",
                        last: "Youmiya",
                        full: "Hina Youmiya",
                        native: "羊宮妃那",
                        userPreferred: "Hina Youmiya"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n205892-gaMHjeUijh84.png",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 329672,
            role: "MAIN",
            name: {
                first: "Tokage",
                last: null,
                full: "Tokage",
                native: "十景",
                userPreferred: "Tokage"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b329672-ggA94k6Xojhn.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 125306,
                    language: "Japanese",
                    name: {
                        first: "Hitomi",
                        last: "Ueda",
                        full: "Hitomi Ueda",
                        native: "上田瞳",
                        userPreferred: "Hitomi Ueda"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n125306-Kq7WCcO2EwbG.png",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 343294,
            role: "SUPPORTING",
            name: {
                first: "Mother",
                last: null,
                full: "Mother",
                native: "マザー",
                userPreferred: "Mother"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b343294-wtn4kG567jcu.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 95195,
                    language: "Japanese",
                    name: {
                        first: "Kikuko",
                        last: "Inoue",
                        full: "Kikuko Inoue",
                        native: "井上喜久子",
                        userPreferred: "Kikuko Inoue"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n95195-nLvtZl5sCK0D.png",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 343667,
            role: "SUPPORTING",
            name: {
                first: "Salami",
                last: "Cappuccino",
                full: "Salami Cappuccino",
                native: "サラ美・ん・カプチーノ",
                userPreferred: "Salami N. Cappuccino"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b343667-qSRbw3y8TERD.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 343668,
                    language: "Japanese",
                    name: {
                        first: "Emi",
                        last: "Oomatsu",
                        full: "Emi Oomatsu",
                        native: "大松絵美",
                        userPreferred: "Emi Oomatsu"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n343668-RKs0jTzJhHR9.jpg",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 343295,
            role: "SUPPORTING",
            name: {
                first: "Aya",
                last: null,
                full: "Aya",
                native: "綾",
                userPreferred: "Aya"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b343295-0aOyLIsl3PC8.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 121417,
                    language: "Japanese",
                    name: {
                        first: "Shuu",
                        last: "Uchida",
                        full: "Shuu Uchida",
                        native: "内田秀",
                        userPreferred: "Shuu Uchida"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n121417-bWX0wlubfjEI.jpg",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 343669,
            role: "SUPPORTING",
            name: {
                first: "Shura",
                last: null,
                full: "Shura",
                native: "屍由良",
                userPreferred: "Shura"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b343669-39bmAVoyTFgo.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 107750,
                    language: "Japanese",
                    name: {
                        first: "Hibiku",
                        last: "Yamamura",
                        full: "Hibiku Yamamura",
                        native: "山村響",
                        userPreferred: "Hibiku Yamamura"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n107750-ncaOycwTveFP.png",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 343670,
            role: "SUPPORTING",
            name: {
                first: "Juwa-chan",
                last: null,
                full: "Juwa-chan",
                native: "じゅわちゃん",
                userPreferred: "Juwa-chan"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b343670-s4uI9k4paxun.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 111575,
                    language: "Japanese",
                    name: {
                        first: "Shuuhei",
                        last: "Iwase",
                        full: "Shuuhei Iwase",
                        native: "岩瀬周平",
                        userPreferred: "Shuuhei Iwase"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n111575-jbnR5EdTfwt1.png",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 343671,
            role: "SUPPORTING",
            name: {
                first: "Daifuku Daijin",
                last: null,
                full: "Daifuku Daijin",
                native: "だいふく大臣",
                userPreferred: "Daifuku Daijin"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b343671-Y4Qd6IgzZxcK.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 343673,
                    language: "Japanese",
                    name: {
                        first: "Sasuke",
                        last: null,
                        full: "Sasuke",
                        native: "Sasuke",
                        userPreferred: "Sasuke"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n343673-2PMIBtM1FmBQ.jpg",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 343663,
            role: "SUPPORTING",
            name: {
                first: "Igito",
                last: null,
                full: "Igito",
                native: "異議人",
                userPreferred: "Igito"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b343663-hCQjXiM25JUl.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 95270,
                    language: "Japanese",
                    name: {
                        first: "Nobuhiko",
                        last: "Okamoto",
                        full: "Nobuhiko Okamoto",
                        native: "岡本信彦",
                        userPreferred: "Nobuhiko Okamoto"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n95270-LqNIF238L59u.png",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 343672,
            role: "SUPPORTING",
            name: {
                first: "Chin Anago",
                last: null,
                full: "Chin Anago",
                native: "ちんアナゴ",
                userPreferred: "Chin Anago"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b343672-2545txKekkvV.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 343674,
                    language: "Japanese",
                    name: {
                        first: "Agoking",
                        last: null,
                        full: "Agoking",
                        native: "あごキング",
                        userPreferred: "Agoking"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n343674-Co3N5Jk1oEOB.jpg",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 329673,
            role: "SUPPORTING",
            name: {
                first: "Yuki",
                last: null,
                full: "Yuki",
                native: "ゆき",
                userPreferred: "Yuki"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b329673-03N16iq2NX3S.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 105765,
                    language: "Japanese",
                    name: {
                        first: "Ai",
                        last: "Kayano",
                        full: "Ai Kayano",
                        native: "茅野愛衣",
                        userPreferred: "Ai Kayano"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n105765-DDK94me8axVv.png",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 343664,
            role: "SUPPORTING",
            name: {
                first: "Tanbura",
                last: null,
                full: "Tanbura",
                native: "端ぶらー",
                userPreferred: "Tanbura"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b343664-AuBMgAxRq4DZ.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 95002,
                    language: "Japanese",
                    name: {
                        first: "Tomokazu",
                        last: "Sugita",
                        full: "Tomokazu Sugita",
                        native: "杉田智和",
                        userPreferred: "Tomokazu Sugita"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n95002-nDIvHaynicEg.png",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 343675,
            role: "SUPPORTING",
            name: {
                first: "Tennabe no Ken",
                last: null,
                full: "Tennabe no Ken",
                native: "鉄鍋のケン",
                userPreferred: "Tennabe no Ken"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b343675-ZmfBmZTDHAZc.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 95279,
                    language: "Japanese",
                    name: {
                        first: "Daichuu",
                        last: "Mizushima",
                        full: "Daichuu Mizushima",
                        native: "水島大宙",
                        userPreferred: "Daichuu Mizushima"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n95279-5fMO4r9szQKL.jpg",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 339703,
            role: "SUPPORTING",
            name: {
                first: "Otomi",
                last: null,
                full: "Otomi",
                native: "乙美",
                userPreferred: "Otomi"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b339703-TyjC1AYBpxqP.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 124747,
                    language: "Japanese",
                    name: {
                        first: "Reina",
                        last: "Kondou",
                        full: "Reina Kondou",
                        native: "近藤玲奈",
                        userPreferred: "Reina Kondou"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n124747-uWJRlxZ05TaM.png",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 343665,
            role: "SUPPORTING",
            name: {
                first: "TSUMA-shi",
                last: null,
                full: "TSUMA-shi",
                native: "TSUMA氏",
                userPreferred: "TSUMA-shi"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b343665-ZTuTDh6y91rE.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 95600,
                    language: "Japanese",
                    name: {
                        first: "Toshiyuki",
                        last: "Toyonaga",
                        full: "Toshiyuki Toyonaga",
                        native: "豊永利行",
                        userPreferred: "Toshiyuki Toyonaga"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n95600-giNVqkdeWKuF.png",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 343676,
            role: "SUPPORTING",
            name: {
                first: "Haikan Zen Ronpa",
                last: null,
                full: "Haikan Zen Ronpa",
                native: "配管全論破",
                userPreferred: "Haikan Zen Ronpa"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b343676-tSFoVl1G2Sqe.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 95257,
                    language: "Japanese",
                    name: {
                        first: "Nobuyuki",
                        last: "Hiyama",
                        full: "Nobuyuki Hiyama",
                        native: "檜山修之",
                        userPreferred: "Nobuyuki Hiyama"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n95257-PgYwsBplRSJa.png",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 339704,
            role: "SUPPORTING",
            name: {
                first: "Kikka",
                last: null,
                full: "Kikka",
                native: "橘花",
                userPreferred: "Kikka"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b339704-h9TXLQ0f73AY.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 106030,
                    language: "Japanese",
                    name: {
                        first: "Chika",
                        last: "Anzai",
                        full: "Chika Anzai",
                        native: "安済知佳",
                        userPreferred: "Chika Anzai"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n106030-oz4RUJZ3D9v9.png",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 343648,
            role: "SUPPORTING",
            name: {
                first: "Chance Akaishi",
                last: null,
                full: "Chance Akaishi",
                native: "チャンス赤石",
                userPreferred: "Chance Akaishi"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b343648-aH3pFWc27M6l.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 343649,
                    language: "Japanese",
                    name: {
                        first: "Odango",
                        last: null,
                        full: "Odango",
                        native: "おだんご",
                        userPreferred: "Odango"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n343649-j1nmFGHe5a8B.jpg",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 343666,
            role: "SUPPORTING",
            name: {
                first: "F.",
                last: "Taroumaru",
                full: "F. Taroumaru",
                native: "F・太郎丸",
                userPreferred: "F. Taroumaru"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b343666-iBK2t2fL8NwR.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 95086,
                    language: "Japanese",
                    name: {
                        first: "Jun",
                        last: "Fukuyama",
                        full: "Jun Fukuyama",
                        native: "福山潤",
                        userPreferred: "Jun Fukuyama"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n95086-cwKYmhOFNtH5.png",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 343871,
            role: "SUPPORTING",
            name: {
                first: "Sakura",
                last: null,
                full: "Sakura",
                native: "さくら",
                userPreferred: "Sakura"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/b343871-Gi3IxY5cp9Ni.png",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 121821,
                    language: "Japanese",
                    name: {
                        first: "Manaka",
                        last: "Iwami",
                        full: "Manaka Iwami",
                        native: "石見舞菜香",
                        userPreferred: "Manaka Iwami"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n121821-LLWUOipBoYxJ.png",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 343650,
            role: "BACKGROUND",
            name: {
                first: "Pachinko Onsei",
                last: null,
                full: "Pachinko Onsei",
                native: "パチンコ音声",
                userPreferred: "Pachinko Onsei"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/default.jpg",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 249669,
                    language: "Japanese",
                    name: {
                        first: "Takuya",
                        last: "Makimura",
                        full: "Takuya Makimura",
                        native: "蒔村拓哉",
                        userPreferred: "Takuya Makimura"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n249669-zT8ho5DoIPcE.png",
                    imageHash: "hash"
                }
            ]
        },
        {
            id: 343659,
            role: "BACKGROUND",
            name: {
                first: "Kodomo",
                last: null,
                full: "Kodomo",
                native: "子供",
                userPreferred: "Kodomo"
            },
            image: "https://s4.anilist.co/file/anilistcdn/character/large/default.jpg",
            imageHash: "hash",
            voiceActors: [
                {
                    id: 168957,
                    language: "Japanese",
                    name: {
                        first: "Aino",
                        last: "Shimada",
                        full: "Aino Shimada",
                        native: "島田愛野",
                        userPreferred: "Aino Shimada"
                    },
                    image: "https://s4.anilist.co/file/anilistcdn/staff/large/n168957-wiIS8mtznggf.jpg",
                    imageHash: "hash"
                }
            ]
        }
    ],
    relations: [
        {
            id: 176389,
            relationType: "ADAPTATION",
            malId: 169837,
            title: {
                romaji: "Mayonaka Punch",
                english: null,
                native: "真夜中ぱんチ",
                userPreferred: "Mayonaka Punch"
            },
            status: "Ongoing",
            episodes: null,
            image: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx176389-yVcmkUh3x5lb.jpg",
            imageHash: "hash",
            color: "#e45093",
            type: "MANGA",
            cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/large/bx176389-yVcmkUh3x5lb.jpg",
            coverHash: "hash",
            rating: 85
        },
        {
            id: 176390,
            relationType: "ADAPTATION",
            malId: null,
            title: {
                romaji: "Mayonaka Punch",
                english: null,
                native: "真夜中ぱんチ",
                userPreferred: "Mayonaka Punch"
            },
            status: "Completed",
            episodes: null,
            image: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/b176390-9aQxdpmljdFm.jpg",
            imageHash: "hash",
            color: "#e45da1",
            type: "NOVEL",
            cover: "https://s4.anilist.co/file/anilistcdn/media/manga/cover/medium/b176390-9aQxdpmljdFm.jpg",
            coverHash: "hash",
            rating: null
        }
    ],

    episodes: [
        {
            id: "mayonaka-punch-episode-1",
            title: "EP 1",
            description: null,
            number: 1,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx174044-HBvsyKjDVPyO.jpg",
            imageHash: "hash",
            airDate: null
        },
        {
            id: "mayonaka-punch-episode-2",
            title: "EP 2",
            description: null,
            number: 2,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx174044-HBvsyKjDVPyO.jpg",
            imageHash: "hash",
            airDate: null
        },
        {
            id: "mayonaka-punch-episode-3",
            title: "EP 3",
            description: null,
            number: 3,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx174044-HBvsyKjDVPyO.jpg",
            imageHash: "hash",
            airDate: null
        },
        {
            id: "mayonaka-punch-episode-4",
            title: "EP 4",
            description: null,
            number: 4,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx174044-HBvsyKjDVPyO.jpg",
            imageHash: "hash",
            airDate: null
        },
        {
            id: "mayonaka-punch-episode-5",
            title: "EP 5",
            description: null,
            number: 5,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx174044-HBvsyKjDVPyO.jpg",
            imageHash: "hash",
            airDate: null
        },
        {
            id: "mayonaka-punch-episode-6",
            title: "EP 6",
            description: null,
            number: 6,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx174044-HBvsyKjDVPyO.jpg",
            imageHash: "hash",
            airDate: null
        },
        {
            id: "mayonaka-punch-episode-7",
            title: "EP 7",
            description: null,
            number: 7,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx174044-HBvsyKjDVPyO.jpg",
            imageHash: "hash",
            airDate: null
        },
        {
            id: "mayonaka-punch-episode-8",
            title: "EP 8",
            description: null,
            number: 8,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx174044-HBvsyKjDVPyO.jpg",
            imageHash: "hash",
            airDate: null
        },
        {
            id: "mayonaka-punch-episode-9",
            title: "EP 9",
            description: null,
            number: 9,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx174044-HBvsyKjDVPyO.jpg",
            imageHash: "hash",
            airDate: null
        },
        {
            id: "mayonaka-punch-episode-10",
            title: "EP 10",
            description: null,
            number: 10,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx174044-HBvsyKjDVPyO.jpg",
            imageHash: "hash",
            airDate: null
        },
        {
            id: "mayonaka-punch-episode-11",
            title: "EP 11",
            description: null,
            number: 11,
            image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx174044-HBvsyKjDVPyO.jpg",
            imageHash: "hash",
            airDate: null
        }
    ]
}

const Page = ({ params }: { params: { id: String } }) => {
    const { loading, user } = useAuth()
    const dispatch = useDispatch()
    const [animeId, setAnimeId] = useState<String | null>(params.id)
    return (
        <div className='flex flex-col  pt-20 min-h-screen'>
            <div
                style={{
                    background: `linear-gradient(rgba(0, 0, 0, 0.05), var(--background) 100%), url(${anime.cover})`,
                    backgroundOrigin: "inherit",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundClip: "revert-layer"
                }}
                className="flex flex-col justify-end items-center md:items-start w-full m-2 h-[400px]">
                <div className='flex flex-col md:flex-row items-center space-x-2 space-y-3 justify-start '>
                    <h1 className="text-4xl  text-justify font-sans p-4 font-bold">{anime.title.romaji}</h1>
                    {anime.genres.map((genre: string) => <button className='px-3 py-1 text-sm border border-white bg-gray-800 text-white rounded-xl hover:bg-fuchsia-950'>{genre}</button>)}
                </div>
            </div>
            {/* watch or save buttons */}
            <div className="flex w-full p-2 justify-start space-x-3">

                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                        if (!loading && !user) {
                            dispatch(toggleModalAuth(true))

                        }
                    }}
                    className='text-lg hover:bg-orange-500 bg-orange-400  border-orange-400 text-slate-800 hover:text-black flex items-center  border-2 text-justify navlinks font-bold py-2 px-4 space-x-2 rounded-2xl'><PlayCircleIcon className='w-6' /> Watch Now</motion.button>
                <motion.button
                    whileTap={{ scale: 0.95 }}

                    onClick={() => {
                        if (!loading && !user) {
                            dispatch(toggleModalAuth(true))

                        }
                    }} className='text-lg hover:bg-orange-500 border-orange-400 bg-orange-400 text-slate-800 hover:text-black flex items-center  border-2  text-justify navlinks font-bold py-2 px-4 space-x-2 rounded-2xl'><BookmarkIcon className='w-6' /> Add Favorit</motion.button>
            </div>

            <div className="flex w-full   md:flex-row flex-col  p-1">

                {/*  anime info*/}
                <div className="md:w-4/6  text-white w-full  p-2 pe-4">
                    <div className="w-full">

                        <h1 className="text-xl p-3  underline ">INTRO:</h1>
                        <p dangerouslySetInnerHTML={{ __html: anime.description }} className="navlinks leading-10 text-justify"></p>
                    </div>

                    <div className="w-full">

                        <h1 className="text-xl p-3 underline ">CASTS:</h1>
                        <div className="flex w-full p-2 overflow-x-scroll overflow-y-hidden">
                            {anime.characters.map((character: Character) => <img title={character.name.full} src={character.image} className="rounded-full w-20 h-20 object-cover m-2" />)}
                        </div>
                    </div>

                </div>
                {/*  trailer and more*/}


                <div className="md:w-2/6 flex flex-col justify-start  w-full py-3 ">
                    <div className="flex flex-col justify-start">
                        <h1 className="text-xl py-3 underline">TRAILER:</h1>

                        <iframe width="356" height="200" src={`https://www.youtube.com/embed/${anime.trailer.id}`} title="TVアニメ『薫る花は凛と咲く』ファーストPV" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <hr className="py-2" />

                    </div>
                    <div className="py-3">
                        <h1 className="text-xl py-3 underline">RAITING :</h1>
                        <Box sx={{ width: 200, display: 'flex', alignItems: 'center' }}>
                            <Rating
                                name="text-feedback"
                                value={anime.rating !== 0 ? anime.rating / 20 : 0}
                                readOnly
                                precision={0.5}
                                emptyIcon={<StarIcon style={{ opacity: 0.55, color: "white" }} fontSize="inherit" />}
                            />
                            <Box sx={{ ml: 2 }}>{Number(anime.rating) !== 0 ? parseFloat((anime.rating / 20).toFixed(2)) : 0}</Box>
                        </Box>
                        <hr className="py-2" />

                    </div>

                    <div className="flex flex-col py-3 ">
                        <h1 className="text-xl py-2  underline">STUDIOS :</h1>
                        <ol>
                            {anime.studios.map((item: string) => <li className="py-1">{item}</li>)}
                        </ol>
                        <hr className="py-2" />

                    </div>
                </div>



            </div>
        </div >

    )
}

export default Page