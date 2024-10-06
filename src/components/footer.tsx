// import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
// const geners = [
//     'Action',
//     'Adventure',
//     'Comedy',
//     'Drama',
//     'Fantasy',
//     'Horror',
//     'Isekai',
//     'Mecha',
//     'Mystery',
//     'Psychological',
//     'Romance',
//     'Sci-Fi',
//     'Slice of Life',
//     'Sports',
//     'Supernatural',
//     'Thriller',
//     'Shoujo',
//     'Shounen',
//     'Josei',
//     'Seinen',
//     'Ecchi',
//     'Harem'
// ]
const Footer = () => {

    return (
        <footer className='w-full  navlinks bg-slate-950 border-t '>
            {/* <main>

                <div className="w-1/4 h-full flex  flex-col p-2">
                    <h1 className='text-white py-3   text-2xl '>Genre:</h1>
                    <div className="grid-cols-2 place-content-between grid gap-1">

                        {geners.map((item: string, index) => <Link href={"/"} className="" key={index}>{item}</Link>)}
                    </div>

                </div>
                <div className="w-1/4 h-full flex flex-col p-2"></div>
                <div className="w-1/4 h-full flex flex-col p-2"></div>
                <div className="w-1/4 h-full flex flex-col p-2"></div>

            </main> */}
            <div className=" text-gray-200 py-8 border-t border-gray-700">
                <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-6 md:space-y-4">


                    {/* Social Media Links */}
                    <p className="text-sm">
                        Designed and developed by <span className="font-semibold">Ismail Ait Hsaine</span>
                    </p>
                    <div className="flex space-x-6">
                        <a href="https://www.linkedin.com/in/ismail-ait-hsaine-557840244" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
                            <FaLinkedin size={28} />
                        </a>
                        <a href="https://github.com/aithsaine" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">
                            <FaGithub size={28} />
                        </a>
                        <a href="https://x.com/isma3iltatawi" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                            <FaTwitter size={28} />
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer