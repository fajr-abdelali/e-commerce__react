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
    options?: Option[]
}

type Colors = {
    name: string,
    hexa: string
}

type Rating = {
    rate: number,
    count: number
}

type Option = {
    name: string,
    options: string[]
}
