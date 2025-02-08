'use client'
export interface CardProps {
    id: number;
    name: string;
    price: number;
    handleAddCart:any
}


export const Card = ({ id, name, price,handleAddCart }: CardProps) => {
    return (
        <>
            <div key={id} className="bg-gray-800 p-4 w-full h-fit rounded-xl flex flex-col">
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