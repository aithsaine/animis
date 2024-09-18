"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AnimeCard from "./ui/animeCard";

const animeData = [
    {
        "id": "16498",
        "malId": 16498,
        "title": {
            "romaji": "Shingeki no Kyojin",
            "english": "Attack on Titan",
            "native": "進撃の巨人",
            "userPreferred": "Shingeki no Kyojin"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-73IhOXpJZiMF.jpg",
        "imageHash": "hash",
        "trailer": {
            "id": "luYOt2-c2TI",
            "site": "youtube",
            "thumbnail": "https://i.ytimg.com/vi/luYOt2-c2TI/hqdefault.jpg",
            "thumbnailHash": "hash"
        },
        "description": "Several hundred years ago, humans were nearly exterminated by titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of titans.<br><br>\r\nFlash forward to the present and the city has not seen a titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a colossal titan that appears out of thin air. As the smaller titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single titan and take revenge for all of mankind.<br><br>\r\n(Source: MangaHelpers) ",
        "status": "Completed",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/16498-8jpFCOcDmneX.jpg",
        "coverHash": "hash",
        "rating": 84,
        "releaseDate": 2013,
        "color": "#f1a143",
        "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Mystery"
        ],
        "totalEpisodes": 25,
        "duration": 24,
        "type": "TV"
    },
    {
        "id": "101922",
        "malId": 38000,
        "title": {
            "romaji": "Kimetsu no Yaiba",
            "english": "Demon Slayer: Kimetsu no Yaiba",
            "native": "鬼滅の刃",
            "userPreferred": "Kimetsu no Yaiba"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-WBsBl0ClmgYL.jpg",
        "imageHash": "hash",
        "trailer": {
            "id": "6vMuWuWlW4I",
            "site": "youtube",
            "thumbnail": "https://i.ytimg.com/vi/6vMuWuWlW4I/hqdefault.jpg",
            "thumbnailHash": "hash"
        },
        "description": "It is the Taisho Period in Japan. Tanjiro, a kindhearted boy who sells charcoal for a living, finds his family slaughtered by a demon. To make matters worse, his younger sister Nezuko, the sole survivor, has been transformed into a demon herself. Though devastated by this grim reality, Tanjiro resolves to become a “demon slayer” so that he can turn his sister back into a human, and kill the demon that massacred his family.<br>\n<br>\n(Source: Crunchyroll)",
        "status": "Completed",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/101922-YfZhKBUDDS6L.jpg",
        "coverHash": "hash",
        "rating": 83,
        "releaseDate": 2019,
        "color": "#e4bba1",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy",
            "Supernatural"
        ],
        "totalEpisodes": 26,
        "duration": 24,
        "type": "TV"
    },
    {
        "id": "1535",
        "malId": 1535,
        "title": {
            "romaji": "DEATH NOTE",
            "english": "Death Note",
            "native": "DEATH NOTE",
            "userPreferred": "DEATH NOTE"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1535-4r88a1tsBEIz.jpg",
        "imageHash": "hash",
        "trailer": {
            "id": "NlJZ-YgAt-c",
            "site": "youtube",
            "thumbnail": "https://i.ytimg.com/vi/NlJZ-YgAt-c/hqdefault.jpg",
            "thumbnailHash": "hash"
        },
        "description": "Light Yagami is a genius high school student who is about to learn about life through a book of death. When a bored shinigami, a God of Death, named Ryuk drops a black notepad called a <i>Death Note</i>, Light receives power over life and death with the stroke of a pen. Determined to use this dark gift for the best, Light sets out to rid the world of evil… namely, the people he believes to be evil. Should anyone hold such power?<br>\n<br>\nThe consequences of Light’s actions will set the world ablaze.<br>\n<br>\n(Source: Viz Media)",
        "status": "Completed",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/1535.jpg",
        "coverHash": "hash",
        "rating": 84,
        "releaseDate": 2006,
        "color": null,
        "genres": [
            "Mystery",
            "Psychological",
            "Supernatural",
            "Thriller"
        ],
        "totalEpisodes": 37,
        "duration": 23,
        "type": "TV"
    },
    {
        "id": "113415",
        "malId": 40748,
        "title": {
            "romaji": "Jujutsu Kaisen",
            "english": "JUJUTSU KAISEN",
            "native": "呪術廻戦",
            "userPreferred": "Jujutsu Kaisen"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-bbBWj4pEFseh.jpg",
        "imageHash": "hash",
        "trailer": {
            "id": "pkKu9hLT-t8",
            "site": "youtube",
            "thumbnail": "https://i.ytimg.com/vi/pkKu9hLT-t8/hqdefault.jpg",
            "thumbnailHash": "hash"
        },
        "description": "A boy fights... for \"the right death.\"<br>\n<br>\nHardship, regret, shame: the negative feelings that humans feel become Curses that lurk in our everyday lives. The Curses run rampant throughout the world, capable of leading people to terrible misfortune and even death. What's more, the Curses can only be exorcised by another Curse.<br>\n<br>\nItadori Yuji is a boy with tremendous physical strength, though he lives a completely ordinary high school life. One day, to save a friend who has been attacked by Curses, he eats the finger of the Double-Faced Specter, taking the Curse into his own soul. From then on, he shares one body with the Double-Faced Specter. Guided by the most powerful of sorcerers, Gojou Satoru, Itadori is admitted to the Tokyo Metropolitan Technical High School of Sorcery, an organization that fights the Curses... and thus begins the heroic tale of a boy who became a Curse to exorcise a Curse, a life from which he could never turn back.\n<br><br>\n(Source: Crunchyroll)<br>\n<br>\n<i>Note: The first episode received an early web premiere on September 19th, 2020. The regular TV broadcast started on October 3rd, 2020.</i>",
        "status": "Completed",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/113415-jQBSkxWAAk83.jpg",
        "coverHash": "hash",
        "rating": 85,
        "releaseDate": 2020,
        "color": "#e45d5d",
        "genres": [
            "Action",
            "Drama",
            "Supernatural"
        ],
        "totalEpisodes": 24,
        "duration": 24,
        "type": "TV"
    },
    {
        "id": "21459",
        "malId": 31964,
        "title": {
            "romaji": "Boku no Hero Academia",
            "english": "My Hero Academia",
            "native": "僕のヒーローアカデミア",
            "userPreferred": "Boku no Hero Academia"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21459-RoPwgrZ32gM3.jpg",
        "imageHash": "hash",
        "trailer": {
            "id": "AhqVltWDqFA",
            "site": "youtube",
            "thumbnail": "https://i.ytimg.com/vi/AhqVltWDqFA/hqdefault.jpg",
            "thumbnailHash": "hash"
        },
        "description": "What would the world be like if 80 percent of the population manifested extraordinary superpowers called “Quirks” at age four? Heroes and villains would be battling it out everywhere! Becoming a hero would mean learning to use your power, but where would you go to study? U.A. High's Hero Program of course! But what would you do if you were one of the 20 percent who were born Quirkless?<br><br>\n\nMiddle school student Izuku Midoriya wants to be a hero more than anything, but he hasn't got an ounce of power in him. With no chance of ever getting into the prestigious U.A. High School for budding heroes, his life is looking more and more like a dead end. Then an encounter with All Might, the greatest hero of them all gives him a chance to change his destiny…<br><br>\n\n(Source: Viz Media)",
        "status": "Completed",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21459-yeVkolGKdGUV.jpg",
        "coverHash": "hash",
        "rating": 77,
        "releaseDate": 2016,
        "color": "#ffd600",
        "genres": [
            "Action",
            "Adventure",
            "Comedy"
        ],
        "totalEpisodes": 13,
        "duration": 24,
        "type": "TV"
    },
    {
        "id": "11061",
        "malId": 11061,
        "title": {
            "romaji": "HUNTER×HUNTER (2011)",
            "english": "Hunter x Hunter (2011)",
            "native": "HUNTER×HUNTER (2011)",
            "userPreferred": "HUNTER×HUNTER (2011)"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx11061-NpIIobuQNbJW.png",
        "imageHash": "hash",
        "trailer": {
            "id": "d6kBeJjTGnY",
            "site": "youtube",
            "thumbnail": "https://i.ytimg.com/vi/d6kBeJjTGnY/hqdefault.jpg",
            "thumbnailHash": "hash"
        },
        "description": "A new adaption of the manga of the same name by Togashi Yoshihiro.<br><br>\nA Hunter is one who travels the world doing all sorts of dangerous tasks. From capturing criminals to searching deep within uncharted lands for any lost treasures. Gon is a young boy whose father disappeared long ago, being a Hunter. He believes if he could also follow his father's path, he could one day reunite with him.<br><br>\nAfter becoming 12, Gon leaves his home and takes on the task of entering the Hunter exam, notorious for its low success rate and high probability of death to become an official Hunter. He befriends the revenge-driven Kurapika, the doctor-to-be Leorio and the rebellious ex-assassin Killua in the exam, with their friendship prevailing throughout the many trials and threats they come upon taking on the dangerous career of a Hunter.",
        "status": "Completed",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11061-8WkkTZ6duKpq.jpg",
        "coverHash": "hash",
        "rating": 89,
        "releaseDate": 2011,
        "color": "#f1d65d",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy"
        ],
        "totalEpisodes": 148,
        "duration": 24,
        "type": "TV"
    },
    {
        "id": "21087",
        "malId": 30276,
        "title": {
            "romaji": "One Punch Man",
            "english": "One-Punch Man",
            "native": "ワンパンマン",
            "userPreferred": "One Punch Man"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21087-2OkAdgfnQown.jpg",
        "imageHash": "hash",
        "trailer": {
            "id": "RzmFKUDOUgw",
            "site": "youtube",
            "thumbnail": "https://i.ytimg.com/vi/RzmFKUDOUgw/hqdefault.jpg",
            "thumbnailHash": "hash"
        },
        "description": "Saitama has a rather peculiar hobby, being a superhero, but despite his heroic deeds and superhuman abilities, a shadow looms over his life. He's become much too powerful, to the point that every opponent ends up defeated with a single punch.\n<br><br>\nThe lack of challenge has driven him into a state of apathy, as he watches his life pass by having lost all enthusiasm, at least until he's unwillingly thrust in the role of being a mentor to the young and revenge-driven Genos.   \n\n",
        "status": "Completed",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/21087-sHb9zUZFsHe1.jpg",
        "coverHash": "hash",
        "rating": 83,
        "releaseDate": 2015,
        "color": "#e4ae5d",
        "genres": [
            "Action",
            "Comedy",
            "Sci-Fi",
            "Supernatural"
        ],
        "totalEpisodes": 12,
        "duration": 24,
        "type": "TV"
    },
    {
        "id": "20605",
        "malId": 22319,
        "title": {
            "romaji": "Tokyo Ghoul",
            "english": "Tokyo Ghoul",
            "native": "東京喰種 トーキョーグール",
            "userPreferred": "Tokyo Ghoul"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx20605-fmnHdfurM7m6.jpg",
        "imageHash": "hash",
        "trailer": {
            "id": "XfQUjYsVBrE",
            "site": "youtube",
            "thumbnail": "https://i.ytimg.com/vi/XfQUjYsVBrE/hqdefault.jpg",
            "thumbnailHash": "hash"
        },
        "description": "The suspense horror/dark fantasy story is set in Tokyo, which is haunted by mysterious \"ghouls\" who are devouring humans. People are gripped by the fear of these ghouls whose identities are masked in mystery. An ordinary college student named Kaneki encounters Rize, a girl who is an avid reader like him, at the café he frequents. Little does he realize that his fate will change overnight.\n<br><br>\n(Source: Anime News Network)",
        "status": "Completed",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20605-RCJ7M71zLmrh.jpg",
        "coverHash": "hash",
        "rating": 75,
        "releaseDate": 2014,
        "color": "#35DDFF",
        "genres": [
            "Action",
            "Drama",
            "Horror",
            "Mystery",
            "Psychological",
            "Supernatural"
        ],
        "totalEpisodes": 12,
        "duration": 24,
        "type": "TV"
    },
    {
        "id": "20958",
        "malId": 25777,
        "title": {
            "romaji": "Shingeki no Kyojin 2",
            "english": "Attack on Titan Season 2",
            "native": "進撃の巨人２",
            "userPreferred": "Shingeki no Kyojin 2"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20958-HuFJyr54Mmir.jpg",
        "imageHash": "hash",
        "trailer": {
            "id": "zLaVP8IhIuc",
            "site": "youtube",
            "thumbnail": "https://i.ytimg.com/vi/zLaVP8IhIuc/hqdefault.jpg",
            "thumbnailHash": "hash"
        },
        "description": "Eren Jaeger swore to wipe out every last Titan, but in a battle for his life he wound up becoming the thing he hates most. With his new powers, he fights for humanity's freedom facing the monsters that threaten his home. After a bittersweet victory against the Female Titan, Eren finds no time to rest—a horde of Titans is approaching Wall Rose and the battle for humanity continues!<br><br>\n\n(Source: Funimation)",
        "status": "Completed",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20958-Y7eQdz9VENBD.jpg",
        "coverHash": "hash",
        "rating": 84,
        "releaseDate": 2017,
        "color": "#6AA66F",
        "genres": [
            "Action",
            "Drama",
            "Fantasy",
            "Mystery"
        ],
        "totalEpisodes": 12,
        "duration": 25,
        "type": "TV"
    },
    {
        "id": "11757",
        "malId": 11757,
        "title": {
            "romaji": "Sword Art Online",
            "english": "Sword Art Online",
            "native": "ソードアート・オンライン",
            "userPreferred": "Sword Art Online"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx11757-Q9P2zjCPICq5.jpg",
        "imageHash": "hash",
        "trailer": {
            "id": "C8Jl_-b7ju0",
            "site": "youtube",
            "thumbnail": "https://i.ytimg.com/vi/C8Jl_-b7ju0/hqdefault.jpg",
            "thumbnailHash": "hash"
        },
        "description": "In the near future, a Virtual Reality Massive Multiplayer Online Role-Playing Game (VRMMORPG) called Sword Art Online has been released where players control their avatars with their bodies using a piece of technology called Nerve Gear. One day, players discover they cannot log out, as the game creator is holding them captive unless they reach the 100th floor of the game's tower and defeat the final boss. However, if they die in the game, they die in real life. Their struggle for survival starts now...<br><br>\n(Source: Crunchyroll)",
        "status": "Completed",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/11757-TlEEV9weG4Ag.jpg",
        "coverHash": "hash",
        "rating": 69,
        "releaseDate": 2012,
        "color": "#5DC0E4",
        "genres": [
            "Action",
            "Adventure",
            "Fantasy",
            "Romance"
        ],
        "totalEpisodes": 25,
        "duration": 23,
        "type": "TV"
    },
    {
        "id": "5114",
        "malId": 5114,
        "title": {
            "romaji": "Hagane no Renkinjutsushi: FULLMETAL ALCHEMIST",
            "english": "Fullmetal Alchemist: Brotherhood",
            "native": "鋼の錬金術師 FULLMETAL ALCHEMIST",
            "userPreferred": "Hagane no Renkinjutsushi: FULLMETAL ALCHEMIST"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx5114-Dilr312jctdJ.jpg",
        "imageHash": "hash",
        "trailer": {
            "thumbnailHash": "hash"
        },
        "description": "\"In order for something to be obtained, something of equal value must be lost.\"\n<br><br>\nAlchemy is bound by this Law of Equivalent Exchange—something the young brothers Edward and Alphonse Elric only realize after attempting human transmutation: the one forbidden act of alchemy. They pay a terrible price for their transgression—Edward loses his left leg, Alphonse his physical body. It is only by the desperate sacrifice of Edward's right arm that he is able to affix Alphonse's soul to a suit of armor. Devastated and alone, it is the hope that they would both eventually return to their original bodies that gives Edward the inspiration to obtain metal limbs called \"automail\" and become a state alchemist, the Fullmetal Alchemist.\n<br><br>\nThree years of searching later, the brothers seek the Philosopher's Stone, a mythical relic that allows an alchemist to overcome the Law of Equivalent Exchange. Even with military allies Colonel Roy Mustang, Lieutenant Riza Hawkeye, and Lieutenant Colonel Maes Hughes on their side, the brothers find themselves caught up in a nationwide conspiracy that leads them not only to the true nature of the elusive Philosopher's Stone, but their country's murky history as well. In between finding a serial killer and racing against time, Edward and Alphonse must ask themselves if what they are doing will make them human again... or take away their humanity.\n<br><br>\n(Source: MAL Rewrite)",
        "status": "Completed",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/5114-q0V5URebphSG.jpg",
        "coverHash": "hash",
        "rating": 90,
        "releaseDate": 2009,
        "color": "#e4c993",
        "genres": [
            "Action",
            "Adventure",
            "Drama",
            "Fantasy"
        ],
        "totalEpisodes": 64,
        "duration": 25,
        "type": "TV"
    },
    {
        "id": "20",
        "malId": 20,
        "title": {
            "romaji": "NARUTO",
            "english": "Naruto",
            "native": "NARUTO -ナルト-",
            "userPreferred": "NARUTO"
        },
        "image": "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx20-LxrhhIQyiE60.jpg",
        "imageHash": "hash",
        "trailer": {
            "thumbnailHash": "hash"
        },
        "description": "Naruto Uzumaki, a hyperactive and knuckle-headed ninja, lives in Konohagakure, the Hidden Leaf village. Moments prior to his birth, a huge demon known as the Kyuubi, the Nine-tailed Fox, attacked Konohagakure and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the 4th Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto. <br><br>\nShunned because of the presence of the Kyuubi inside him, Naruto struggles to find his place in the village. He strives to become the Hokage of Konohagakure, and he meets many friends and foes along the way. <br><br>\n(Source: MAL Rewrite)",
        "status": "Completed",
        "cover": "https://s4.anilist.co/file/anilistcdn/media/anime/banner/20-HHxhPj5JD13a.jpg",
        "coverHash": "hash",
        "rating": 79,
        "releaseDate": 2002,
        "color": "#e47850",
        "genres": [
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Fantasy",
            "Supernatural"
        ],
        "totalEpisodes": 220,
        "duration": 23,
        "type": "TV"
    }
]

const CustomCarousel = () => {
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
        } else if (windowWidth <= 1280) {
            setSlidesPerView(6); // Small desktop view
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
        setCurrentIndex((prevIndex) => (prevIndex + 1) % animeData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? animeData.length - 1 : prevIndex - 1
        );
    };


    // Sliced data to display the right number of cards
    const visibleAnimes = animeData.slice(
        currentIndex,
        currentIndex + slidesPerView
    ).concat(
        animeData.slice(0, Math.max(0, currentIndex + slidesPerView - animeData.length))
    );

    return (
        <div className="pt-9">


            <div className="w-full flex px-5 items-center  justify-between" >
                <h1 className="  text-pretty navlinks text-white text-2xl">Most Popular :</h1>
                <div className="flex space-x-4">

                    <button onClick={prevSlide} className="hover:bg-fuchsia-300 bg-white text-black rounded-full w-10 flex items-center justify-center h-10"><FaArrowLeft className="text-xl" /></button>
                    <button onClick={nextSlide} className="hover:bg-fuchsia-300 bg-white text-black rounded-full w-10 flex items-center justify-center h-10"><FaArrowRight className="text-xl" /></button>
                </div>
            </div>
            <div className="relative w-full bg-slate-950 py-2 h-[400px]  flex items-center justify-center">

                <div className="flex items-center justify-around w-full  overflow-hidden">
                    {visibleAnimes.map((anime, index) => (

                        <AnimeCard anime={{ ...anime, title: anime.title.romaji }} />
                    ))}
                </div>


            </div>
        </div>
    );
};

export default CustomCarousel;
