"use client";
import React, { useState, useRef, useEffect } from "react";

const options = [
  "Eyeglasses",
  "Sunglasses",
  "Contact Lenses",
  "Vincent Chase Eyeglasses",
  "Vincent Chase Sunglasses",
  "John Jacobs Eyeglasses",
  "John Jacobs Sunglasses",
  "Mens Sunglasses",
  "Women Sunglasses",
  "Aviator",
  "Eyewear Accessories",
  "Purevision",
  "Acuvue",
];

const SearchAndAdd = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const wrapperRef = useRef(null);

  const handleClickOutside = (event) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleOption = (option) => {
    setIsOpen(false);
    setSearchTerm(option);
  };

  return (
    <div className="relative w-full max-w-md mx-auto" ref={wrapperRef}>
      <input
        type="text"
        className="w-full px-4 py-1 border border-[#00003f80] rounded-md focus:outline-none "
        placeholder="What are you looking for?"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={() => setIsOpen(true)}
      />
      {isOpen && (
        <div className="absolute w-full  bg-white border border-[#00003f80] shadow-lg">
          <h1 className=" text-2xl p-1 ">Trending Search</h1>
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-[2px] hover:bg-gray-200 cursor-pointer"
              onClick={() => handleOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchAndAdd;
