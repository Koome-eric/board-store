import Image from "next/image";
import { Category } from "@/types";

interface Exhibition {
  data: Category

}

const Exhibition: React.FC<{ data: Category }> = ({ data }) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
      style={{ backgroundImage: `url(/exhibition-img-1.jpg)` }}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        {/* Icon and category name */}
        <div className="flex gap-4 items-center">
          <div className="rounded-full bg-custom-red p-4">
            <Image
              src="/category.svg"
              alt="category icon"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{data.name}</h4>
            <p className="regular-14 text-white">Explore this category</p>
          </div>
        </div>

        {/* Additional section for items or information within each category */}
        <div className="flex gap-6 items-center">
          {/* Add other details or images relevant to the category here */}
          {/* Example: Placeholder text */}
          <p className="bold-16 md:bold-20 text-white">More Info About {data.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Exhibition;