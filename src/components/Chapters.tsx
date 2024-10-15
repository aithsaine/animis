import Link from 'next/link';
import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';


type Props = {
  chapters: Chapter[];
  mangaId:string
};

const Chapters = ({ chapters,mangaId }: Props) => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const chaptersPerPage = 10;

  // Pagination logic
  const totalChapters = chapters.length;
  const totalPages = Math.ceil(totalChapters / chaptersPerPage);
  const indexOfLastChapter = currentPage * chaptersPerPage;
  const indexOfFirstChapter = indexOfLastChapter - chaptersPerPage;
  const currentChapters = chapters.slice(indexOfFirstChapter, indexOfLastChapter);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col px-5 space-y-3">
        {currentChapters.map((item) => (
          <Link
            key={item.id}
            href={`/read?manga=${mangaId}&id=${item?.id}`}
            className="w-full px-4 py-3 navlinks text-left text-lg font-semibold rounded-xl bg-gray-900 text-white transition-transform transform hover:scale-105 hover:shadow-lg"
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center space-x-4 pt-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`p-2 rounded-full bg-gray-200 text-gray-700 transition-colors hover:bg-gray-300 ${currentPage === 1 && 'opacity-50 cursor-not-allowed'}`}
        >
          <FiChevronLeft className="w-6 h-6" />
        </button>
        <span className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`p-2 rounded-full bg-gray-200 text-gray-700 transition-colors hover:bg-gray-300 ${currentPage === totalPages && 'opacity-50 cursor-not-allowed'}`}
        >
          <FiChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Chapters;
