import { ProductResponse } from "@/app/types/intex";
const API_BASE_URL = "http://localhost:3000/api";

export const getProducts = async ():Promise<ProductResponse> => {
    try {
        const response = await fetch(`${API_BASE_URL}/products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
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