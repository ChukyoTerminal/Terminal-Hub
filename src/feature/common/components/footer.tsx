import { navigationIcons } from "@/feature/common/data/navigation-icons";
import { getCurrentPath } from "@/feature/common/utils/getCurrentPath";
import Link from "next/link";

export const Footer = async () => {
  const pathname = await getCurrentPath();

  return (
    <div className="block md:hidden fixed bottom-0 left-0 right-0 bg-gray-50 h-[60px] z-50 justify-center items-center">
      <div className="flex justify-between items-center w-full px-[10vw] py-2">
        {navigationIcons.map((icon) => (
          <Link key={icon.name} href={icon.url}>
            {pathname === icon.url ? (
              <div className="flex flex-col items-center text-blue-500 text-3xl">
                {icon.icon}
                <span className="text-xs">{icon.name}</span>
              </div>
            ) : (
              <div className="flex flex-col items-center text-gray-500 text-3xl">
                {icon.icon}
                <span className="text-xs">{icon.name}</span>
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
