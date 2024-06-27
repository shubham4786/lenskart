"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UseUserContext } from "../theme-provider";
import data from "@/components/data.json";

const page = () => {
  const { cart, setCart, cOrder, setCOrder } = UseUserContext();

  const increaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const product = data.result.product_list.find((p) => p.id === item.id);
      return total + item.quantity * product.prices[0].price;
    }, 0);
  };

  const confirmOrder = () => {
    const order = {
      id: `ORD${Math.floor(Math.random() * 1000000)}`,
      date: new Date().toISOString().split("T")[0],
      status: "Confirmed",
      total: getTotalPrice(),
      items: cart.map((item) => {
        const product = data.result.product_list.find((p) => p.id === item.id);
        return {
          id: item.id,
          brand_name: product.brand_name,
          size: product.size,
          price: product.prices[0].price,
          quantity: item.quantity,
          image_url: product.image_url,
        };
      }),
    };
    setCOrder(order);
    setCart([]);
  };

  return (
    <div>
      <div className="flex justify-between items-center py-2 px-6">
        <Link href="/">
          <Image src="/main_logo.svg" width={180} height={60} alt="Logo" />
        </Link>
        <div className=" text-sm font-serif text-[#66668e] ">
          100% safe and secure
        </div>
      </div>
      {cart.length === 0 ? (
        <div className=" bg-[#fbf9f7] flex justify-center items-center flex-col h-[90vh] text-2xl ">
          <div className=" p-16">Your shopping cart is empty!</div>
          <Link href="/">
            <button className="w-80 px-4 py-3 rounded-full transition duration-300 text-[#000042] bg-[#11daac] text-2xl">
              Continue Shopping
            </button>
          </Link>
        </div>
      ) : (
        <div className="bg-[#fbf9f7] p-8 min-h-[90vh]">
          <h2 className="text-3xl mb-8 text-center">Your Shopping Cart</h2>
          <div className="space-y-6">
            {cart.map((item) => {
              const product = data.result.product_list.find(
                (p) => p.id === item.id
              );
              return (
                <div
                  key={item.id}
                  className="flex justify-center items-center border-b pb-4"
                >
                  <div className="flex items-center space-x-4 w-3/5 bg-white p-4 rounded-lg shadow-md">
                    <Image
                      src={product.image_url}
                      width={100}
                      height={100}
                      alt={product.brand_name}
                    />
                    <div>
                      <h3 className="text-lg">{product.brand_name}</h3>
                      <p>Size: {product.size}</p>
                      <p>Price: Rs. {product.prices[0].price}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 ml-8">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="border px-2 py-1 rounded"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="border px-2 py-1 rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="border px-2 py-1 rounded text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-xl">Total Price: Rs. {getTotalPrice()}</h3>
            <Link href="/track-order">
              <button
                className="mt-4 px-6 py-3 bg-[#11daac] text-[#000042] rounded-full text-xl"
                onClick={confirmOrder}
              >
                Confirm Order
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
