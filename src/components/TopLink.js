import React from "react";

const TopLink = () => {
  return (
    <div className="flex justify-between py-3 lg:px-12 text-[11px] font-medium flex-wrap">
      <div>
        <a className=" px-2 cursor-pointer">Do More, Be More</a>
        <a className="px-2 border-l border-[#000042] cursor-pointer">Tryin3D</a>
        <a className="px-2 border-l border-[#000042] cursor-pointer">
          StoreLocation
        </a>
        <a className="px-2 border-l border-[#000042] cursor-pointer">
          Singapore
        </a>
        <a className="px-2 border-l border-[#000042] cursor-pointer">UAE</a>
        <a className="px-2 border-l border-[#000042] cursor-pointer">
          John Jacobs
        </a>
        <a className="px-2 border-l border-[#000042] cursor-pointer">
          Aqualens
        </a>
        <a className="px-2 border-l border-[#000042] cursor-pointer">
          Cobrowsing
        </a>
        <a className="px-2 border-l border-[#000042] cursor-pointer">
          Engineering Blog
        </a>
        <a className="px-2 border-l border-[#000042] cursor-pointer">
          Partner With Us
        </a>
      </div>
      <div className=" px-2 cursor-pointer">Contact Us</div>
    </div>
  );
};

export default TopLink;
