import Container from '@/components/ui/container';
import NoResults from '@/components/ui/no-results';
import getCategories from "@/actions/get-categories";
import getLayout from '@/actions/get-layout';
import LayoutCategories from '@/components/LayoutCategories/LayoutCategories';

export const revalidate = 0;

interface LayoutPageProps {
  params: {
    layoutId: string;
  },
}

const LayoutPage: React.FC<LayoutPageProps> = async ({ 
  params
}) => {
  const categories = await getCategories({ 
    layoutId: params.layoutId,
  });
  const layout = await getLayout(params.layoutId);

  return (
    <div className="content-shift bg-gray-100 min-h-screen">
      <Container>
        <div className="px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">{layout?.mainCategoryName || "Layout"}</h1>
          {categories.length === 0 ? (
            <NoResults />
          ) : (
            <LayoutCategories layout={layout} categories={categories} />
          )}
        </div>
      </Container>
    </div>
  );
};

export default LayoutPage;
