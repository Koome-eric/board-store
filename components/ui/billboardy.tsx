import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({
  data
}) => {
  console
  return ( 
    <div className="px-0 sm:px-0 lg:px-0 w-screen overflow-hidden">
      <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover flex">
        
      </div>
    </div>
   );
};

export default Billboard;
