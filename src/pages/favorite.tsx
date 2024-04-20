import { useDispatch, useSelector } from "react-redux";
import ProductList from "../components/shared/productList";
import { RootState } from "../state/store";

export default function Favorite() {

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state: RootState) => state.favorites);
    const loadMore = () => {
        console.log("pooop")
    }

    return (
        <>
            <h1 >favorite</h1>
            <ProductList products={data} loading={loading} error={error} onLoadMore={loadMore} />
        </>
    )
}