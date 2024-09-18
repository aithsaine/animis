"use client";
import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AnimeCard from "./ui/animeCard";

const animeData = [
    {
        "id": "one-piece-100",
        "title": "One Piece",
        "url": "https://hianime.to/one-piece-100",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bcd84731a3eda4f4a306250769675065.jpg",
        "duration": "24m",
        "japaneseTitle": "One Piece",
        "type": "TV",
        "nsfw": false,
        "sub": 1119,
        "dub": 1096,
        "episodes": 0
    },
    {
        "id": "naruto-shippuden-355",
        "title": "Naruto: Shippuden",
        "url": "https://hianime.to/naruto-shippuden-355",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/9cbcf87f54194742e7686119089478f8.jpg",
        "duration": "23m",
        "japaneseTitle": "Naruto: Shippuuden",
        "type": "TV",
        "nsfw": false,
        "sub": 500,
        "dub": 500,
        "episodes": 500
    },
    {
        "id": "bleach-806",
        "title": "Bleach",
        "url": "https://hianime.to/bleach-806",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bd5ae1d387a59c5abcf5e1a6a616728c.jpg",
        "duration": "24m",
        "japaneseTitle": "Bleach",
        "type": "TV",
        "nsfw": false,
        "sub": 366,
        "dub": 366,
        "episodes": 366
    },
    {
        "id": "jujutsu-kaisen-2nd-season-18413",
        "title": "Jujutsu Kaisen 2nd Season",
        "url": "https://hianime.to/jujutsu-kaisen-2nd-season-18413",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b51f863b05f30576cf9d85fa9b911bb5.png",
        "duration": "24m",
        "japaneseTitle": "Jujutsu Kaisen 2nd Season",
        "type": "TV",
        "nsfw": true,
        "sub": 23,
        "dub": 23,
        "episodes": 23
    },
    {
        "id": "black-clover-2404",
        "title": "Black Clover",
        "url": "https://hianime.to/black-clover-2404",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/f58b0204c20ae3310f65ae7b8cb9987e.jpg",
        "duration": "23m",
        "japaneseTitle": "Black Clover",
        "type": "TV",
        "nsfw": false,
        "sub": 170,
        "dub": 170,
        "episodes": 170
    },
    {
        "id": "demon-slayer-kimetsu-no-yaiba-swordsmith-village-arc-18056",
        "title": "Demon Slayer: Kimetsu no Yaiba Swordsmith Village Arc",
        "url": "https://hianime.to/demon-slayer-kimetsu-no-yaiba-swordsmith-village-arc-18056",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/db2f3ce7b9cab7fdc160b005bffb899a.png",
        "duration": "24m",
        "japaneseTitle": "Kimetsu no Yaiba: Katanakaji no Sato-hen",
        "type": "TV",
        "nsfw": true,
        "sub": 11,
        "dub": 11,
        "episodes": 11
    },
    {
        "id": "boruto-naruto-next-generations-8143",
        "title": "Boruto: Naruto Next Generations",
        "url": "https://hianime.to/boruto-naruto-next-generations-8143",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/32c83e2ad4a43229996356840db3982c.jpg",
        "duration": "23m",
        "japaneseTitle": "Boruto: Naruto Next Generations",
        "type": "TV",
        "nsfw": false,
        "sub": 293,
        "dub": 293,
        "episodes": 293
    },
    {
        "id": "naruto-677",
        "title": "Naruto",
        "url": "https://hianime.to/naruto-677",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/5db400c33f7494bc8ae96f9e634958d0.jpg",
        "duration": "23m",
        "japaneseTitle": "Naruto",
        "type": "TV",
        "nsfw": false,
        "sub": 220,
        "dub": 220,
        "episodes": 220
    },
    {
        "id": "jujutsu-kaisen-tv-534",
        "title": "Jujutsu Kaisen (TV)",
        "url": "https://hianime.to/jujutsu-kaisen-tv-534",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/82402f796b7d84d7071ab1e03ff7747a.jpg",
        "duration": "23m",
        "japaneseTitle": "Jujutsu Kaisen (TV)",
        "type": "TV",
        "nsfw": false,
        "sub": 24,
        "dub": 24,
        "episodes": 24
    },
    {
        "id": "spy-x-family-17977",
        "title": "Spy x Family",
        "url": "https://hianime.to/spy-x-family-17977",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/88bd17534dc4884f23027035d23d74e5.jpg",
        "duration": "24m",
        "japaneseTitle": "Spy x Family",
        "type": "TV",
        "nsfw": false,
        "sub": 12,
        "dub": 12,
        "episodes": 12
    },
    {
        "id": "solo-leveling-18718",
        "title": "Solo Leveling",
        "url": "https://hianime.to/solo-leveling-18718",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b147d331e311a5d5c8ee81269725fc92.png",
        "duration": "24m",
        "japaneseTitle": "Ore dake Level Up na Ken",
        "type": "TV",
        "nsfw": false,
        "sub": 12,
        "dub": 12,
        "episodes": 12
    },
    {
        "id": "hunter-x-hunter-2",
        "title": "Hunter x Hunter",
        "url": "https://hianime.to/hunter-x-hunter-2",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/993c0361975cce4c7fbb11f8558f9664.jpg",
        "duration": "23m",
        "japaneseTitle": "Hunter x Hunter (2011)",
        "type": "TV",
        "nsfw": false,
        "sub": 148,
        "dub": 148,
        "episodes": 148
    },
    {
        "id": "demon-slayer-entertainment-district-arc-17483",
        "title": "Demon Slayer: Entertainment District Arc",
        "url": "https://hianime.to/demon-slayer-entertainment-district-arc-17483",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/3e13d0ab2ce8799c9da8ed59548b96e9.jpg",
        "duration": "24m",
        "japaneseTitle": "Kimetsu no Yaiba: Yuukaku-hen",
        "type": "TV",
        "nsfw": true,
        "sub": 11,
        "dub": 11,
        "episodes": 11
    },
    {
        "id": "blue-lock-17889",
        "title": "Blue Lock",
        "url": "https://hianime.to/blue-lock-17889",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/fced51e392ffd80041b3a1581ba7de2f.jpg",
        "duration": "24m",
        "japaneseTitle": "Blue Lock",
        "type": "TV",
        "nsfw": false,
        "sub": 24,
        "dub": 24,
        "episodes": 24
    },
    {
        "id": "demon-slayer-kimetsu-no-yaiba-47",
        "title": "Demon Slayer: Kimetsu no Yaiba",
        "url": "https://hianime.to/demon-slayer-kimetsu-no-yaiba-47",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/30df93feaa422101659e14d0a2a2f582.jpg",
        "duration": "23m",
        "japaneseTitle": "Kimetsu no Yaiba",
        "type": "TV",
        "nsfw": true,
        "sub": 26,
        "dub": 26,
        "episodes": 26
    },
    {
        "id": "my-hero-academia-season-6-18154",
        "title": "My Hero Academia Season 6",
        "url": "https://hianime.to/my-hero-academia-season-6-18154",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/20b7580c1abdf45a6eaf4826fc9fdf33.jpg",
        "duration": "24m",
        "japaneseTitle": "Boku no Hero Academia 6th Season",
        "type": "TV",
        "nsfw": false,
        "sub": 25,
        "dub": 25,
        "episodes": 25
    },
    {
        "id": "attack-on-titan-112",
        "title": "Attack on Titan",
        "url": "https://hianime.to/attack-on-titan-112",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/debf027d032c6d40b91fab16b2ff9bd4.jpg",
        "duration": "24m",
        "japaneseTitle": "Shingeki no Kyojin",
        "type": "TV",
        "nsfw": true,
        "sub": 25,
        "dub": 25,
        "episodes": 25
    },
    {
        "id": "hells-paradise-18332",
        "title": "Hell's Paradise",
        "url": "https://hianime.to/hells-paradise-18332",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/5fd0a7d4f0e1a9088c85bc0dcb2f176a.png",
        "duration": "22m",
        "japaneseTitle": "Jigokuraku",
        "type": "TV",
        "nsfw": true,
        "sub": 13,
        "dub": 13,
        "episodes": 13
    },
    {
        "id": "chainsaw-man-17406",
        "title": "Chainsaw Man",
        "url": "https://hianime.to/chainsaw-man-17406",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/b3da1326e07269ddd8d73475c5dabf2c.jpg",
        "duration": "24m",
        "japaneseTitle": "Chainsaw Man",
        "type": "TV",
        "nsfw": true,
        "sub": 12,
        "dub": 12,
        "episodes": 12
    },
    {
        "id": "attack-on-titan-final-season-part-2-17753",
        "title": "Attack on Titan: Final Season, Part 2",
        "url": "https://hianime.to/attack-on-titan-final-season-part-2-17753",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/160831b6a0c1303e1439925d8f8c7395.jpg",
        "duration": "24m",
        "japaneseTitle": "Shingeki no Kyojin: The Final Season Part 2",
        "type": "TV",
        "nsfw": true,
        "sub": 12,
        "dub": 12,
        "episodes": 12
    },
    {
        "id": "the-eminence-in-shadow-17473",
        "title": "The Eminence in Shadow",
        "url": "https://hianime.to/the-eminence-in-shadow-17473",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/bca4a71e271a30fb1b44d33d56db8f8f.jpg",
        "duration": "23m",
        "japaneseTitle": "Kage no Jitsuryokusha ni Naritakute!",
        "type": "TV",
        "nsfw": true,
        "sub": 20,
        "dub": 20,
        "episodes": 20
    },
    {
        "id": "dragon-ball-z-325",
        "title": "Dragon Ball Z",
        "url": "https://hianime.to/dragon-ball-z-325",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/2ac32c050b4dff7747fcc7f64c01edbd.jpg",
        "duration": "24m",
        "japaneseTitle": "Dragon Ball Z",
        "type": "TV",
        "nsfw": false,
        "sub": 291,
        "dub": 291,
        "episodes": 291
    },
    {
        "id": "death-note-60",
        "title": "Death Note",
        "url": "https://hianime.to/death-note-60",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/5e61f3e7c0045e46b670d31a5bb39c68.jpg",
        "duration": "23m",
        "japaneseTitle": "Death Note",
        "type": "TV",
        "nsfw": true,
        "sub": 37,
        "dub": 37,
        "episodes": 37
    },
    {
        "id": "demon-slayer-kimetsu-no-yaiba-hashira-training-arc-19107",
        "title": "Demon Slayer: Kimetsu no Yaiba Hashira Training Arc",
        "url": "https://hianime.to/demon-slayer-kimetsu-no-yaiba-hashira-training-arc-19107",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/1f06eb0baf5520aa639b546fc189400d.jpg",
        "duration": "24m",
        "japaneseTitle": "Kimetsu no Yaiba: Hashira Geiko-hen",
        "type": "TV",
        "nsfw": true,
        "sub": 8,
        "dub": 8,
        "episodes": 8
    },
    {
        "id": "dragon-ball-super-1692",
        "title": "Dragon Ball Super",
        "url": "https://hianime.to/dragon-ball-super-1692",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/6908f85a069414d40530042f2cdd8c8a.jpg",
        "duration": "23m",
        "japaneseTitle": "Dragon Ball Super",
        "type": "TV",
        "nsfw": false,
        "sub": 131,
        "dub": 131,
        "episodes": 131
    },
    {
        "id": "mashle-magic-and-muscles-18339",
        "title": "Mashle: Magic and Muscles",
        "url": "https://hianime.to/mashle-magic-and-muscles-18339",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/9faf29fb396c436d19ed83fa82a31e2f.jpg",
        "duration": "23m",
        "japaneseTitle": "Mashle",
        "type": "TV",
        "nsfw": false,
        "sub": 12,
        "dub": 12,
        "episodes": 12
    },
    {
        "id": "i-got-a-cheat-skill-in-another-world-and-became-unrivaled-in-the-real-world-too-18343",
        "title": "I Got a Cheat Skill in Another World and Became Unrivaled in The Real World, Too",
        "url": "https://hianime.to/i-got-a-cheat-skill-in-another-world-and-became-unrivaled-in-the-real-world-too-18343",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/0ad5356f28ee75bccfde8b69ea6a5e54.jpg",
        "duration": "24m",
        "japaneseTitle": "Isekai de Cheat Skill wo Te ni Shita Ore wa, Genjitsu Sekai wo mo Musou Suru: Level Up wa Jinsei wo Kaeta",
        "type": "TV",
        "nsfw": false,
        "sub": 13,
        "dub": 13,
        "episodes": 13
    },
    {
        "id": "attack-on-titan-season-3-85",
        "title": "Attack on Titan Season 3",
        "url": "https://hianime.to/attack-on-titan-season-3-85",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/98b21bfbd9fa3d49ec80ba8fe75ed5cd.jpg",
        "duration": "23m",
        "japaneseTitle": "Shingeki no Kyojin Season 3",
        "type": "TV",
        "nsfw": true,
        "sub": 22,
        "dub": 22,
        "episodes": 22
    },
    {
        "id": "classroom-of-the-elite-2nd-season-18076",
        "title": "Classroom of the Elite 2nd Season",
        "url": "https://hianime.to/classroom-of-the-elite-2nd-season-18076",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/6ac7e4623d5c97699058b8b4673cf8e5.png",
        "duration": "23m",
        "japaneseTitle": "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e (TV) 2nd Season",
        "type": "TV",
        "nsfw": false,
        "sub": 13,
        "dub": 13,
        "episodes": 13
    },
    {
        "id": "attack-on-titan-final-season-part-1-15548",
        "title": "Attack on Titan: Final Season, Part 1",
        "url": "https://hianime.to/attack-on-titan-final-season-part-1-15548",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/83da53919d7a20332be01686141f18f6.jpg",
        "duration": "23m",
        "japaneseTitle": "Shingeki no Kyojin: Final Season, Part 1",
        "type": "TV",
        "nsfw": false,
        "sub": 16,
        "dub": 16,
        "episodes": 16
    },
    {
        "id": "dragon-ball-509",
        "title": "Dragon Ball",
        "url": "https://hianime.to/dragon-ball-509",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/cbe9999ab6606992fb000566ebf5d99b.jpg",
        "duration": "24m",
        "japaneseTitle": "Dragon Ball",
        "type": "TV",
        "nsfw": false,
        "sub": 153,
        "dub": 153,
        "episodes": 153
    },
    {
        "id": "my-hero-academia-5th-season-15666",
        "title": "My Hero Academia 5th Season",
        "url": "https://hianime.to/my-hero-academia-5th-season-15666",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/463d27f4c66bc7763a0fcfc952df2299.jpg",
        "duration": "23m",
        "japaneseTitle": "Boku no Hero Academia 5th Season",
        "type": "TV",
        "nsfw": false,
        "sub": 25,
        "dub": 25,
        "episodes": 25
    },
    {
        "id": "fairy-tail-930",
        "title": "Fairy Tail",
        "url": "https://hianime.to/fairy-tail-930",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/ccbc20fd8ddf9b2000bf23894a787436.jpg",
        "duration": "24m",
        "japaneseTitle": "Fairy Tail",
        "type": "TV",
        "nsfw": false,
        "sub": 175,
        "dub": 175,
        "episodes": 175
    },
    {
        "id": "my-star-18330",
        "title": "My Star",
        "url": "https://hianime.to/my-star-18330",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/995928d6858977d66f7da57e0e0af08a.jpg",
        "duration": "24m",
        "japaneseTitle": "\"Oshi no Ko\"",
        "type": "TV",
        "nsfw": false,
        "sub": 11,
        "dub": 11,
        "episodes": 11
    },
    {
        "id": "jujutsu-kaisen-0-movie-17763",
        "title": "Jujutsu Kaisen 0 Movie",
        "url": "https://hianime.to/jujutsu-kaisen-0-movie-17763",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/a26294497c6afa9b885636b373d611f9.jpg",
        "duration": "105m",
        "japaneseTitle": "Jujutsu Kaisen 0 Movie",
        "type": "Movie",
        "nsfw": true,
        "sub": 1,
        "dub": 1,
        "episodes": 0
    },
    {
        "id": "vinland-saga-2nd-season-18239",
        "title": "Vinland Saga: 2nd Season",
        "url": "https://hianime.to/vinland-saga-2nd-season-18239",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/173e4c5db060f057506138057261b259.jpg",
        "duration": "25m",
        "japaneseTitle": "Vinland Saga Season 2",
        "type": "TV",
        "nsfw": true,
        "sub": 24,
        "dub": 24,
        "episodes": 24
    },
    {
        "id": "bleach-thousandyear-blood-war-the-separation-18420",
        "title": "Bleach: Thousand-Year Blood War - The Separation",
        "url": "https://hianime.to/bleach-thousandyear-blood-war-the-separation-18420",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/0f474e6ea130efd9372f913356037955.jpg",
        "duration": "24m",
        "japaneseTitle": "Bleach: Sennen Kessen-hen - Ketsubetsu-tan",
        "type": "TV",
        "nsfw": true,
        "sub": 13,
        "dub": 13,
        "episodes": 13
    },
    {
        "id": "my-hero-academia-season-7-19146",
        "title": "My Hero Academia Season 7",
        "url": "https://hianime.to/my-hero-academia-season-7-19146",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/af4938d7388aad3438e443e74b02531e.jpg",
        "duration": "24m",
        "japaneseTitle": "Boku no Hero Academia 7th Season",
        "type": "TV",
        "nsfw": false,
        "sub": 17,
        "dub": 15,
        "episodes": 0
    },
    {
        "id": "wind-breaker-19136",
        "title": "Wind Breaker",
        "url": "https://hianime.to/wind-breaker-19136",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/d9bb23228e5a641b5a3e9386382dae3a.jpg",
        "duration": "23m",
        "japaneseTitle": "Wind Breaker",
        "type": "TV",
        "nsfw": false,
        "sub": 13,
        "dub": 13,
        "episodes": 13
    },
    {
        "id": "haikyu-76",
        "title": "Haikyu!!",
        "url": "https://hianime.to/haikyu-76",
        "image": "https://cdn.noitatnemucod.net/thumbnail/300x400/100/126756b57f51180a156a6895b0166643.jpg",
        "duration": "24m",
        "japaneseTitle": "Haikyuu!!",
        "type": "TV",
        "nsfw": false,
        "sub": 25,
        "dub": 25,
        "episodes": 25
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

                        <AnimeCard anime={{ ...anime, title: anime.title }} />
                    ))}
                </div>


            </div>
        </div>
    );
};

export default CustomCarousel;
