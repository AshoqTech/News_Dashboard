import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewsCard from "./components/NewsCard";
//  Layouts
import MainLayout from "./Layouts/MainLayout";
import NewsLayout from "./Layouts/NewsLayout";

// Loaders
import newsLoader from "./Loaders/NewsLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <NewsLayout />,
        loader: newsLoader,
        children: [
          {
            path: ":category",
            element: <NewsCard />,
            loader: newsLoader,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-200 transition-all duration-300">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
