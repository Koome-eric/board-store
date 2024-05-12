"use client";

import React, { useState } from 'react';
import { ShoppingCart } from "lucide-react";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";

interface InfoProps {
  data: Product;
};

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();
  const [quantity, setQuantity] = useState(1);

  const onAddToCart = () => {
    cart.addItem({ ...data, quantity });
  };

  return (
    <div className="border rounded-md p-6 group shadow-lg">
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <p className="mt-2 font-bold border-b border-gray-200 pb-2">Availability: {data.isArchived ? 'Out of stock' : 'In stock'}</p>
      <div className="mt-2 border-b border-gray-200 pb-2">
      <p className="bold-16">Size:</p>
      <p className="regular-16">{data.size?.value}</p>
      </div>
      <div className="mt-2 border-b border-gray-200 pb-2">
        <span className="text-gray-900 bold-16">Price:</span>
        <span className="ml-2 regular-16">
          <Currency value={data.price} />
        </span>
      </div>
      <div className="mt-4 flex items-center gap-x-2">
        <span className="bold-16">Quantity:</span>
        <input 
          type="number" 
          value={quantity} 
          onChange={(e) => setQuantity(Number(e.target.value))} 
          className="w-16 text-center border rounded-md"
          min="1" 
        />
      </div>
      <div className="mt-5 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2 border rounded-lg py-1 px-4 hover:bg-rose-500 hover:border-rose-500 hover:text-white transition-colors">
          Add to cart ({quantity})
          <ShoppingCart size={20} />
        </Button>
      </div>
      <div className="mt-5">
      <p className="text-medium mt-2 border-b border-gray-200 pb-4">{data.description}</p>
      </div>
    </div>
  );
};

export default Info;
