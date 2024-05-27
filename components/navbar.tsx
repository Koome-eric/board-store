import Link from "next/link";
import Image from "next/image";

import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarActions from "@/components/navbar-actions";
import getCategories from "@/actions/get-categories";

const Navbar = async () => {
  const categories = await getCategories();

  return ( 
    <div className="sticky-navbar border-b">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-24 items-center justify-between">
          <div className="flex-1">
            <MainNav data={categories} />
          </div>
          <Link href="/" className="flex justify-center flex-1">
            <Image src='/logo.svg' alt='logo' width={200} height={160} />
          </Link>
          <div className="flex-1 flex justify-end">
            <NavbarActions />
          </div>
        </div>
      </Container>
    </div>
  );
};
 
export default Navbar;
