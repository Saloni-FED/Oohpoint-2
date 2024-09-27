import React from "react";

const VendorsCard = ({ profile }) => {
  return (
    <div className="bg-oohpoint-grey-100 rounded-2xl px-7 mt-3 py-5 flex justify-between items-start w-[30%] min-w-[16rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-[0.67rem]">
        <span className="font-semibold">Phone number</span>
        <span>{profile.phone}</span>

        <span className="font-semibold">Email ID</span>
        <span className="break-words">{profile.email}</span> {/* Apply break-words */}

        <span className="font-semibold">Location</span>
        <span>{profile.location}</span>

        <span className="font-semibold">License Certificate</span>
        <span className="text-blue-500 cursor-pointer">link</span>

        <span className="font-semibold">PAN Card</span>
        <span>{profile.panCard}</span>
      </div>
    </div>
  );
};

export default VendorsCard;
