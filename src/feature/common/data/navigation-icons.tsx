import { FaRegUser } from "react-icons/fa6";
import { GoHome, GoProjectRoadmap } from "react-icons/go";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { NavigationIcon } from "../types/navigation";

export const navigationIcons: NavigationIcon[] = [
  {
    name: "ホーム",
    icon: <GoHome />,
    url: "/home",
  },
  {
    name: "プロジェクト",
    icon: <GoProjectRoadmap />,
    url: "/project",
  },
  {
    name: "イベント",
    icon: <RiCalendarScheduleLine />,
    url: "/event",
  },
  {
    name: "メンバー",
    icon: <FaRegUser />,
    url: "/member",
  },
];
