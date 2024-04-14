export default function ProductItemSkelton() {
    return (
        <div className="w-72 bg-white shadow-sm rounded-sm duration-500 " >
            <div className="animate-pulse">
                <div className="bg-slate-300 h-80 w-72 object-cover rounded-t-sm" ></div>
                <div className=" w-72 pt-2 space-y-3">
                    <div className="grid grid-cols-3 gap-4 gap-x-4">
                        <div className="h-2 bg-slate-300 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                        <div className="h-2 bg-slate-300 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}