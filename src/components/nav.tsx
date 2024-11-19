"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookmarkIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../../public/assets/images/logo.png";
import anilist from "@/app/api/anilist";
import SearchItemCard from "./ui/SearchItem";

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchItemInterface[]>([]);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const closeModalOnBackdropClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }

    typingTimeout.current = setTimeout(() => {
      triggerSearch(value);
    }, 2000);
  };

  const triggerSearch = async (value: string) => {
    if (!value.trim()) return;

    setIsSearching(true);
    try {
      const items = await anilist.SearchMediaByQuery(value);
      setSearchResults(items);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <>
      <nav className="flex fixed mb-28 bg-slate-950 justify-between px-4 md:px-16 py-2 z-50 items-center w-full">
        <div className="flex h-full space-x-4 items-center text-white">
          <Link href="/">
            <Image width={120} src={logo} alt="logo" />
          </Link>
          {/* <div className="navlinks hidden md:block text-2xl space-x-4">
            <Link href={"/anime"} className="hover:text-fuchsia-200">
              Anime
            </Link>
            <button className="hover:text-fuchsia-200">Manga</button>
            <button className="hover:text-fuchsia-200">News</button>
          </div> */}
        </div>

        <div className="flex items-center h-full space-x-6">
          <button onClick={toggleModal}>
            <MagnifyingGlassIcon className="text-white hover:text-fuchsia-600 cursor-pointer w-6 hover:scale-110" />
          </button>
          <BookmarkIcon className="text-white w-6 cursor-pointer hover:text-fuchsia-600 hover:scale-110" />
        </div>
      </nav>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-black bg-opacity-60 backdrop-blur-sm"
          onClick={closeModalOnBackdropClick}
        >
          <div className="relative w-11/12 md:w-1/2 bg-slate-950 rounded-lg shadow-lg p-6">
            <button
              onClick={toggleModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-fuchsia-500"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>

            <div className="flex flex-col space-y-4">
              <h2 className="text-white text-center text-2xl font-semibold">
                Search
              </h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for anime, manga, or news..."
                  value={query}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg outline-none focus:ring-2 focus:ring-fuchsia-500"
                />
                {isSearching && (
                  <div className="absolute inset-y-0 right-3 flex items-center">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      ></path>
                    </svg>
                  </div>
                )}
              </div>

              {/* Scrollable Results */}
              <div className="space-y-4 mt-4 max-h-64 overflow-y-auto custom-scrollbar">
                {searchResults.length > 0 ? (
                  searchResults.map((result) => (
                    <SearchItemCard
                      key={result.id}
                      title={result?.title?.romaji}
                      image={result?.image}
                      id={result?.id}
                      releaseDate={result?.releaseDate}
                      rating={result?.rating}
                      type={result?.type}
                    />
                  ))
                ) : (
                  !isSearching && (
                    <p className="text-gray-400 text-center">
                      No results found.
                    </p>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
