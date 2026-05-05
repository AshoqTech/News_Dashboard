import React from "react";
import TopNav from "../data/TopNav";
import NewsCard from "../components/NewsCard";
import { NavLink } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const NewsLayout = () => {
  const articles = useLoaderData()
  


  return (
    <div className="mt-5  w-full max-w-full">
      <h1 className="text-xl md:text-3xl font-bold">Top Stories</h1>
      <div className="flex mt-5 gap-2 w-full lg:gap-3 overflow-auto whitespace-nowrap no-scrollbar relative">
        <div className="sm:hidden pointer-events-none absolute left-0 top-0 h-full w-8 bg-linear-to-r from-white to-transparent dark:from-black dark:to-transparent"></div>
        <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-linear-to-l from-white to-transparent sm:hidden dark:from-black dark:to-transparent"></div>
        {TopNav.map((nav) => {
          return (
            <NavLink
              to={nav.path}
              key={nav.label}
              className="flex items-center py-1 px-3 transition-all duration-300  rounded-xl hover:bg-blue-600  hover:text-gray-100 font-medium text-md lg:text-lg shrink-0 topNav "
            >
              <span>{nav.label}</span>
            </NavLink>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5 overflow-auto h-130">
        
        {articles && articles.map((article,index)=>{
          return (
          <div key={article.url || index} className={index === 0 ? 'md:col-span-3' : ''}>
            <NewsCard article={article} isFeatured={index === 0}/>
          </div>
          )
        })}
      </div>
    </div>
  );
};

export default NewsLayout;
