'use client'

import { useAppSelector } from "@/store"
import { SimpleWidget } from "./SimpleWidget"
import { IoCartOutline } from "react-icons/io5";

export const WidgetsGrid = () => {

    const counter = useAppSelector(store => store.counter.count)

    return (
        <div className="flex flex-wrap p-2">
            <SimpleWidget
                title="Contador"
                label={counter.toString()}
                icon={<IoCartOutline size={70} className='text-blue-400' />}
                subTitle='Productos agregados'
            />
        </div>
    )
}
