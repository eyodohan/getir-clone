import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const ProductItem = ({ product }) => {
  const { title, image, alt, price } = product;
  return (
    <div className="bg-white flex gap-y-1 flex-col items-center text-center text-sm font-semibold p-3 relative">
      <button className="absolute top-3 right-3 bg-white w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg text-brand-color shodow-md hover:border-brand-color hover:scale-[1.06] transition-colors">
        <AiOutlinePlus size={16} />
      </button>
      <img src={image} alt={title} />
      <div className=" text-brand-color">{price}</div>
      <div className="text-gray-900">{title}</div>
      <div className="text-gray-500">{alt}</div>
    </div>
  );
};

export default ProductItem;
