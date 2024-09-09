"use client"
import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
import { auth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "@/firebase/client";
const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  right:0 ;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled(motion.div)`
  width: 100%;
  max-width: 400px;
  position:relative;
  padding: 2rem; /* Adjust padding */
  border:2px solid #7D0552;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;
const CloseButton = styled.svg`
  width: 20px;
  height: 20px;
  position: absolute;
  right: 18px;
  top: 18px;
  cursor: pointer;
 
`;
const modalVariant = {
    initial: { opacity: 0 },
    isOpen: { opacity: 1 },
    exit: { opacity: 0 },
};

const containerVariant = {
    initial: { y: "-50%" },
    isOpen: { y: "0%" },
    exit: { y: "-50%" },
};

const Modal = ({ handleClose, isOpen, action, setAction }: any) => {
    const [registerForm, setRegisterForm] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ""
    })

    const signup = async (e: any) => {
        e.preventDefault();
        try {
            if (!registerForm.name || !registerForm.email || !registerForm.password || !registerForm.password_confirmation) {
                return toast.error("fill all demanded informations")
            }
            const userCredential = await createUserWithEmailAndPassword(auth, registerForm.email, registerForm.password);
            const user = userCredential.user
            await updateProfile(user, {
                displayName: registerForm.name

            });
            await user.reload()
            toast.success("your Account Created now singi")
            setAction("signin")



        } catch (error: any) {
            if (error.code == "auth/email-already-in-use") {
                return toast.error("email already in use")
            }
            return toast.error("internal server error ")
        }
    }
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: "",
    })

    const signin = async (e: any) => {
        try {
            const resp = await signInWithEmailAndPassword(auth, loginForm.email, loginForm.password)
            console.log(resp)
            handleClose()
            return toast.success("logged in successfully")

        } catch (error: any) {

        }
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <Overlay
                    initial="initial"
                    animate="isOpen"
                    exit="exit"
                    variants={modalVariant}
                >
                    <ModalContainer variants={containerVariant}>
                        <CloseButton
                            onClick={handleClose}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20.39 20.39"
                        >
                            <title>close</title>
                            <line
                                x1="19.39"
                                y1="19.39"
                                x2="1"
                                y2="1"
                                fill="none"
                                stroke="#5c3aff"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                            />
                            <line
                                x1="1"
                                y1="19.39"
                                x2="19.39"
                                y2="1"
                                fill="none"
                                stroke="#5c3aff"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="2"
                            />
                        </CloseButton>
                        {action == "signin" ? (

                            // loginForm
                            <>
                                <h1 className="text-2xl font-bold text-center text-white uppercase mb-4">
                                    Login

                                </h1>

                                <form className="space-y-4">
                                    <input
                                        onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        autoComplete="off"
                                        className="w-full px-4 py-2 text-sm text-white bg-transparent border border-gray-700 rounded-md focus:ring-2 focus:ring-sky-500 outline-none"
                                    />
                                    <input
                                        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}

                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Password"
                                        className="w-full px-4 py-2 text-sm text-white bg-transparent border border-gray-700 rounded-md focus:ring-2 focus:ring-sky-500 outline-none"
                                    />

                                    <motion.button
                                        onClick={signin}
                                        type="button"
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full py-2 flex items-center justify-center text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-md shadow-md hover:from-blue-700 hover:to-blue-500 focus:ring-2 focus:ring-sky-500 transition-all duration-200"
                                    >
                                        Login with Credentials
                                    </motion.button>
                                </form>
                                <div className="flex items-center justify-center space-x-2 mt-4">
                                    <div className="w-1/3 h-px bg-gray-600"></div>
                                    <span className="text-sm text-gray-400">or</span>
                                    <div className="w-1/3 h-px bg-gray-600"></div>
                                </div>

                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center justify-center w-full py-2 mt-2 space-x-2 text-white bg-gray-800 rounded-md shadow-md hover:bg-gray-700 focus:ring-2 focus:ring-sky-500 transition-all duration-200"
                                >
                                    <FcGoogle className="w-5 h-5" />
                                    <span className="font-semibold">Sign in with Google</span>
                                </motion.button>

                                <button onClick={() => setAction("signup")} className="block mt-4 text-sm font-semibold text-center text-blue-400 hover:underline">

                                    Don’t have an account? Sign Up
                                </button>
                            </>
                        ) :

                            // registerForm
                            <>
                                <h1 className='text-3xl font-bold text-center text-white uppercase'>Register</h1>

                                <div className="space-y-4">

                                    <input
                                        onChange={e => setRegisterForm({ ...registerForm, name: e.target.value })}
                                        type="text"
                                        placeholder='Name'
                                        className='w-full px-4 py-2 text-sm text-white bg-transparent border border-gray-700 rounded-md focus:ring-2 focus:ring-sky-500 outline-none'
                                    />
                                    <input
                                        onChange={e => setRegisterForm({ ...registerForm, email: e.target.value })}

                                        type="email"
                                        placeholder='Email'
                                        className='w-full px-4 py-2 text-sm text-white bg-transparent border border-gray-700 rounded-md focus:ring-2 focus:ring-sky-500 outline-none'
                                    />
                                    <input
                                        onChange={e => setRegisterForm({ ...registerForm, password: e.target.value })}

                                        type="password"
                                        placeholder='Password'
                                        className='w-full px-4 py-2 text-sm text-white bg-transparent border border-gray-700 rounded-md focus:ring-2 focus:ring-sky-500 outline-none'
                                    />
                                    <input
                                        onChange={e => setRegisterForm({ ...registerForm, password_confirmation: e.target.value })}
                                        type="password"
                                        placeholder='Confirm Password'
                                        className='w-full px-4 py-2 text-sm text-white bg-transparent border border-gray-700 rounded-md focus:ring-2 focus:ring-sky-500 outline-none'
                                    />
                                </div>

                                <motion.button
                                    onClick={signup}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full py-2 text-white bg-gradient-to-r from-blue-600 to-blue-400 rounded-md shadow-md hover:from-blue-700 hover:to-blue-500 focus:ring-2 focus:ring-sky-500 transition-all duration-200"
                                >
                                    Register
                                </motion.button>

                                <div className="flex items-center justify-center space-x-2">
                                    <div className="w-1/3 h-px bg-gray-600"></div>
                                    <span className="text-sm text-gray-400">or</span>
                                    <div className="w-1/3 h-px bg-gray-600"></div>
                                </div>

                                <motion.button
                                    whileTap={{ scale: 0.95 }}
                                    className="flex items-center justify-center w-full py-2 mt-2 space-x-2 text-white bg-gray-800 rounded-md shadow-md hover:bg-gray-700 focus:ring-2 focus:ring-sky-500 transition-all duration-200"
                                >
                                    <FcGoogle className='w-5 h-5' />
                                    <span className="font-semibold">Sign in with Google</span>
                                </motion.button>

                                <button onClick={() => setAction("signin")} className="block mt-4 text-sm font-semibold text-center text-blue-400 hover:underline">
                                    Already have an account? Sign in
                                </button>



                            </>
                        }

                    </ModalContainer>
                </Overlay >
            )}
        </AnimatePresence >
    );
};

export default Modal;
