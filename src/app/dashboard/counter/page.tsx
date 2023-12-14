import { Counter } from "./components/Counter";


export default function CounterPage() {
    return (
        <div className=" flex flex-col gap-2 items-center justify-center w-full h-full">
            <span>Productos en el carrito</span>
            <Counter />


        </div >
    );
}