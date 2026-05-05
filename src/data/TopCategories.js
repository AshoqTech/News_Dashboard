import {
  LuBriefcase,
  LuCpu,
  LuFlaskConical,
  LuDribbble,
} from "react-icons/lu";
import { FaHome } from "react-icons/fa";

export const TopCategries = [
  {
    icon: LuCpu,
    label: "Technology",
    path: "technology",
    style:
      "flex items-center gap-3 py-2 rounded-sm transition-all duration-300 px-3   text-base lg:text-lg text-gray-700 font-bold bg-gray-300 dark:bg-gray-800 dark:text-white",
    icon_style: 'text-gray-200 bg-blue-500 p-1 text-xl rounded-sm'    
  },
  {
    icon: LuBriefcase,
    label: "Bussiness",
    path: "bussiness",
    style:
      "flex items-center gap-3 py-2 rounded-sm transition-all duration-300 px-3   text-base lg:text-lg text-gray-700 font-bold bg-gray-300 dark:bg-gray-800 dark:text-white",
    icon_style: 'text-gray-200 bg-green-600 p-1 text-xl rounded-sm'
  },
  {
    icon: LuDribbble,
    label: "Sports",
    path: "sports",
    style:
      "flex items-center gap-3 py-2 rounded-sm transition-all duration-300 px-3   text-md lg:text-lg text-gray-700 font-bold bg-gray-300 dark:bg-gray-800 dark:text-white" ,
    icon_style: 'text-gray-200 bg-amber-500 p-1 text-xl rounded-sm'  
  },
  {
    icon: LuFlaskConical,
    label: "Science",
    path: "science",
    style:
      "flex items-center gap-3 py-2 rounded-sm transition-all duration-300 px-3  font-bold text-md lg:text-lg text-gray-700  rounded-sm bg-gray-300 dark:bg-gray-800 dark:text-white",
    icon_style: 'text-gray-200 bg-red-500 p-1 text-xl rounded-sm'  
  },
];

export default TopCategries;
