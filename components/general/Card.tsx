'use client'
import { getAllCart, postCart } from "@/app/services";
import { CartResponse, Product } from "@/app/types/intex";
import { useEffect, useState } from "react";
export interface CardProps {
    id: number;
    name: string;
    price: number;
    handleAddCart:any
}


export const Card = ({ id, name, price,handleAddCart }: CardProps) => {
    const [showModal, setShowModal] = useState(false);
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
    return (
        <>
            <div key={id} className="bg-gray-800 p-4 w-[400px] h-fit rounded-xl flex gap-y-2 flex-col">
                <h1 className="text-2xl border-b-2 border-gray-600 pb-1">
                    {name}
                </h1>
                <span>
                    {price}$
                </span>
                <div className="flex gap-x-2">
                    <button className="bg-gray-600 hover:bg-gray-500 p-2 rounded-lg" onClick={()=>{handleAddCart(id)}}>Añadir a carrito</button>
                    {/* <button className="bg-gray-600 hover:bg-gray-500 p-2 rounded-lg" onClick={() => { setShowModal(true) }}>Car</button> */}
                </div>
            </div>
        </>

    )
}