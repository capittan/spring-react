import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategoryItem } from "../categories/types";

const HomePage = () => {
  const [list, setList] = useState<ICategoryItem[]>([]);

  useEffect(() => {
    axios.get<ICategoryItem[]>("http://localhost:8086/api/categories")
      .then(resp => { setList(resp.data); })
  }, []);
  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

            <div className="py-2">
                <Link to="CreateCategory" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add category</Link>
            </div>

            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {list.map((category) => (
                <div key={category.id} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={"http://localhost:8086/files/600_" + category.image}
                      alt={category.description}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={"http://localhost:8086/files/600_" + category.image}>
                      <span className="absolute inset-0" />
                      {category.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;