import { HeartIcon } from "@heroicons/react/24/outline";

export default function ProductItem({ product }: { product: Product }) {

    const handleClick = (id: number) => {
        alert(id)
    }

    return (

        <div className="w-72 bg-white shadow-sm rounded-sm duration-500 " >
            <a href="javascript:void(0)">
                <img src="https://images.unsplash.com/photo-1646753522408-077ef9839300?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NjZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    alt="Product" className="h-80 w-72 object-cover rounded-t-sm" />
                <div className=" w-72">
                    <div className="flex items-center justify-between">
                        <p className="text-left text-lg font-bold text-black truncate block capitalize">{product.title}</p>
                        <span className="text-gray-400 mr-3 uppercase text-xs"> {product.brand} </span>
                    </div>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3"> {product.price} </p>
                        {/* <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del> */}
                        <div className="ml-auto">
                            <HeartIcon className="stroke-1 h-5 w-5 " onClick={() => handleClick(product.id)} />
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}