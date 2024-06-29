import { HeartIcon } from "@heroicons/react/24/outline";
import { formaCurrency } from "../../utils/formatCurrency";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../state/store";
import { addToFav, removeFromFav } from "../../state/features/favorites/favorites.slice";
import { Link } from "react-router-dom";
import ImgContainer from "./imgContainer";

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

                {product.thumbnail ? (
                    <Link to={`/product/${product.id}`} >
                        <ImgContainer imgObject="object-cover" height="100%" src={`${IMG_URL}/${product.thumbnail}`} ></ImgContainer>
                    </Link>
                ) :
                    null
                }
                <div className="w-72">
                    <Link to={`/product/${product.id}`} className="flex items-center justify-between mt-3" >
                        <p className="text-left text-base font-bold truncate block capitalize">{product.title}</p>
                        {product.brand && (<span className="text-gray-400 uppercase text-xs whitespace-nowrap"> {product.brand} </span>)}
                    </Link>
                    <div className="flex items-center mt-1">
                        <Link to={`/product/${product.id}`} >
                            <p className="text-sm text-pink-600 font-normal cursor-auto"> {formaCurrency(product.price)} </p>
                        </Link>
                        <div className="ml-auto">
                            <HeartIcon
                                className={`h-5 w-5 z-40 cursor-pointer
                                ${isFavorite ? "fill-pink-600 hover:fill-pink-600 stroke-0" : "stroke-1"}
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