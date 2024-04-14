import { useEffect, useState } from "react";
import { fetchData } from "../../service/prodcut.service";
import ProductItem from "./productItem";
import ProductItemSkelton from "./productItem.skelton";
import Alert from "./alert";
import { useDispatch, useSelector } from "react-redux";
import { retrieveProducts } from "../../state/features/product/productSlice";

type productListProps = {
    products?: Product[]
}

export default function ProductList() {


    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(state => state.product)

    useEffect(() => {
        dispatch(retrieveProducts())
    }, [dispatch])



    return (
        // Grid Section - Starts Here
        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4/
         md:grid-cols-3 justify-items-center justify-center gap-y-5 gap-x-3 mt-10 mb-5">



            {/* <!-- Product card - Starts Here --> */}

            {loading ? (Array.from({ length: 8 }).map((_,index) => <ProductItemSkelton key={index} />))
                : error ? (<Alert />)
                : (products.map((product: Product) => <ProductItem product={product} key={product.id}></ProductItem>))
            }

            {/* <!-- Product card - Ends Here --> */}



        </section>

        // Grid Section - Ends Here
    )
}