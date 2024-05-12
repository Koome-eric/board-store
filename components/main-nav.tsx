"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State to manage menu toggle

  const routes = data.map((category) => ({
    href: `/category/${category.id}`,
    label: category.name,
    active: pathname === `/category/${category.id}`,
  }));

  return (
    <nav className="mx-6 flex items-center md:space-x-6">
      <button className="md:hidden mb-4 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        <img src="/menu-icon.svg" alt="Menu" width={25} height={25} />
      </button>
      <div className={`${isOpen ? 'flex' : 'hidden'} flex-col md:flex md:flex-row md:items-center md:space-x-6 w-full bg-white shadow-md rounded-lg p-4 absolute inset-x-0 top-full z-50`}>
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              'text-sm font-medium transition-colors hover:text-black py-2 block',
              route.active ? 'text-black' : 'text-neutral-500'
            )}
          >
            {route.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MainNav;
