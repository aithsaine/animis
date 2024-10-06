import { TvIcon, BookOpenIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AnimeCard = ({ anime }: {
    anime: {
        id?: string
        title?: string | null,
        image: string,
        description?: string | null,
        status?: string,
        type?: string,
        episodes?: number,
        releaseDate?: number,
        format?: string,
        seasonYear?: number
    }
}) => {
    return (
        <Link href={`/media/${anime.id}`} className="flex  flex-col relative">
            <motion.div
                className="relative group sm:w-[170px] w-[150px] h-[250px] rounded-md overflow-hidden cursor-pointer m-2 shadow-md"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
            >
                <span className="top-1 transition duration-300 ease-in-out px-1 flex group-hover:opacity-100 space-x-1 navlinks     text-white  z-40 absolute left-2 bg-amber-700 rounded-full">{anime.type !== "MANGA" ? <TvIcon className="w-4 h-4 p-0.5 " /> : <BookOpenIcon className="w-4 h-4 p-0.5 " />}<span className="hidden group-hover:block text-xs">{anime.type}</span></span>
                {/* Anime Image */}
                <Image
                    width={250}
                    height={400}
                    src={anime.image}
                    alt={anime.title ?? ""}
                    className="w-full h-full object-cover"
                />

                {/* Title and Icons - Hidden until hover */}
                <motion.div
                    className="absolute w-full text-center navlinks h-full inset-0 top-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0 transition-opacity duration-400 ease-in-out hover:opacity-100"
                >
                    {/* Play and Save Icons */}

                    {/* Anime Title */}
                    <h1 className="text-white font-semibold text-lg">
                        {anime.title}
                    </h1>
                    <p className="p-2 text-justify text-white navlinks  text-sm font-semibold " dangerouslySetInnerHTML={{ __html: anime.description ? (anime.description.length > 50 ? anime.description.substring(0, 50) + "..." : anime.description) : "" }}>
                    </p>
                </motion.div>


            </motion.div >
            <motion.div className="text-xs ms-2 navlinks">
                <span >{anime.format && String(anime.format)}{anime.seasonYear && " | " + String(anime.seasonYear)}{anime.releaseDate && " | " + String(anime.releaseDate)}{anime.type !== "MANGA" ?? ' | ' + String(anime.episodes) + `  Eps `} {anime.status && ' | ' + anime.status}</span>
            </motion.div>
        </Link>

    );
};

export default AnimeCard;
