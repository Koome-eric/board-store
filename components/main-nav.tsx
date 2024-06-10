"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Category, Layout } from "@/types";

interface MainNavProps {
  layouts: Layout[];
  categories: Category[];
}

const MainNav: React.FC<MainNavProps> = ({ layouts, categories }) => {
  const pathname = usePathname();
  const [isSideMenuOpen, setSideMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<{ [key: string]: boolean }>({});
  const [animationParent] = useAutoAnimate();

  const toggleDropdown = (layoutId: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [layoutId]: !prev[layoutId],
    }));
  };

  useEffect(() => {
    console.log("Layouts and categories: ", layouts, categories);
  }, [layouts, categories]);

  const groupedCategories = layouts?.map(layout => ({
    layout,
    categories: categories?.filter(category => category.layoutId === layout.id),
  })) || [];

  function toggleSideMenu() {
    setSideMenuOpen(!isSideMenuOpen);
  }

  return (
    <nav className="mx-auto flex w-full max-w-7xl justify-between px-4 py-5 text-sm">
      <section ref={animationParent} className="flex items-center gap-10">
        {isSideMenuOpen && <MobileNav closeSideMenu={toggleSideMenu} layouts={layouts} categories={categories} openDropdowns={openDropdowns} toggleDropdown={toggleDropdown} />}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {groupedCategories.map(({ layout, categories }) => (
            <div key={layout.id} className="relative group px-2 py-3 transition-all">
              <p
                onClick={() => toggleDropdown(layout.id)}
                className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black"
              >
                <span>{layout.mainCategoryName}</span>
                {categories.length > 0 && (
                  <IoIosArrowDown className={`text-xs transition-all ${openDropdowns[layout.id] && "rotate-180"}`} />
                )}
              </p>
              {openDropdowns[layout.id] && categories.length > 0 && (
                <div className="absolute right-0 top-10 hidden w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md transition-all group-hover:flex">
                  {categories.map(category => (
                    <Link
                      key={category.id}
                      href={`/category/${category.id}`}
                      className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                    >
                      <span className="whitespace-nowrap pl-3">{category.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <FiMenu onClick={toggleSideMenu} className="cursor-pointer text-4xl md:hidden" />
    </nav>
  );
};

const MobileNav = ({
  closeSideMenu,
  layouts,
  categories,
  openDropdowns,
  toggleDropdown
}: {
  closeSideMenu: () => void;
  layouts: Layout[];
  categories: Category[];
  openDropdowns: { [key: string]: boolean };
  toggleDropdown: (layoutId: string) => void;
}) => {
  const [animationParent] = useAutoAnimate();
  const groupedCategories = layouts?.map(layout => ({
    layout,
    categories: categories?.filter(category => category.layoutId === layout.id),
  })) || [];

  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className="h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose onClick={closeSideMenu} className="cursor-pointer text-4xl" />
        </section>
        <div className="flex flex-col text-base mt-11 gap-2 transition-all">
          {groupedCategories.map(({ layout, categories }) => (
            <div key={layout.id} className="relative px-2 py-3 transition-all">
              <p
                onClick={() => toggleDropdown(layout.id)}
                className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black"
              >
                <span>{layout.mainCategoryName}</span>
                {categories.length > 0 && (
                  <IoIosArrowDown className={`text-xs transition-all ${openDropdowns[layout.id] && "rotate-180"}`} />
                )}
              </p>
              {openDropdowns[layout.id] && categories.length > 0 && (
                <div className="flex flex-col gap-1 bg-transparent py-3 transition-all">
                  {categories.map(category => (
                    <Link
                      key={category.id}
                      href={`/category/${category.id}`}
                      className="flex cursor-pointer items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                    >
                      <span className="whitespace-nowrap pl-3">{category.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainNav;
