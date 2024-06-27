"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UseUserContext } from "../theme-provider";

const page = () => {
  const { cOrder } = UseUserContext();

  if (!cOrder) {
    return (
      <>
        <div className="flex justify-between items-center py-2 px-6">
          <Link href="/">
            <Image src="/main_logo.svg" width={180} height={60} alt="Logo" />
          </Link>
          <div className="text-sm font-serif text-[#66668e]">
            100% safe and secure
          </div>
        </div>

        <div className="bg-[#fbf9f7] flex justify-center items-center flex-col h-[90vh] text-2xl">
          <div className="p-16">No order has been placed!</div>
          <Link href="/">
            <button className="w-80 px-4 py-3 rounded-full transition duration-300 text-[#000042] bg-[#11daac] text-2xl">
              Continue Shopping
            </button>
          </Link>
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center py-2 px-6">
        <Link href="/">
          <Image src="/main_logo.svg" width={180} height={60} alt="Logo" />
        </Link>
        <div className="text-sm font-serif text-[#66668e]">
          100% safe and secure
        </div>
      </div>
      <div className="bg-[#fbf9f7] p-8 min-h-[90vh]">
        <h2 className="text-3xl mb-8 text-center">Track Your Order</h2>
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <h3 className="text-2xl mb-2">Order Details</h3>
            <p>
              <strong>Order ID:</strong> {cOrder.id}
            </p>
            <p>
              <strong>Order Date:</strong> {cOrder.date}
            </p>
            <p>
              <strong>Status:</strong> {cOrder.status}
            </p>
            <p>
              <strong>Total Amount:</strong> Rs. {cOrder.total}
            </p>
          </div>
          <div className="mb-4">
            <h3 className="text-2xl mb-2">Items</h3>
            {cOrder.items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-4 mb-4"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.image_url}
                    width={100}
                    height={100}
                    alt={item.brand_name}
                  />
                  <div>
                    <h4 className="text-lg">{item.brand_name}</h4>
                    <p>Size: {item.size}</p>
                    <p>Price: Rs. {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/">
              <button className="mt-4 px-6 py-3 bg-[#11daac] text-[#000042] rounded-full text-xl">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
