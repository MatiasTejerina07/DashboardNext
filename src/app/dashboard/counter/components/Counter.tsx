'use client';


import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, substractOne, resetCount, isCounterReady } from "@/store/counter/counterSlice";

interface Props {
    value?: number
}

export interface CounterResponse {
    method: string;
    count: number;
}


const getApiCounter = async (): Promise<CounterResponse> => {
    const data = await fetch('/api/counter')
        .then(res => res.json())
    return data
}


export const Counter = ({ value = 0 }: Props) => {
    const count = useAppSelector(store => store.counter.count);
    const dispacth = useAppDispatch()
    /* 
        useEffect(() => {
            dispacth(isCounterReady(value))
        }, [dispacth, value]) */

    useEffect(() => {
        getApiCounter()
            .then(({ count }) => dispacth(isCounterReady(count)))


    }, [dispacth])



    return (

        <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-8xl">{count}</span>
            <div className="flex ">
                <button onClick={() => dispacth(addOne())} name="suma" className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    +1
                </button>
                <button onClick={() => dispacth(substractOne())} name="resta" className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                    -1
                </button>
            </div >
        </div>
    )
}
