import { headers } from "next/headers";

export const getCurrentPath = async (): Promise<string> => {
  const headerList = await headers();
  const fullUrl = headerList.get("x-url");

  if (!fullUrl) return "";

  const url = new URL(fullUrl);
  return url.pathname;
};
