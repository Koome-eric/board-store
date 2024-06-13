'use client';

import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="px-0 sm:px-0 lg:px-0 w-screen overflow-hidden">
      <div style={{ backgroundImage: `url(${data?.imageUrl})` }} className="relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover flex">
        <div 
          className="w-1/2 bg-custom-red bg-opacity-80 flex items-center justify-start pl-16 py-2 relative" 
          style={{
            backgroundImage: `url('background.svg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '90%', // Default size
          }}
        >
          <div className="font-bold text-2xl sm:text-5xl lg:text-5xl text-white relative z-10">
            {data.label}
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          {/* Additional content or empty space; adjust as needed */}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .bg-custom-red {
            background-size: 100% !important; // Smaller size on smaller screens
          }
        }
      `}</style>
    </div>
  );
};

export default Billboard;
