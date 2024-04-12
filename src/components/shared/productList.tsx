import { HeartIcon } from "@heroicons/react/24/outline";
import ProductItem from "./productItem";
import { formaCurrency } from "../../utils/formatCurrency";

type productListProps = {
    products?: Product[]
}

export default function ProductList({ products }: productListProps) {
    return (
        // ✅ Grid Section - Starts Here 👇
        <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4/
         md:grid-cols-3 justify-items-center justify-center gap-y-5 gap-x-3 mt-10 mb-5">

            

            {/* <!--   ✅ Product card 1 - Starts Here 👇 --> */}
            <div className="w-72 bg-white shadow-sm rounded-sm duration-500">
                <a href="#">
                    <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2./
                    1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Product" className="h-80 w-72 object-cover rounded-t-sm" />
                    <div className=" w-72">
                        <div className="flex items-center justify-between">
                            <p className="text-left text-lg font-bold text-black truncate block capitalize">Product Name</p>
                            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                        </div>
                        <div className="flex items-center">
                            <p className="text-lg font-semibold text-black cursor-auto my-3">{formaCurrency(149)} </p>
                            {/* <del>
                                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                            </del> */}
                            <div className="ml-auto">
                                <HeartIcon className="stroke-1 h-5 w-5 " />
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            {/* <!--   🛑 Product card 1 - Ends Here  --> */}
            {products?.map(product=>{
                return <ProductItem product={product} key={product.id} />
            } )}
            

            
        </section>

        // 🛑 Grid Section - Ends Here
    )
}