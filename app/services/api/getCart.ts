import { CartResponse, ProductResponse } from "@/app/types/intex";
const API_BASE_URL = "http://localhost:3000/api";

export const getAllCart = async ():Promise<CartResponse> => {
    try {
        const response = await fetch(`${API_BASE_URL}/cart`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if(!response.ok){
            throw new Error(`Error al obtener los productos: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (e) {
        console.error("Error en getProducts:", e);
        throw e;
    }
}
export const postCart = async (id: number):Promise<CartResponse> => 
{
    try {
        const response = await fetch(`${API_BASE_URL}/cart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                productId: id
              }),
        });
        if(!response.ok){
            throw new Error(`Error al añadir el producto: ${response.status}`);
        }
        const result = await response.json();
        return result;
    } catch (e) {
        console.error("Error en postCart:", e);
        throw e;
    }
}
export const deleteCart = async (id: number):Promise<CartResponse> => 
    {
        try {
            const response = await fetch(`${API_BASE_URL}/cart`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    productId: id
                  }),
            });
            if(!response.ok){
                throw new Error(`Error al añadir el producto: ${response.status}`);
            }
            const result = await response.json();
            return result;
        } catch (e) {
            console.error("Error en postCart:", e);
            throw e;
        }
    }