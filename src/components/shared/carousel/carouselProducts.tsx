import ProductItem from "../productItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CarouselProductsProps {
    title?: string;
    products: Product[];
}

export default function CarouselProducts({ title, products }: CarouselProductsProps) {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            {title && (<div className="ltr" ><h2 className="text-h2">{title}</h2></div>)}
            <div className="slider-container my-0 mx-auto" >
                <Slider {...settings}>
                    {products.map(product => <ProductItem key={product.id} product={product} />)}
                </Slider>
            </div>
        </>
    );
}