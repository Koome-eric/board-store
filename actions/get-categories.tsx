import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (params?: { layoutId?: string }): Promise<Category[]> => {
  let url = URL;
  if (params?.layoutId) {
    url += `?layoutId=${params.layoutId}`;
  }

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
};

export default getCategories;
