import Link from "next/link";
import Image from "next/image";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";
import getLayouts from "@/actions/get-layouts";

const Navbar = async () => {
  const categories = await getCategories();
  const layouts = await getLayouts();

  return (
    <div className="sticky-navbar border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-24 items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <div>
              <MainNav layouts={layouts} categories={categories} />
            </div>
            <div className="flex justify-center flex-1 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/">
                <h1>Urban Furniture</h1>
              </Link>
            </div>
            <div className="flex items-center flex-1 justify-end">
              <NavbarActions />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
