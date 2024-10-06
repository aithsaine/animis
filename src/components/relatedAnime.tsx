import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import AnimeCard from './ui/animeCard';

type Animes = {
  id: string;
  description: string;
  coverImage: { extraLarge: string };
  title: { romaji: string };
}[];

const RelatedSlider = ({ animes }: { animes: Animes }) => {
  return (
    <div className="w-full mx-auto px-1">
      <Swiper
        slidesPerView="auto" 
        spaceBetween={20}
        navigation
        effect='fade'
        freeMode={true}
        modules={[Pagination, Navigation]}
      >
        {animes.map((item) => (
          <SwiperSlide 
            key={item.id} 
            className="flex" 
            style={{ width: 'fit-content' }} // Ensure dynamic width
          >
            <AnimeCard 
              anime={{ 
                ...item, 
                image: item?.coverImage?.extraLarge || '', 
                title: item.title?.romaji || 'Unknown Title' 
              }} 
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RelatedSlider;
