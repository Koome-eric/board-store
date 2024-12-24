import ProductCard from "@/components/ui/product-card";
import { Product } from "@/types";
import NoResults from "@/components/ui/no-results";
import classes from './Product/product.module.css'

interface ProductListProps {
  title: string;
  items: Product[]
}

const ProductList: React.FC<ProductListProps> = ({
  items
}) => {
  return (
    <div>
      <div className={classes.titleWrapper}>
      <h3 className="text-xl md:text-2xl sm:text-xl font-bold mb-6 mt-10">New <span className="text-custom-red">Collections</span></h3>
      </div>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
   );
}
 
export default ProductList;
