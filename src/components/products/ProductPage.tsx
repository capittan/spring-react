import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProductItem } from "./types"

const ProductPage = () => {
    const [list, setList] = useState<IProductItem[]>([]);

    useEffect(() => {
        axios.get<IProductItem[]>("http://localhost:8086/api/products")
            .then(resp => { setList(resp.data); })
    }, []);
    return (
        <>  
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                        <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                            {list.map((product) => (
                                <div key={product.name} className="group relative">
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
        </>
    );
}

export default ProductPage;