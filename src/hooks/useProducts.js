import { useEffect } from "react";
import { useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        // fetch('./products.json')
        fetch('https://chilling-citadel-66740.herokuapp.com/products')


            .then(res => res.json())
            // .then(data => setProducts(data));
            .then(data => setProducts(data.products));
    }, []);
    return [products, setProducts];
}

export default useProducts;