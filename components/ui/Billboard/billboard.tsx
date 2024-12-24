'use client';

import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="w-screen overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="relative bg-cover bg-center h-[600px] md:h-[800px] flex items-center justify-center text-white"
      >
        {/* Dark overlay to ensure text stands out on any background */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Main content for hero section */}
        <div className="relative z-10 text-center px-6 sm:px-12 md:px-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Urban Furniture
          </h1>
          <p className="text-lg sm:text-xl mb-6">YOUR SUPPLIER OF
LOCAL AND INTERNATIONAL
BOARDS AND FITTINGS</p>

          {/* Call to Action Buttons */}
          <div className="flex justify-center gap-6">
            <a
              href="/shop"
              className="px-6 py-3 bg-custom-red text-white rounded-md text-lg font-semibold hover:bg-red-600 transition duration-300"
            >
              Shop Now
            </a>
            <a
              href="/explore"
              className="px-6 py-3 border-2 border-white text-white rounded-md text-lg font-semibold hover:bg-white hover:text-black transition duration-300"
            >
              Explore Collection
            </a>
          </div>
        </div>
      </div>

      {/* Additional Style for Responsiveness */}
      <style jsx>{`
        @media (max-width: 768px) {
          .bg-cover {
            background-size: cover !important; // Ensure the image covers the area without distortion
          }
        }
      `}</style>
    </div>
  );
};

export default Billboard;
