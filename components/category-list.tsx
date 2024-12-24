import Exhibition from "@/components/ui/exhibition";
import { Category } from "@/types";
import NoResults from "@/components/ui/no-results";

interface ExhibitionListProps {
  title: string;
  items: Category[]
}

const CategoryList: React.FC<ExhibitionListProps> = ({
  title,
  items
}) => {
  return (
    <div>
      <h3 className="font-bold text-2xl text-left mb-4 mt-4">{title}</h3>
      {items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {items.map((item) => (
          <Exhibition key={item.id} data={item} />
        ))}
      </div>
    </div>
   );
}
 
export default CategoryList;
