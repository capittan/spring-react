import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IProductItem } from "../products/types"

const ProductByIdPage = () => {
    const { id } = useParams<{ id: string }>();
    const [myProduct, setMyProduct] = useState<IProductItem>();

    useEffect(() => {
        axios.get<IProductItem>("http://localhost:8086/api/products/" + id)
            .then((response) => { setMyProduct(response.data);});
    }, []);

    return (
        <>
            <img src={"http://localhost:8086/files/600_" + myProduct?.files[0]}></img>
            {myProduct?.name}
            {myProduct?.description}
            {myProduct?.price}
        </>
    );
}

export default ProductByIdPage;