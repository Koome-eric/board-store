import ProductList from '@/components/product-list'
import Gallery from '@/components/gallery';
import MainInfo from '@/components/maininfo';
import getProduct from '@/actions/get-product';
import getProducts from '@/actions/get-products';
import Container from '@/components/ui/container';

export const revalidate = 0;

interface ProductPageProps {
  params: {
    productId: string;
  },
}

const ProductPage: React.FC<ProductPageProps> = async ({ 
  params
 }) => {
  const product = await getProduct(params.productId);
  const allSuggestedProducts = await getProducts({ 
    categoryId: product?.category?.id
  });

  // Ensure we only take up to 3 suggested products
  const suggestedProducts = allSuggestedProducts.slice(0, 3);

  if (!product) {
    return null;
  }

  return (
    <div className="content-shift bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8 mt-10">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
              <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <MainInfo data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Art" items={suggestedProducts} />
        </div>
      </Container>
    </div>  
  )
}

export default ProductPage;
