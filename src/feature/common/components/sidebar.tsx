import { navigationIcons } from "@/feature/common/data/navigation-icons";
import { getCurrentPath } from "@/feature/common/utils/getCurrentPath";
import Link from "next/link";

export const Sidebar = async () => {
  const pathname = await getCurrentPath();

  return (
    <div className="hidden md:block fixed left-0 top-0 bottom-0 w-[250px] bg-gray-50 z-50 items-center">
      <div className="p-4 border-b border-gray-200">
        <Link href="/home" className="text-2xl font-bold">
          Terminal Hub
        </Link>
      </div>
      <div className="flex flex-col w-full mt-4 px-4 py-2 gap-3">
        {navigationIcons.map((icon) => (
          <Link key={icon.name} href={icon.url} className="pl-3 hover:bg-gray-100 rounded-lg">
            {pathname === icon.url ? (
              <div className="flex items-center p-2 text-gray-50 bg-blue-500 hover:bg-blue-600/90 text-3xl gap-2 rounded-lg">
                {icon.icon}
                <span className="text-lg">{icon.name}</span>
              </div>
            ) : (
              <div className="flex items-center p-2 text-gray-500 bg-gray-50 hover:bg-gray-100 text-3xl gap-2 rounded-lg">
                {icon.icon}
                <span className="text-lg">{icon.name}</span>
              </div>
            )}
          </Link>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full text-2xl font-bold p-4 border-t border-gray-200 bg-gray-50">
        Username
      </div>
    </div>
  );
};
