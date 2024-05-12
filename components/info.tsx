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
      <p className="mt-2 border-b border-gray-200 pb-4">Availability: {data.isArchived ? 'Out of stock' : 'In stock'}</p>
      <div className="mt-2 border-b border-gray-200 pb-4">
      <p>Size:</p>
      <p>{data.size?.value}</p>
      </div>
      <div className="mt-2 border-b border-gray-200 pb-4">
        <span className="text-gray-900 font-semibold">Price:</span>
        <span className="ml-2 text-xl">
          <Currency value={data.price} />
        </span>
      </div>
  
      <div className="mt-6 flex items-center gap-x-3">
        <Button onClick={onAddToCart} className="flex items-center gap-x-2 border rounded-lg py-1 px-4 hover:bg-rose-500 hover:border-rose-500 hover:text-white transition-colors">
          Add to cart ({quantity})
          <ShoppingCart size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Info;
