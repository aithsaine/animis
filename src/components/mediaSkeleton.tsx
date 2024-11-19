import React from "react";

const Skeleton = () => {
  return (
    <div className="flex flex-col w-full pt-20 min-h-screen animate-pulse bg-black">
      {/* Banner Skeleton */}
      <div className="relative w-full h-[400px] bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>
        <div className="relative flex flex-col justify-end h-full p-6 space-y-4">
          <div className="h-10 w-3/4 bg-gray-800 rounded-md"></div>
          <div className="flex flex-wrap gap-2">
            {Array(4)
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="h-6 w-16 md:w-20 bg-gray-700 rounded-full"
                ></div>
              ))}
          </div>
        </div>
      </div>

      {/* Buttons Skeleton */}
      <div className="flex flex-row justify-center md:justify-start items-center mt-6 space-x-4 px-6">
        <div className="w-36 h-12 bg-gray-800 rounded-lg shadow-lg"></div>
        <div className="w-36 h-12 bg-gray-800 rounded-lg shadow-lg"></div>
      </div>

      {/* Main Content Skeleton */}
      <div className="flex flex-col p-6 space-y-6">
        {/* Synopsis Skeleton */}
        <div className="w-full h-6 bg-gray-800 rounded-md"></div>
        <div className="w-3/4 h-6 bg-gray-800 rounded-md"></div>
        <div className="w-5/6 h-6 bg-gray-800 rounded-md"></div>

        {/* Episodes/Related Content Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-full h-64 bg-gray-900 rounded-lg shadow-md"
              >
                <div className="w-full h-40 bg-gray-800 rounded-t-lg"></div>
                <div className="w-3/4 h-4 mt-3 bg-gray-800 rounded-md"></div>
                <div className="w-1/2 h-4 mt-2 bg-gray-800 rounded-md"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
