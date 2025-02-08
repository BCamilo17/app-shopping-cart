import { ProductResponse } from "@/app/types/intex";
import { NextResponse } from "next/server";
import products from "@/public/Json/products.json"

export async function GET(){
    try{
        const response: ProductResponse = {
            products,
            message: "Productos obtenidos correctamente",
          };
          return NextResponse.json(response);
    }
    catch(e){
        console.error(e);
    }
}