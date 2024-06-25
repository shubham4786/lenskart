import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-2 px-6">
        <Link href="/">
          <Image src="/main_logo.svg" width={180} height={60} alt="Logo" />{" "}
        </Link>
        <div className=" text-sm font-serif text-[#66668e] ">
          100% safe and secure
        </div>
      </div>
      <div className=" bg-[#fbf9f7] flex justify-center items-center flex-col h-[90vh] text-2xl ">
        <div className=" p-16">Your shopping cart is empty! !</div>
        <button
          className={` w-80 px-4 py-3 rounded-full transition duration-300 text-[#000042] bg-[#11daac] text-2xl`}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default page;
