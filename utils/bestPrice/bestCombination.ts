import { Product } from "@/app/types/intex";

export const bestCombination = (products: Product[], budget:number ) => {
    const orderedProducts = [...products].sort((a, b) => a.price - b.price);
    let total = 0;
    const selectedProducts: Product[] = [];
    for(const product of orderedProducts){
        if(total + product.price <= budget){
            selectedProducts.push(product);
            total += product.price;
        }
    }
    return selectedProducts;
}