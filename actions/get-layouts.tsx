import { Layout } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/layouts`;

const getLayouts = async (): Promise<Layout[]> => {
  const res = await fetch(URL);

  if (!res.ok) {
    throw new Error("Failed to fetch layouts");
  }

  return res.json();
};

export default getLayouts;
