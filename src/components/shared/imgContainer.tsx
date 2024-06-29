interface ImgContainerProps {
    src: string;
    height?: string;
    imgObject?: 'object-contain' | 'object-cover' | 'object-fill';
    classes?: string;
}

export default function ImgContainer({ height = "60%", imgObject = "object-contain", src = "", classes }: ImgContainerProps) {
    return (
        <div className={`relative w-full h-0 overflow-hidden ${classes}`} style={{ paddingBottom: height }}>
            <img
                className={`absolute top-0 left-0 w-full h-full max-h-[100%] ${imgObject}`}
                src={src} alt="product image"
            />
        </div>
    );
}