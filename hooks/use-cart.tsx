import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from "zustand/middleware"; 

import { Product } from '@/types';
import { AlertTriangle } from 'lucide-react';

interface CartProduct extends Product {
  quantity: number;
}

interface CartStore {
  items: CartProduct[];
  addItem: (data: CartProduct) => void;
  removeItem: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>((set, get) => ({
  items: [],
  addItem: (data: CartProduct) => {
    const currentItems = get().items;
    const existingItem = currentItems.find((item) => item.id === data.id);
    
    if (existingItem) {
      // Update quantity if item already exists
      const updatedItems = currentItems.map(item => 
        item.id === data.id ? {...item, quantity: item.quantity + data.quantity} : item
      );
      set({ items: updatedItems });
      toast('Quantity updated in cart.');
    } else {
      // Add new item if it does not exist
      set({ items: [...currentItems, data] });
      toast.success('Item added to cart.');
    }
  },
  removeItem: (id: string) => {
    set({ items: [...get().items.filter((item) => item.id !== id)] });
    toast.success('Item removed from cart.');
  },
  removeAll: () => set({ items: [] }),
}), {
  name: 'cart-storage',
  storage: createJSONStorage(() => localStorage)
}));

export default useCart;
