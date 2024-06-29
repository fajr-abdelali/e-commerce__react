import { formaCurrency } from "../../utils/formatCurrency";
import ImgContainer from "./imgContainer";

export default function GridProducts() {
    return (
        <div className="grid grid-cols-4 grid-rows-2 grid-flow-col gap-4 md:h-[500px]" >
            <div className="p-4 rounded-lg shadow-lg bg-pink-500">01</div>
            <div className="rounded-lg shadow-lg bg-pink-500">

                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">
                    <ImgContainer src="https://flowbite.com/docs/images/products/apple-watch.png"></ImgContainer>

                    <div className="px-1 pb-1">
                        <a href="#">
                            <h5 className="text-left text-base font-bold truncate block capitalize">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                        </a>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-pink-600 font-normal cursor-auto">{formaCurrency(599)}</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="rounded-lg shadow-lg bg-pink-500">


                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700">

                    <ImgContainer src="https://files.refurbed.com/ii/apple-macbook-pro-2018-15-4-touc-1572258896.jpg?t=resize&h=630&w=1200" ></ImgContainer>

                    <div className="px-1 pb-15">
                        <a href="#">
                            <h5 className="text-left text-base font-bold truncate block capitalize">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                        </a>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-pink-600 font-normal cursor-auto">{formaCurrency(599)}</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="p-4 rounded-lg shadow-lg bg-pink-500">04</div>
            <div className="col-span-2 row-span-2 p-4 rounded-lg shadow-lg bg-pink-500">right</div>
        </div>
    );
}