import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";

import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";

import Features from "@/components/ui/features";
import FAQ from "@/components/ui/faq";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  
  const billboard = await getBillboard("6628e29a8445096b097ca10a");

  return (
    <>
      <div className="content-shift"> 
        <Billboard data={billboard} />
      </div>
      
      <Container>
        <div className="pb-10">
          <div className="flex flex-col gap-y-4 px-4 sm:px-6 lg:px-8">
          
            <ProductList title="Featured Art" items={products} />
            <Features/>
            <FAQ/>
            
          </div>
        </div>
      </Container>
    </>
  )
};

export default HomePage;
