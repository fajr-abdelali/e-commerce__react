import { HeartIcon } from "@heroicons/react/24/outline";
import { formaCurrency } from "../../utils/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { addToFav, removeFromFav } from "../../state/features/favorites/favorites.slice";

export default function ProductItem({ product }: { product: Product }) {

    const IMG_URL: string = import.meta.env.VITE_API_URL
    const isFavorite = useSelector((state: RootState) =>
        state.favorites.data.some(fav => fav.id === product.id)
    );
    const dispatch: AppDispatch = useDispatch();


    const handleClick = () => {
        isFavorite ? dispatch(removeFromFav(product.id)) : dispatch(addToFav(product))
    }

    return (

        <div className="w-72 bg-white shadow-sm rounded-sm duration-500 " >
            <div>
                {product.thumbnail ? (<img src={`${IMG_URL}/${product.thumbnail}`} alt="Product" className="h-80 w-72 object-cover rounded-t-sm" loading="lazy" />) :
                    null
                }
                <div className=" w-72">
                    <div className="flex items-center justify-between">
                        <p className="text-left text-lg font-bold text-black truncate block capitalize">{product.title}</p>
                        <span className="text-gray-400 mr-3 uppercase text-xs"> {product.brand} </span>
                    </div>
                    <div className="flex items-center">
                        <p className="text-lg font-semibold text-black cursor-auto my-3"> {formaCurrency(product.price)} </p>
                        <div className="ml-auto">
                            <HeartIcon
                                className={`h-5 w-5 z-40
                                ${isFavorite ? "fill-red-500 hover:fill-red-700 stroke-0" : "stroke-1"}
                                `}
                                onClick={handleClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}