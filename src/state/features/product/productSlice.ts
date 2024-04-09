import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type ProductState = {
    products: Product[]
}

const initialState: ProductState = {
    products: [],
}

export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.products.push({
                id: state.products.length,
                title: action.payload.title,
                description: action.payload.description,
                price: action.payload.price,
                discountPercentage: action.payload.discountPercentage,
                rating: action.payload.rating,
                stock: action.payload.stock,
                brand: action.payload.brand,
                category: action.payload.category,
                thumbnail: action.payload.thumbnail,
                images: action.payload.images
            })
        },
        removeProduct: (state, action: PayloadAction<Product>) => {
            state.products = state.products.filter((product) => product.id != action.payload.id)
        }
    }
})

export const { addProduct } = ProductSlice.actions
export default ProductSlice.reducer