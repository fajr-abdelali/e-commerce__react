
const url = import.meta.env.VITE_API_URL;
const products: Product[] = [];

export const fetchData = async (nextPage:number,pageSize:number): Promise<Product[]> => {
    try {
        const response = await fetch(`${url}/products?_page=${nextPage}&_per_page=${pageSize}`);
        if (!response.ok) {
            throw new Error(`HTTP error ! status ${response.status}`)
        }
        const res = await response.json()
        
        return await res.data
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "there was an error";
        console.log(errorMessage);
        return [];
    }
}

export const fetchProductById = async (productId: number): Promise<Product> => {
    try {
      const response = await fetch(`${url}/products/${productId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const res = await response.json();
      return res;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "There was an error";
      console.log(errorMessage);
      throw new Error(errorMessage);
    }
  };

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