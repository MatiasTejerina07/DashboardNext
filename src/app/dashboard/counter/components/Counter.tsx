'use client';


import { useState } from "react";
interface Props {
    value?: number
}


export const Counter = ({ value = 0 }: Props) => {
    const [counter, setCounter] = useState(value)
    return (

        <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-8xl">{counter}</span>
            <div className="flex ">
                <button onClick={() => setCounter(counter + 1)} name="suma" className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    +1
                </button>
                <button onClick={() => setCounter(counter - 1)} name="resta" className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    -1
                </button>
            </div >
        </div>
    )
}
