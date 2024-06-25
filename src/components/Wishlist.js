"use client";
import React, { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Wishlist = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <div className="px-4">
        <FavoriteBorderOutlinedIcon
          onClick={openModal}
          className=" text-[#333368] cursor-pointer "
        />
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
          <div className=" font-sans text-xl text-white">PRODUCTS (0)</div>
          <CloseOutlinedIcon
            className=" absolute right-4 top-4 cursor-pointer opacity-60 text-white rounded-full"
            onClick={onClose}
          />
        </div>

        <p className="p-4 text-center">
          You have not selected any products to compare.
        </p>
        <p className="p-4 text-center">
          Please add products of your choice and view here.
        </p>
      </div>
    </div>
  );
};

export default Wishlist;
