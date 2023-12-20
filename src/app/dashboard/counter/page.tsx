import { Counter } from "./components/Counter";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Mat',
    description: 'hola mundo'
}



export default function CounterPage() {
    return (
        <div className=" flex flex-col gap-2 items-center justify-center w-full h-full">
            <span>Productos en el carrito</span>
            <Counter value={20} />
        </div >
    );
}