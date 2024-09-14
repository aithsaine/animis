"use client"
import React, { useEffect, useState } from 'react'
import Image from "next/image"
import logo from "../../public/assets/images/logo.png"
import '../../public/assets/styles/nav.css'
import { BookmarkIcon, MagnifyingGlassIcon, Cog8ToothIcon, EyeIcon, XCircleIcon, ArrowLeftEndOnRectangleIcon, UserIcon } from '@heroicons/react/24/outline'
import fakeProfileImage from "../../public/assets/images/asta.jpg"
import settingicon from "../../public/assets/images/settingico.gif"
import { FaCaretDown } from 'react-icons/fa'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { signOut, auth } from '../firebase/client'
import { addAuthenticateUser, toggleModalAuth } from '@/redux/actions/actionCreator'
import { GrUpdate } from 'react-icons/gr'
import { AdjustmentsHorizontalIcon } from '@heroicons/react/16/solid'
import axios from 'axios'
const Nav = () => {


    const [isOpenDropDownSettings, setIsOpenDropDownSettings] = useState(false)
    const { authenticate } = useSelector((state: any) => state)
    const dispatch = useDispatch()
    const signout = async () => {
        try {
            await signOut(auth)
            dispatch(addAuthenticateUser(null))
        } catch (error) {
            console.log(error)

        }
    }
    return (
        <nav className='flex fixed mb-36 bg-black  justify-between px-4 md:px-16 py-2 z-50 items-center w-full  '>
            <div className='flex h-full space-x-4  items-center text-white'>
                <Image width={120} src={logo} alt='logo' />
                <div className='navlinks hidden md:block  text-2xl  space-x-4'>
                    <button className='hover:text-fuchsia-200'>Anime</button>
                    <button className='hover:text-fuchsia-200'>Manga</button>
                    <button className='hover:text-fuchsia-200'>News</button>

                </div>
            </div>

            <div className='flex items-center h-full  space-x-6'>
                <Link className='' href={"#"}><MagnifyingGlassIcon className='text-white hover:text-fuchsia-600  cursor-pointer w-6 hover:scale-110' /></Link>
                <BookmarkIcon className='text-white w-6 cursor-pointer hover:text-fuchsia-600  hover:scale-110' />
                {authenticate !== null ?
                    (<button onClick={() => setIsOpenDropDownSettings(!isOpenDropDownSettings)} className='flex  relative   items-center'><Image width={40} className='cursor-pointer border-2 border-fuchsia-500 rounded-full' src={fakeProfileImage} alt="" /><FaCaretDown className='text-white w-4' />
                        <div className={`md:absolute fixed ${isOpenDropDownSettings ? "flex" : "hidden"} p-2  sm:top-12 rounded-xl navlinks sm:justify-start  flex-col  bg-fuchsia-950 w-screen h-screen items-center  top-5 -right-16 sm:w-72 md:min-h-screen  `}>
                            <XCircleIcon className='bg-red fixed top-2 right-2 cursor-pointer block sm:hidden hover:text-red-700 w-11' />
                            <div className='w-full py-3 flex items-center  justify-between'>
                                <div className='flex  items-center justify-start space-x-4 my-2'>

                                    <Image src={fakeProfileImage} alt='profile' className='w-14 h-w-14 rounded-full' />
                                    <span>{authenticate && authenticate.displayName}</span>
                                </div>
                                <AdjustmentsHorizontalIcon className='w-8' />
                            </div>
                            <hr />
                            <button className='my-1  w-full hover:bg-fuchsia-600  px-2 py-2  rounded-lg bg-transparent text-white flex items-center '><Cog8ToothIcon width={20} className='mx-1' /> Settings</button>
                            <button className='my-1  w-full hover:bg-fuchsia-600 px-2 py-2  rounded-lg bg-transparent text-white flex items-center '><EyeIcon width={20} className='mx-1' /> WachList</button>
                            <button onClick={signout} className='my-1 w-full hover:bg-fuchsia-600   px-2 py-1 rounded-lg bg-transparent text-white flex items-center '><ArrowLeftEndOnRectangleIcon width={20} className='mx-1' /> Logout</button>
                        </div>

                    </button>) :
                    (<UserIcon
                        className='text-white w-6 cursor-pointer  hover:text-fuchsia-600  hover:scale-110'
                        onClick={() => dispatch(toggleModalAuth(true))}
                    />)
                }



            </div>

        </nav>

    )
}

export default Nav