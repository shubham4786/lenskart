"use client";
import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useUserContext } from "@/app/theme-provider";
import Image from "next/image";
import data from "./data.json";
import Badge from "@mui/material/Badge";

const Wishlist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { wishlist } = useUserContext();
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="px-4">
        <Badge badgeContent={wishlist.length} color="success">
          <FavoriteBorderOutlinedIcon
            onClick={openModal}
            className=" text-[#333368] cursor-pointer "
          />
        </Badge>
        <span
          className=" text-sm font-medium pl-2 cursor-pointer"
          onClick={openModal}
        >
          Wishlist
        </span>
      </div>
      <Modal show={isModalOpen} onClose={closeModal} />
    </>
  );
};

const Modal = ({ show, onClose }) => {
  const { wishlist, setWishlist } = useUserContext();

  const filterData = (data, ids) => {
    return data.filter((item) => ids.includes(item.id));
  };

  const wishlistData = filterData(data.result.product_list, wishlist);

  const removeDataById = (id) => {
    const updatedData = wishlist.filter((item) => item !== id);
    setWishlist(updatedData);
  };

  return (
    <div
      className={`fixed inset-0 flex items-end justify-center ${
        show ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-500`}
    >
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>
      <div
        className={`bg-white rounded-t-md  transform transition-transform duration-500 w-80 ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className=" text-center p-3 bg-[#333] rounded-t-md">
          <div className=" font-sans text-xl text-white">
            PRODUCTS ( {wishlistData.length} )
          </div>
          <CloseOutlinedIcon
            className=" absolute right-4 top-4 cursor-pointer opacity-60 text-white rounded-full"
            onClick={onClose}
          />
        </div>

        {wishlist.length > 0 ? (
          <div className=" max-h-72 min-h-40 overflow-auto text-center">
            {wishlistData.map((item) => (
              <div key={item.id} className=" h-14 hover:bg-slate-300 border-b">
                <div className="flex py-2 justify-around">
                  <div className="  items-center">
                    <Image src={item.image_url} width={70} height={50} alt="" />
                  </div>
                  <div className="">
                    <h5 className=" text-sm">{item.brand_name}</h5>
                    <span className=" text-xs">Rs: {item.prices[0].price}</span>
                  </div>
                  <CloseOutlinedIcon
                    onClick={() => removeDataById(item.id)}
                    className=" ml-16"
                  />
                </div>
              </div>
            ))}

            <button
              onClick={() => setWishlist([])}
              className="m-4 px-6 py-1 text-white rounded-md bg-[#329c92]"
            >
              clear List
            </button>
          </div>
        ) : (
          <>
            <p className="p-4 text-center">
              You have not selected any products to compare.
            </p>
            <p className="p-4 text-center">
              Please add products of your choice and view here.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
