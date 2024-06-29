import ProductItem from "../productItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface carouselProps {
    src: string;
    title?: string;
    description?: string;
}



export default function Carousel() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
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
            <div className="slider-container my-0 mx-auto" >
                <Slider {...settings}>
                    {/* {sliders.map(slider => )} */}
                    <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" className="max-h-96 w-full object-cover" />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" className="max-h-96 w-full object-cover" />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" className="max-h-96 w-full object-cover" />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" className="max-h-96 w-full object-cover" />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" className="max-h-96 w-full object-cover" />
                    <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" className="max-h-96 w-full object-cover" />

                </Slider>
            </div>

            

        </>
    );
}