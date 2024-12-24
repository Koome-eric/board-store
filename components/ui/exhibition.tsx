import React from "react";
import Link from "next/link";
import { Category } from "@/types";

interface ExhibitionProps {
  data: Category;
}

const Exhibition: React.FC<ExhibitionProps> = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Link
        href={`/category/${data.id}`}
        className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${data.imageUrl})`,
        }}
      >
        <h3 className="absolute bottom-4 left-4 py-2 px-4 font-bold text-white uppercase bg-black/50 rounded-lg flex items-center">
          {data.name}
          <Link href={`/maincategory/${data.name}`} className="ml-2 text-white">
            →
          </Link>
        </h3>
      </Link>
    </div>
  );
};

export default Exhibition;
