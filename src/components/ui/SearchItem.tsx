import Link from "next/link";
import React from "react";

type SearchItemProps = {
  id: string;
  title: string;
  image: string;
  type: string;
  rating: number;
  releaseDate: string;
};

const SearchItemCard: React.FC<SearchItemProps> = ({
    id,
  title,
  image,
  type,
  rating,
  releaseDate,
}) => {
  return (
    <Link href={`/media/${id}`} className="flex items-center bg-gray-900 rounded-lg shadow-md p-4 space-x-4">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-20 h-28 rounded-lg object-cover"
      />
      {/* Content */}
      <div className="flex flex-col justify-between text-white">
        <h3 className="text-lg font-bold">{title.length<=35?title:title.substring(0,35)+"..."}</h3>
        <p className="text-sm text-gray-400">Type: {type}</p>
        <p className="text-sm text-gray-400">Rating: {rating} / 10</p>
        <p className="text-sm text-gray-400">Release Date: {releaseDate}</p>
      </div>
    </Link>
  );
};

export default SearchItemCard;