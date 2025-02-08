'use client';
import React from "react"
import { deleteCart, getAllCart } from "@/app/services";
import { Product } from "@/app/types/intex";
import { useEffect, useState } from "react";

export interface CartProps {
    setShowModal:React.Dispatch<React.SetStateAction<boolean>>
}
export const Cart = ({setShowModal}:CartProps) => {
        const [cart, setCart] = useState<Product[] | null>(null)
    
        useEffect(() => {
            const fetchCart = async () => {
                    try {
                        const data = await getAllCart();
                        setCart(data.cart);
                    } catch (e) {
                        console.error(e);
                    }
            }
            fetchCart();
        }, []);
const handleRemoveCart = async (productId: number) => {
        try {
            const response = await deleteCart(productId);
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
        <div>
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded-xl w-[400px] h-fit max-h-[80vh]  flex gap-y-2 flex-col overflow-y-auto">
                        <h1 className="text-2xl border-b-2 border-gray-600 pb-1 text-gray-800">
                            Carrito
                        </h1>
                        <div className="flex flex-col gap-y-2">
                            {cart?.length === 0 && <span className="text-gray-800">No hay productos en el carrito</span>}
                            {cart?.map((product, key) => (
                                <div key={key} className="flex justify-around text-gray-800 items-center">
                                    <span>{product.name}</span>
                                    <span>{product.price}$</span>
                                    <button className="" onClick={()=>{handleRemoveCart(product.id)}}> borrar</button>
                                </div>
                            ))}
                        </div>
                        <button className="bg-gray-600 hover:bg-gray-500 p-2 rounded-lg" onClick={() => { setShowModal(false) }}>Cerrar</button>
                    </div>
                </div>
        </div>
    )
}