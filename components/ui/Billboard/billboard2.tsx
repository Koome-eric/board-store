"use client";

import React from 'react';

interface BillboardClientProps {
  imageUrl: string;
  label: string;
}

const BillboardClient: React.FC<BillboardClientProps> = ({ imageUrl, label }) => {
  return (
    <div className="px-0 sm:px-0 lg:px-0 w-screen overflow-hidden">
      <div 
        style={{ backgroundImage: `url(${imageUrl})` }} 
        className="relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover flex"
      >
        <div 
          className="w-1/2 flex items-center justify-start pl-16 py-2 relative bg-opacity-80 bg-green-90" 
          style={{
            
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center left 10%', // Adjust this value to move the image to the left
            backgroundSize: '90%', // Default size
          }}
        >
          <div className="font-bold text-2xl sm:text-5xl lg:text-5xl text-white relative z-10">
            {label}
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

export default BillboardClient;
