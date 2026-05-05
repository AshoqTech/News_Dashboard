import React from "react";
import { NavLink } from "react-router-dom";
import SidebarNav from "../data/SidebarNav";
import TopCategries from "../data/TopCategories";

const Sidebar = () => {
  return (
    <aside className="hidden md:flex lg:w-64 w-60  flex-col lg:gap-1 border-r border-slate-300 dark:bg-gray-900 dark:border-slate-800 sticky h-[calc(100vh-64px)] overflow-y-auto  right-0 bg-gray-200 p-4 min-w-60">
      {SidebarNav.map((nav) => {
        const Icon = nav.icon;
        return (
          <NavLink
            to={nav.path}
            key={nav.label}
            className="flex items-center gap-3 py-2 rounded-sm dark:text-gray-300  dark:hover:text-blue-500 transition-all duration-300 px-3 font-medium dark:hover:bg-gray-800 hover:text-blue-500 hover:bg-blue-100 text-md lg:text-lg text-gray-700 sideNav"
          >
            <Icon />
            <span>{nav.label}</span>
          </NavLink>
        );
      })}
      <hr className="my-3 text-gray-400 dark:text-gray-600 rounded-lg" />
      <h2 className="text-sm lg:text-base font-medium ml-3 mb-1 text-gray-600 dark:text-gray-300">
        Top Categories
      </h2>
      {TopCategries.map((nav) => {
        const Icon = nav.icon;
        return (
          <NavLink to={nav.path} key={nav.label} className={nav.style}>
            <div className={nav.icon_style}>
              <Icon />
            </div>
            <span>{nav.label}</span>
          </NavLink>
        );
      })}
    </aside>
  );
};

export default Sidebar;
