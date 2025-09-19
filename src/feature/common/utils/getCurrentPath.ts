import { headers } from "next/headers";

export const getCurrentPath = async (): Promise<string> => {
  const headerList = await headers();
  const fullUrl = headerList.get("x-url");

  if (!fullUrl) return "";

  try {
    const url = new URL(fullUrl);
    return url.pathname;
  } catch {
    // URL解析に失敗した場合は、スラッシュで始まる部分を抽出
    const match = fullUrl.match(/^https?:\/\/[^\/]+(\/.*)$/);
    return match ? match[1] : "/";
  }
};
