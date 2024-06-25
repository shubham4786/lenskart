import Image from "next/image";
import React from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import data from "./data.json";

const Product = () => {
  return (
    <div className="flex justify-evenly  py-3 md:px-8 text-sm font-medium flex-wrap bg-[#fbf9f7] text-[#000042] items-center">
      {data.result.product_list.map((item) => (
        <div
          key={item.id}
          className=" mb-8 border p-8 border-[#ebebf0] bg-white rounded"
        >
          <Image
            className=""
            src={item.image_url}
            width={200}
            height={200}
            alt=""
          />
          <h2 className=" text-lg py-2">{item.brand_name}</h2>
          <h4 className="py-2">Size: {item.size}</h4>
          <h3 className=" text-lg py-2">Rs: {item.prices[0].price}</h3>
          <div className="flex justify-between">
            <div className=" border border-slate-400 rounded-3xl px-2 py-1">
              <FavoriteBorderOutlinedIcon className="" />
              <span>Wishlist</span>
            </div>
            <div className=" border border-slate-400 rounded-3xl px-2 py-1">
              Add To Card
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
