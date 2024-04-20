import ProductItem from "./productItem";
import ProductItemSkelton from "./productItem.skelton";
import Alert from "./alert";

type ProductListProps = {
    products: Product[];
    loading: boolean;
    error?: string;
    onLoadMore?: () => void;
}
export default function ProductList({ products, loading, error, onLoadMore }: ProductListProps) {

    return (
        // Grid Section - Starts Here
        <>
            <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4/
         md:grid-cols-3 justify-items-center justify-center gap-y-5 gap-x-3 mt-10 mb-5">
                {/* <!-- Product card - Starts Here --> */}

                {loading ? (Array.from({ length: 8 }).map((_, index) => <ProductItemSkelton key={index} />))
                    : error ? (<Alert child={error} />)
                        : (console.log(products),
                            products.map((product: Product) => <ProductItem product={product} key={product.id}></ProductItem>))
                }

                {/* <!-- Product card - Ends Here --> */}



            </section>

            {products.length > 0 ? <button onClick={onLoadMore}>Load More</button > :
                <p>no product</p>}
        </>

        // Grid Section - Ends Here
    )
}