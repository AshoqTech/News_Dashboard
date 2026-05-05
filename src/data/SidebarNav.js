import {
  LuMenu,
  LuBriefcase,
  LuCpu,
  LuFilm,
  LuFlaskConical,
  LuClock,
  LuHeart,
  LuDribbble,
} from "react-icons/lu";
import { FaHome } from "react-icons/fa";

export const SidebarNav = [
  {
    icon: FaHome,
    label: "Home",
    index: true,
  },
  {
    icon: LuClock,
    label: "Latest",
    path: "latest",
  },
  {
    icon: LuBriefcase,
    label: "Bussiness",
    path: "bussiness",
  },
  {
    icon: LuCpu,
    label: "Technology",
    path: "technology",
  },
  {
    icon: LuDribbble,
    label: "Sports",
    path: "sports",
  },
  {
    icon: LuFilm,
    label: "Entertainment",
    path: "entertainment",
  },
  {
    icon: LuHeart,
    label: "Health",
    path: "health",
  },
  {
    icon: LuFlaskConical,
    label: "Science",
    path: "science",
  },
];

export default SidebarNav
