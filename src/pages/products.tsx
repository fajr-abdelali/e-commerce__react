import { useDispatch, useSelector } from "react-redux";
import ProductList from "../components/shared/productList";
import { RootState } from "../state/store";
import { retrieveProducts } from "../state/features/product/productSlice";
import { useEffect } from "react";

export default function Products() {

    const { data, loading, error } = useSelector((state: RootState) => state.product);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(retrieveProducts())
    },[dispatch])

    const loadMore = () => {
        dispatch(retrieveProducts())
    }

    return (
        <>
            <ProductList products={data} loading={loading} error={error} onLoadMore={loadMore} ></ProductList>
        </>
    )
}