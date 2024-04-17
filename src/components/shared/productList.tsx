import { useEffect } from "react";
import ProductItem from "./productItem";
import ProductItemSkelton from "./productItem.skelton";
import Alert from "./alert";
import { useDispatch, useSelector } from "react-redux";
import { retrieveProducts } from "../../state/features/product/productSlice";
import { AppDispatch, RootState } from "../../state/store";


export default function ProductList() {


    const dispatch: AppDispatch = useDispatch();
    const { data, loading, error } = useSelector((state: RootState) => state.product)

    useEffect(() => {
        dispatch(retrieveProducts())
    }, [dispatch])

    const loadMore = () => {
        dispatch(retrieveProducts());
    };



    return (
        // Grid Section - Starts Here
        <>
            <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4/
         md:grid-cols-3 justify-items-center justify-center gap-y-5 gap-x-3 mt-10 mb-5">



                {/* <!-- Product card - Starts Here --> */}

                {loading ? (Array.from({ length: 8 }).map((_, index) => <ProductItemSkelton key={index} />))
                    : error ? (<Alert child={error} />)
                        : (data.map((product: Product) => <ProductItem product={product} key={product.id}></ProductItem>))
                }

                {/* <!-- Product card - Ends Here --> */}



            </section>
            <button onClick={loadMore}>Load More</button>
        </>

        // Grid Section - Ends Here
    )
}