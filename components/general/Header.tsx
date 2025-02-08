'use client'

import { useState } from "react";
import { Cart } from "../cart/Cart";


export const Header = () => {
        const [showModal, setShowModal] = useState(false);
    
    return(
        <header className="w-full bg-gray-950 px-2">
            <div className="container mx-auto flex justify-between items-center h-16">
                <div className="flex items-center">
                    <img src="https://hoytrabajas.com/assets/nav-logo-blue-f2650e778d541c594223326711bef5878de5ccab7142dbba9b507c1f7166f5ee.svg" alt="logo" className="h-10"/>
                    <h1 className="text-lg font-bold ml-2 text-[#00365f]">Ventas</h1>
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li className="text-sm"><button onClick={() => { setShowModal(true) }}>Carrito</button></li>
                    </ul>
                </nav>
            </div>
            {
                showModal && <Cart setShowModal={setShowModal}></Cart>
            }
        </header>
    )
}