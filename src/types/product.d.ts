type Product = {
    id: number;
    title: string;
    description?: string;
    price: number;
    discountPercentage?: number;
    rating?: Rating;
    stock?: number;
    brand?: string;
    colors?: Colors[];
    category?: string;
    thumbnail?: string;
    images?: string[];
}

type Colors = {
    name: string,
    hexa: string
}
type Rating = {
    rate: number,
    count: number
}
