import { useDispatch, useSelector } from "react-redux";
import Carousel from "../components/shared/carousel/carousel";
import CarouselProducts from "../components/shared/carousel/carouselProducts";
import { RootState } from "../state/store";
import { useEffect } from "react";
import { retrieveProducts } from "../state/features/product/productSlice";
import { formaCurrency } from "../utils/formatCurrency";
import GridProducts from "../components/shared/gridProducts";

function Home() {

    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state: RootState) => state.product);

    useEffect(() => {
        dispatch(retrieveProducts())

    }, [dispatch]);



    return (
        <>
            <Carousel></Carousel>
            <CarouselProducts title="trending" products={[...data.slice(0, 6)]} ></CarouselProducts>
            <GridProducts></GridProducts>
        </>
    );
}
export default Home;