"use client";
import React, { useState } from "react";

const PaymentTable = ({ data, handleShow }) => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 14;
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

  const maxPageButtons = 4;
  const startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

  const handleShowClick = ()=>{
   handleShow()
  }

  return (
    <div className="bg-white rounded-xl w-full py-2 md:py-3">
      <div className="flex flex-col items-center">
        {/* Table Header */}
        <div className="gap-0.5 md:gap-1 flex flex-row w-full max-w-screen-lg border-b border-gray-300 py-1 text-xs md:text-sm font-bold text-gray-900 items-center">
          <div className="flex-1 text-center">Name</div>
          <div className="flex-1 text-center">ID</div>
          <div className="flex-1 text-center">Phone</div>
          <div className="flex-1 text-center">Date</div>
          <div className="flex-1 text-center">Actions</div>
        </div>

        {/* Table Rows */}
        {displayedData.map((person) => (
          <div
            key={person.id}
            className="gap-0.5 md:gap-1 flex flex-row w-full max-w-screen-lg py-1 text-xs md:text-sm items-center "
          >
            <div className="flex-1 font-light  leading-4 text-center">
              {person.name}
            </div>
            <div className="flex-1  font-light  leading-4 text-center">
              {person.id}
            </div>
            <div className="flex-1  font-light  leading-4 text-center">
              {person.phone}
            </div>
            <div className="flex-1  font-light  leading-4 text-center">
              {person.date}
            </div>
            <div className="flex-1 text-center flex md:gap-3 justify-center max-lg:flex-col">
              <button className="flex-1 text-[10px] bg-oohpoint-grey-300 font-thin text-oohpoint-grey-100 rounded-md p-[3px]">
                Assign 
              </button>
              <button className="flex-1 text-[10px] bg-[#46E51E] opacity-50 text-oohpoint-primary-1 font-thin rounded-md p-[3px]">
                Edit
              </button>
              <button className="flex-1 text-[10px] bg-[#FB0C0C] text-oohpoint-primary-1 font-thin rounded-md p-[3px] opacity-50">
                Reject
              </button>
              <button className="flex-1 text-[10px] bg-oohpoint-grey-300 font-thin text-oohpoint-grey-100 rounded-md p-[3px]" onClick={handleShowClick}>
                Details
              </button>
            </div>
          </div>
        ))}

        {/* Pagination Controls */}
        <div className="py-2 flex justify-end items-center space-x-1 md:space-x-2 w-full max-w-screen-lg">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-1 md:px-2 py-1 rounded text-xs md:text-sm disabled:opacity-50 text-oohpoint-tertiary-1 border-2 border-oohpoint-tertiary-1"
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
              className={`px-1 md:px-2 py-1 rounded text-xs md:text-sm ${
                currentPage === page
                  ? "bg-oohpoint-tertiary-1 text-white"
                  : "text-oohpoint-tertiary-1"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-1 md:px-2 py-1 rounded text-xs md:text-sm disabled:opacity-50 text-oohpoint-tertiary-1 border-2 border-oohpoint-tertiary-1"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentTable;
