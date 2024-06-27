import Image from "next/image";
import React from "react";
import SearchAndAdd from "./SearchAndAdd";
import Link from "next/link";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Wishlist from "./Wishlist";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Order from "./Order";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between lg:px-6 text-[#000042]">
      <div className="flex items-center">
        <Link href="/">
          <Image src="/main_logo.svg" width={180} height={60} alt="Logo" />
        </Link>
        <div>
          <Image
            src="/images/number.webp"
            width={150}
            height={60}
            alt="number"
          />
        </div>
      </div>
      <SearchAndAdd />
      <div className="flex items-center flex-wrap">
        <Link href="/track-order" className="px-4">
          <span className=" text-sm font-medium cursor-pointer">
            Track Order
          </span>
        </Link>
        <div className="px-4">
          <SignIn />
          <span className="px-1 text-sm font-medium">&</span>
          <SignUp />
        </div>
        <Wishlist />
        <Link href="/cart" className="px-4">
          <ShoppingBagOutlinedIcon className=" text-[#333368] " />
          <span className=" text-sm font-medium pl-2">Cart</span>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
