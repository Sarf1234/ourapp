import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbFileInvoice } from "react-icons/tb";


const ProductCards = ({ data }) => {
  

  return (
    <div className=" w-[calc(50%-16px)] md:w-[calc(30%-8px)] lg:w-[calc(18%-8px)] 2xl:w-[calc(13%-8px)] border-[1px] border-gray-300 hover:shadow-sm hover:border-black rounded-2xl mx-auto">
    <div className="text-center h-[40%] md:h-[60%] relative w-full aspect-square">
      <Link href={`/product/${data.uri}`}>
        <img
          src={data.image}
          alt={data.product_name}
          className="w-full h-full aspect-square object-cover rounded-t-2xl"
        />
      </Link>
      {data.discount_percentage ? (
        <div className="absolute right-0 top-0 bg-[#144169] px-2 text-sm text-white rounded-tr-lg rounded-bl-lg">
          {data.discount_percentage}%
          <div className="bg-[#144169] text-sm text-white">OFF</div>
        </div>
      ) : null }
    </div>
    <div className="px-2">
      <Link href={`/product/${data.uri}`}>
        <h3 className="h-[16px] overflow-hidden text-sm font-roboto font-semibold text-black">
          {data.product_name}
        </h3>
      </Link>
      <div className="flex justify-start my-1 items-center">
        <div>({data.review})</div>
      </div>
      <hr />
      <div className="flex justify-between px-2 items-center text-sm py-2 text-black">
        <h5 className="text-sm">
          <del>₹{data.price}</del>
        </h5>
        <h5 className="text-sm">₹{data.three_day_price_rate}/day</h5>
      </div>
    </div>
    <div className="flex justify-between items-center border-t border-b border-gray-200 divide-x-2 py-1">
      <div
        className="flex items-center justify-center w-[50%] cursor-pointer"
      >
        <div className="flex items-center justify-center text-sm">
         <TbFileInvoice />
          Quote
        </div>
      </div>
      <div
        className="flex items-center justify-center w-[50%] cursor-pointer"
      >
        <div className="flex items-center justify-center text-sm">
          <AiOutlineShoppingCart />
          Cart
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center py-2 rounded-b-2xl h-9 bg-[#144169] text-white cursor-pointer">
      <div className="text-sm">Add To Rental</div>
    </div>
  </div>
  );
};

export default ProductCards;
