import Image from "next/image";
import { MouseEventHandler } from "react";
import { X } from "lucide-react";

import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface CartProduct extends Product {
  quantity: number;  // Ensure quantity is part of the product type
}

interface CartItemProps {
  data: CartProduct;  // Using the extended type with quantity
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };

  const totalPrice = data.price * data.quantity;  // Calculate total price

  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt=""
          className="object-cover object-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton onClick={onRemove} icon={<X size={15} />} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold text-black">
              {data.name}
            </p>
            <p className="text-lg font-semibold text-gray-700">
              Qty: {data.quantity}  {/* Display quantity */}
            </p>
          </div>

          <div className="mt-1 flex text-sm">
            <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">{data.size.name}</p>
          </div>
          <Currency value={totalPrice} />  {/* Display total price based on quantity */}
        </div>
      </div>
    </li>
  );
}

export default CartItem;
