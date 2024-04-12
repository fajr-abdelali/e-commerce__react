import { useEffect, useState } from "react";
import ProductList from "../components/shared/productList";
import { fetchData } from "../service/prodcut.service";

export default function Products(){

    const [products,setProducts]= useState([])

    useEffect(()=>{
        fetchData().then(res=> setProducts(res) )
    })



    return (
        <ProductList products={products} ></ProductList>
    )
}