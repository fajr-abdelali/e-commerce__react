interface ImgContainerProps {
    src: string;
    height?: string;
    imgObject?: 'object-contain' | 'object-cover' | 'object-fill';
}

export default function ImgContainer({ height = "60%", imgObject = "object-contain", src = "" }: ImgContainerProps) {
    return (
        <div className="relative w-full h-0 overflow-hidden" style={{paddingBottom:height}}>
            <img
                className={`absolute top-0 left-0 w-full h-full max-h-[100%] ${imgObject}`}
                src={src} alt="product image"
            />
        </div>
    );
}