import { NextResponse } from "next/server";
import products from "@/public/Json/products.json"

let cart: { id: number, name: string, price: number }[] = [];

export async function GET() {
    try {
        const response = {
            cart,
            message: "Carrito obtenido correctamente",
        };
        return NextResponse.json(response);
    }
    catch (e) {
        console.error(e);
    }
}
export async function POST(req: Request) {
    try {
        const { productId } = await req.json();
        const product = products.find((product) => product.id === productId);

        if (!product) {
            return NextResponse.json({ message: "Producto no encontrado" }, { status: 404 });
        }
        cart.push(product);
        return NextResponse.json({
            message: "Producto agregado al carrito",
            cart
        });
    }
    catch (e) {
        console.error(e);
    }
}
export async function DELETE(req: Request) {
    try {
        const { productId } = await req.json();
       const productfilter = cart.filter((product) => product.id !== productId);
        if (productfilter.length === cart.length) {
            return NextResponse.json({ message: "Producto no encontrado" }, { status: 404 });
        }
        cart = productfilter;
        return NextResponse.json({
            message: "Producto eliminado del carrito",
            cart
        });
    }
    catch (e) {
        console.error(e);
    }
}