import { useSelector } from "react-redux";
import ProductList from "../components/shared/productList";
import { RootState } from "../state/store";

export default function Favorite() {
    const { data, loading, error } = useSelector((state: RootState) => state.favorites);

    return (
        <>
            <h1 >favorite</h1>
            <ProductList products={data} loading={loading} error={error} />
        </>
    )
}