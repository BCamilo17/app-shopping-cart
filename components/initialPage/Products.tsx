'use client';
import { useEffect, useState } from "react";
import { Card } from "../general/Card";
import { getAllCart, getProducts, postCart } from "@/app/services";
import { Product } from "@/app/types/intex";
import { Budget } from "../general/Budget";

export const Products = () => {
    const [products, setProducts] = useState<Product[] | null>(null)
    const [cart, setCart] = useState<Product[] | null>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getProducts();
                setProducts(data?.products);
            } catch (e) {
                console.error(e);
            }
        }
        fetchProducts();
    }, []);
    const handleAddCart = async (productId: number) => {
        try {
            const response = await postCart(productId);
            if (response) {
                const updatedCart = await getAllCart();
                setCart(updatedCart.cart);
            }
        }
        catch (e) {
            console.error(e);
        }
    }
    return (
        <div className="grid grid-cols-3 gap-4">
            {products?.map((product) => (
                <Card 
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    key={product.id}
                    handleAddCart={handleAddCart}
                />
            ))}
            <Budget products={products}></Budget>
        </div>
    )
}