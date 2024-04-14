import { useEffect, useState } from "react";
import { fetchData } from "../../service/prodcut.service";
import { HeartIcon } from "@heroicons/react/24/outline";
import ProductItem from "./productItem";
import { formaCurrency } from "../../utils/formatCurrency";
import ProductItemSkelton from "./productItem.skelton";
import Alert from "./alert";

type productListProps = {
    products?: Product[]
}

export default function ProductList() {



    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            fetchData().then(res => res).then(data => {
                setProducts(data)
                setLoading(false)
            }).catch(err => console.log(err))
        }, 4000)
    })



    return (
        // Grid Section - Starts Here
        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4/
         md:grid-cols-3 justify-items-center justify-center gap-y-5 gap-x-3 mt-10 mb-5">



            {/* <!-- Product card - Starts Here --> */}

            {isLoading ? ([1, 2, 3, 4, 5, 6, 7, 8].map(n => <ProductItemSkelton key={n} />))
                : products.length > 0 ? (products.map(product => <ProductItem product={product}></ProductItem>)) :
                    (<Alert />)
            }

            {/* <!-- Product card - Ends Here --> */}



        </section>

        // Grid Section - Ends Here
    )
}