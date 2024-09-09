"use client"
import React, { useState } from 'react'
import Image from "next/image"
import logo from "../../public/assets/images/logo.png"
import '../../public/assets/styles/nav.css'
import { BookmarkIcon, MagnifyingGlassIcon, Cog8ToothIcon, EyeIcon, XCircleIcon, ArrowLeftEndOnRectangleIcon, UserIcon } from '@heroicons/react/24/outline'
import fakeProfileImage from "../../public/assets/images/asta.jpg"
import { FaCaretDown } from 'react-icons/fa'
import Link from 'next/link'
import Modal from './login'
const Nav = () => {
    const [IsopenLoginModal, setIsOpenModalLogin] = useState(false)
    const [isOpenDropDownSettings, setIsOpenDropDownSettings] = useState(false)
    const islogged = false


    return (
        <nav className='flex fixed bg-gray-900 justify-between px-4 md:px-16 py-2 items-center w-full  '>
            <div className='flex h-full space-x-4  items-center text-fuchsia-900'>
                <Image width={120} src={logo} alt='logo' />
                <div className='navlinks hidden md:block  text-2xl  space-x-4'>
                    <button className='hover:text-fuchsia-600'>Anime</button>
                    <button className='hover:text-fuchsia-600'>Manga</button>
                    <button className='hover:text-fuchsia-600'>News</button>

                </div>
            </div>

            <div className='flex items-center h-full  space-x-6'>

                <Link href={"#"}><MagnifyingGlassIcon className='text-white hover:text-fuchsia-600  cursor-pointer w-6 hover:scale-110' /></Link>
                <BookmarkIcon className='text-white w-6 cursor-pointer hover:text-fuchsia-600  hover:scale-110' />
                {islogged ? <button onClick={() => setIsOpenDropDownSettings(!isOpenDropDownSettings)} className='flex  relative hover:text-fuchsia-600  items-center'><Image width={40} className='cursor-pointer border-2 border-fuchsia-500 rounded-full' src={fakeProfileImage} alt="" /><FaCaretDown className='text-white w-4' />

                    <div className={`md:absolute fixed ${isOpenDropDownSettings ? "flex" : "hidden"} p-2  md:top-14  rounded-xl md:justify-start right-0 flex-col  bg-gray-900 w-screen h-screen items-center justify-center top-0 md:w-44 md:h-auto  `}>
                        <XCircleIcon className='bg-red fixed top-2 right-2 cursor-pointer block md:hidden hover:text-red-700 w-11' />
                        <button className='my-1 w-full hover:bg-fuchsia-600  px-2 py-1 border-fuchsia-600 border rounded-lg bg-transparent text-white flex items-center '><Cog8ToothIcon width={20} className='mx-1' /> Settings</button>
                        <button className='my-1  w-full hover:bg-fuchsia-600 px-2 py-1 border-fuchsia-600 border rounded-lg bg-transparent text-white flex items-center '><EyeIcon width={20} className='mx-1' /> WachList</button>
                        <button className='my-1 w-full hover:bg-fuchsia-600 border-fuchsia-600 border  px-2 py-1 rounded-lg bg-transparent text-white flex items-center '><ArrowLeftEndOnRectangleIcon width={20} className='mx-1' /> Logout</button>
                    </div>

                </button> :
                    <UserIcon
                        className='text-white w-6 cursor-pointer  hover:text-fuchsia-600  hover:scale-110'
                        onClick={() => setIsOpenModalLogin(true)}
                    />
                }
                <Modal handleClose={() => setIsOpenModalLogin(false)} isOpen={IsopenLoginModal} />



            </div>

        </nav>

    )
}

export default Nav