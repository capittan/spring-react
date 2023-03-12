import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IProductItem } from "../products/types"

const ProductsByCategoryPage = () => {
  const [list, setList] = useState<IProductItem[]>([]);
 
  const {id} = useParams<{ id: string }>();
 
  useEffect(() => {
    axios.get<IProductItem[]>("http://localhost:8086/api/products/getByCategories/"+id)
      .then(resp => { setList(resp.data); })
  }, []);
  return (
    <>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {list.map((product) => (
                <div key={product.categoryId} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <img
                      src={"http://localhost:8086/files/600_" + product.files[0]}
                      alt={product.description}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">

                     <Link to={"/Product/" + product.id} className="absolute inset-0" ></Link>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">
                    {product.description}
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

export default ProductsByCategoryPage;