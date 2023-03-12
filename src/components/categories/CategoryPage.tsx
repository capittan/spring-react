import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ICategoryItem } from "./types"

const HomePage = () => {
  const [list, setList] = useState<ICategoryItem[]>([]);

  useEffect(() => {
    axios.get<ICategoryItem[]>("http://localhost:8086/api/categories")
      .then(resp => { setList(resp.data); })
  }, []);
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-center text-gray-900">Categories</h2>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {list.map((category) => (
              <div key={category.id} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={"http://localhost:8086/files/600_" + category.image} alt={category.description}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <h2 className="mt-6 text-sm text-base font-bold text-xl">
                  <Link to={"/ProductsByCategory/" + category.id} className="absolute inset-0" ></Link>
                  {category.name}
                </h2>

                <p className="text-base font-semibold  text-gray-600">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;