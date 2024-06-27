"use client";
import Image from "next/image";
import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import data from "./data.json";
import { UseUserContext } from "@/app/theme-provider";

const Product = () => {
  const { wishlist, setWishlist, cart, setCart } = UseUserContext();

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      const updatedWishlist = wishlist.filter((item) => item !== id);
      setWishlist(updatedWishlist);
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  const addToCart = (id) => {
    const existingCartItem = cart.find((item) => item.id === id);
    if (existingCartItem) {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { id, quantity: 1 }]);
    }
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  const getCartQuantity = (id) => {
    const item = cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <div className="flex justify-evenly py-3 md:px-8 text-sm font-medium flex-wrap bg-[#fbf9f7] text-[#000042] items-center">
      {data.result.product_list.map((item) => (
        <div
          key={item.id}
          className="mb-8 border p-8 border-[#ebebf0] bg-white rounded"
        >
          <Image
            className=""
            src={item.image_url}
            width={200}
            height={200}
            alt=""
          />
          <h2 className="text-lg pt-8 py-2">{item.brand_name}</h2>
          <h4 className="">Size: {item.size}</h4>
          <h3 className="text-lg py-2">Rs: {item.prices[0].price}</h3>
          <div className="flex justify-between">
            <div
              onClick={() => toggleWishlist(item.id)}
              className={`border border-slate-400 rounded-3xl px-2 py-1 cursor-pointer ${
                wishlist.includes(item.id) ? "text-red-500" : ""
              }`}
            >
              <FavoriteBorderOutlinedIcon className="" />
              <span>Wishlist</span>
            </div>
            {isInCart(item.id) ? (
              <div className="flex items-center">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="border border-slate-400 rounded-3xl px-2 py-1 cursor-pointer"
                >
                  -
                </button>
                <span className="mx-2">{getCartQuantity(item.id)}</span>
                <button
                  onClick={() => addToCart(item.id)}
                  className="border border-slate-400 rounded-3xl px-2 py-1 cursor-pointer"
                >
                  +
                </button>
              </div>
            ) : (
              <div
                onClick={() => addToCart(item.id)}
                className="border border-slate-400 rounded-3xl px-2 py-1 cursor-pointer"
              >
                Add To Cart
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
