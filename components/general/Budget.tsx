'use client';
import { Product } from "@/app/types/intex";
import { useState } from "react";
import { bestCombination } from "@/utils/bestPrice/bestCombination";

export interface BudgetProps {
    products: Product[];
}
export const Budget = ({ products }: any) => {
    const [budget, setBudget] = useState(150);
    const [findBestCombination, setFindBestCombination] = useState<Product[]>([]);
    const handleBudgetValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setBudget(value === "" ? 0 : parseFloat(value));  // Si está vacío, usa 0
    };

    const handleBudgetChange = () => {
        const result = bestCombination(products, budget);
        setFindBestCombination(result);
    };
    return (
        <div className="bg-slate-800 w-[80%] p-4 flex flex-col gap-y-4">
            <h1>Los mejores productos a tu precio ideal</h1>
            <label className="flex flex-col gap-y-2">
                Digita tu presupuesto:
                <input type="number" className="text-gray-800" value={budget} onChange={handleBudgetValueChange} />
            </label>
            <button className="bg-gray-600 hover:bg-gray-500 p-2 rounded-lg" onClick={handleBudgetChange}>Buscar</button>
            <h2>Productos encontrados:</h2>
            <ul>
                {
                    findBestCombination.map((product, key) => (
                        <li key={key}>
                            {product.name} - ${product.price}
                        </li>))
                }
            </ul>

        </div>
    )
}