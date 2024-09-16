import React from 'react';
import loader from "../../public/assets/images/loading.png"
import Image from 'next/image';

const Loading = () => {
    return (
        <div className="bg-slate-950 flex-col flex items-center justify-center h-screen">
            <Image src={loader} alt='loaidin..' width={150} height={150} />
            <h1 className="text-white navlinks text-4xl animate-pulse transition-opacity">Loading...</h1>
        </div>
    );
};

export default Loading;
