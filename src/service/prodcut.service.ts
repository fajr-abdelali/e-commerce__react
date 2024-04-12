
const url = import.meta.env.VITE_API_URL
const products: Product[] = [];

export const fetchData = async (): Promise<Product[]> => {
    try {
        const response = await fetch(`${url}/products`);
        if (!response.ok) {
            throw new Error(`HTTP error ! status ${response.status}`)
        }
        return await response.json()
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "there was an error";
        console.log(errorMessage);
        return [];
    }
}

export const fetchFavorits = async (): Promise<Product[]> => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error ! status ${response.status}`);
        }
        return await response.json()
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "there was an error";
        console.log(errorMessage)
        return []
    }
}

export const fetachBrands = (): string[] => {
    const brands = products.reduce((acc: string[], elem: Product) => {
        if (elem.brand !== undefined) acc.includes(elem.brand) ? acc : acc.concat(elem.brand)
        return acc
    }, []);
    return brands
}