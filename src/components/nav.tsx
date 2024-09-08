import React from 'react'
import Image from "next/image"
import logo from "../../public/assets/images/logo.png"

const Nav = () => {
    return (
        <nav className='flex bg-gray-900 justify-between items-end w-full p-4 '>
            <div className='flex h-full space-x-4  items-center text-fuchsia-800'>
                <Image width={120} src={logo} alt='logo' />
                <div className='text-xl font-bold font-serif space-x-4'>
                    <button>Anime</button>
                    <button>Manga</button>
                    <button>News</button>

                </div>
            </div>

            <div>

            </div>
        </nav>
    )
}

export default Nav