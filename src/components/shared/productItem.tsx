import { HeartIcon } from "@heroicons/react/24/outline";
import { formaCurrency } from "../../utils/formatCurrency";

export default function ProductItem({ product }: { product: Product }) {

    const IMG_URL:string=import.meta.env.VITE_API_URL

    const handleClick = (id: number) => {
        alert(id)
    }

    return (

        <div className="w-72 bg-white shadow-sm rounded-sm duration-500 " >
            <div onClick={() => handleClick(product.id)} style={{ cursor: 'pointer' }}>
                {product.thumbnail ? (<img src={`${IMG_URL}/${product.thumbnail}`} alt="Product" className="h-80 w-72 object-cover rounded-t-sm" />) :
                    null
                }
                <div className=" w-72">
                    <div className="flex items-center justify-between">
                        <p className="text-left text-lg font-bold text-black truncate block capitalize">{product.title}</p>
                        <span className="text-gray-400 mr-3 uppercase text-xs"> {product.brand} </span>
                    </div>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3"> {formaCurrency(product.price)} </p>
                        {/* <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del> */}
                        <div className="ml-auto">
                            <HeartIcon className="stroke-1 h-5 w-5 " onClick={() => handleClick(product.id)} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}