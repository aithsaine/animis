'use client'
import React from 'react';

function WatchSkeleton() {
    return (
        <div className='flex flex-col w-full pt-16 min-h-screen'>
            {/* Video Player Placeholder */}
            <div className='flex flex-col items-center justify-center w-full'>
                <div className='w-full md:w-3/5 rounded bg-gray-800 h-[250px] md:h-[400px] animate-pulse'></div>
            </div>

            {/* Episode Title Placeholder */}
            <div className='mt-16 px-4'>
                <div className='w-3/4 h-6 bg-gray-700 rounded animate-pulse'></div>
                <div className='w-1/2 h-4 bg-gray-600 rounded mt-2 animate-pulse'></div>
            </div>

            {/* Genres Placeholder */}
            <div className="flex w-full flex-wrap gap-2 px-4 mt-4 space-x-2 space-y-2">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div
                        key={index}
                        className='px-3 py-1 h-8 w-20 bg-gray-700 rounded-xl animate-pulse'
                    ></div>
                ))}
            </div>

            <div className='flex md:flex-row flex-col-reverse items-start justify-between mt-8 px-4'>
                {/* Left Section - Characters & Description Placeholder */}
                <div className='w-full md:w-2/3 flex flex-col space-y-6'>
                    <div>
                        <div className='h-6 bg-gray-700 w-1/2 rounded animate-pulse'></div>
                        <div className='flex overflow-x-scroll p-4 space-x-4 scrollbar-hide mt-4'>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div
                                    key={index}
                                    className='w-32 h-44 bg-gray-800 rounded animate-pulse'
                                ></div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className='h-6 bg-gray-700 w-1/3 rounded animate-pulse'></div>
                        <div className='h-32 bg-gray-800 rounded mt-4 animate-pulse'></div>
                    </div>
                </div>

                {/* Right Section - Episode List Placeholder */}
                <div className='w-full md:w-1/3 flex flex-col items-center space-y-4'>
                    <div className='w-full flex justify-around items-center px-4'>
                        <div className='px-4 py-2 w-32 bg-gray-700 rounded animate-pulse'></div>
                        <div className='px-4 py-2 w-32 bg-gray-700 rounded animate-pulse'></div>
                    </div>

                    <div className='scrollbar-hide overflow-y-scroll w-full max-h-screen space-y-2 px-4'>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <div
                                key={index}
                                className='w-full bg-gray-800 h-12 rounded animate-pulse'
                            ></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WatchSkeleton;
