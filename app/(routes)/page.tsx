import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import getLayouts from "@/actions/get-layouts";

import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import Promotion from "@/components/ui/Promotion/promotion";
import FAQ from "@/components/ui/faq";
import Layouts from "@/components/ui/Layouts/Layouts"; // Import the Categories component

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("6628e29a8445096b097ca10a");
  const layouts = await getLayouts();

  return (
    <>
      <div className="content-shift">
        <Billboard data={billboard} />
      </div>

      <Container>
        <div className="pb-10">
          <div className="flex flex-col gap-y-4 px-4 sm:px-6 lg:px-8">
            {/* Render Categories */}
            <Layouts layouts={layouts} />

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
