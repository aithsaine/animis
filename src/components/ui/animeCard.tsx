import { motion } from "framer-motion";
import { FaPlay, FaSave } from "react-icons/fa"; // Importing play and save icons

const AnimeCard = ({ anime }: {
    anime: {
        title: string,
        image: string,
        description: string,
        status: string,
        type: string,
        episodes: number
    }
}) => {
    return (
        <div className="flex flex-col">
            <motion.div
                className="relative w-[170px] h-[250px] rounded-md overflow-hidden cursor-pointer m-2 shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                {/* Anime Image */}
                <img
                    src={anime.image}
                    alt={anime.title}
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
                    <p className="p-2 text-justify text-white navlinks  text-sm font-semibold ">
                        {anime.description}
                    </p>
                </motion.div>


            </motion.div >
            <motion.div className="text-xs ms-2 navlinks">
                <span >{anime.type} | {anime.episodes} Eps | {anime.status}</span>
            </motion.div>
        </div>
    );
};

export default AnimeCard;
