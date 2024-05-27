import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import getCategories from "@/actions/get-categories";

import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import Promotion from "@/components/ui/Promotion/promotion";
import FAQ from "@/components/ui/faq";
import Categories from "@/components/ui/Categories/Categories"; // Import the Categories component

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("6628e29a8445096b097ca10a");
  const categories = await getCategories();

  return (
    <>
      <div className="content-shift">
        <Billboard data={billboard} />
      </div>

      <Container>
        <div className="pb-10">
          <div className="flex flex-col gap-y-4 px-4 sm:px-6 lg:px-8">
            {/* Render Categories */}
            <Categories categories={categories} />

            <ProductList title="New Collections" items={products} />

            <Promotion />
  
            <FAQ />
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
