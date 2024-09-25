import React from 'react';
import dynamic from 'next/dynamic';
import animationData from "../../public/assets/lottiefiles/noruto.json"; // Ensure this path is correct

const Lottie = dynamic(() => import('lottie-react'), {
    ssr: false
});

const Loading = () => {
    return (
        <div className="bg-transparent flex-col flex items-center justify-center h-screen">
            <Lottie className='w-[200px]' animationData={animationData} width={50} loop={true} autoplay={true} />
        </div>
    );
};

export default Loading;
