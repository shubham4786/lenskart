import Image from "next/image";
import React from "react";

const LinkBar = () => {
  return (
    <div className="flex justify-between py-3 lg:px-8 text-sm font-medium flex-wrap bg-[#fbf9f7] text-[#000042] items-center">
      <div className="flex gap-6">
        <div>EYEGLASSES</div>
        <div>SCREEN GLASSES</div>
        <div>KIDS GLASSES</div>
        <div>CONTACT LENS</div>
        <div>SUNGLASSES</div>
        <div>HOME EYE-TEST</div>
        <div>STORE LOCATOR</div>
      </div>
      <div className="flex gap-2">
        <Image
          className=" rounded"
          src="/images/3d.webp"
          width={60}
          height={30}
          alt=""
        />
        <Image
          className=" rounded"
          src="/images/blu.webp"
          width={60}
          height={30}
          alt=""
        />
        <Image
          className=" rounded"
          src="/images/gold.webp"
          width={60}
          height={30}
          alt=""
        />
      </div>
    </div>
  );
};

export default LinkBar;
