import { Layout } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/layouts`;

const getLayout = async (id: string): Promise<Layout> => {
  const res = await fetch(`${URL}/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch layout");
  }

  return res.json();
};

export default getLayout;
