import React from "react";
import Table from "@/components/Table";

const VendorsDetails = () => {
  return (
    <div className="w-full">
      <div className="flex gap-4">
        <button
          className={` bg-oohpoint-grey-100 px-6 py-2 rounded-lg text-oohpoint-primary-2`}
        >
          Verified
        </button>
        <button
          className={` bg-oohpoint-grey-100 px-6 py-2 rounded-lg text-oohpoint-primary-2`}
        >
          Disabled
        </button>
        <button
          className={` bg-oohpoint-grey-100 px-6 py-2  rounded-lg text-oohpoint-primary-2`}
        >
          Unverified
        </button>
      </div>
      <div className="w-full mt-5">
        <Table isShow={true}/>

      </div>
    </div>
  );
};

export default VendorsDetails;
