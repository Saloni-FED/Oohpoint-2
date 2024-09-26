"use client";
import Image from "next/image";
import React, { useState } from "react";

const PaymentTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  console.log(data);

  const itemsPerPage = 8;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Logic to calculate the range of pages to show in the pagination
  const maxPageButtons = 4; // Show 4 page buttons at a time
  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  return (
    <div className="bg-white rounded-xl w-full py-5">
      <div className="flex flex-col items-center ">
        <div className="gap-4 flex flex-row w-full max-w-screen-lg border-b border-gray-300 py-2 text-sm font-bold text-gray-900 items-center">
          <div className="flex-1 text-center">Name</div>
          <div className="flex-1 text-center">ID</div>
          <div className="flex-1 text-center">Phone Number</div>
          <div className="flex-1 text-center">Date of Application</div>
          <div className="flex-1 text-center">Actions</div>
        </div>
        {displayedData.map((person) => (
          <div
            key={person.id}
            className="gap-4 flex flex-row w-full max-w-screen-lg py-2 text-sm items-center font-light"
          >
            <div className="flex-1 text-center">{person.name}</div>
            <div className="flex-1 text-center">{person.id}</div>
            <div className="flex-1 text-center">{person.phone}</div>
            <div className="flex-1 text-center">{person.date}</div>
            <div className="flex-1 text-center flex gap-4 justify-center">
              <button>View</button>
            </div>
          </div>
        ))}

        {/* Pagination Controls */}
        <div className="py-4 flex justify-end items-center space-x-4 w-full max-w-screen-lg">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-3 py-1 rounded disabled:opacity-50 text-oohpoint-tertiary-1 border-2 border-oohpoint-tertiary-1"
          >
            &lt;
          </button>

          {Array.from(
            { length: endPage - startPage + 1 },
            (_, index) => startPage + index
          ).map((page) => (
            <button
              key={page}
              onClick={() => handleClick(page)}
              className={`px-3 py-1 rounded ${
                currentPage === page
                  ? "bg-oohpoint-tertiary-1 text-oohpoint-grey-200"
                  : "text-oohpoint-tertiary-1"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-3 py-1 rounded disabled:opacity-50 text-oohpoint-tertiary-1 border-2 border-oohpoint-tertiary-1"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentTable;
