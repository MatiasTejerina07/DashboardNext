'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import style from './sidebarMenuActive.module.css'

interface Props {
    path: string;
    icon: JSX.Element;
    title: string
    subTitle: string
}




export const SidebarMenuItem = ({ icon, path, subTitle, title }: Props) => {

    const pathName = usePathname();

    return (
        <Link href={path} className={pathName === path ? style['active-link'] : style['disable-link']}>
            <div>
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-white">{title}
                </span>
                <span className="text-sm text-white/50 hidden md:block">{subTitle}
                </span>
            </div>
        </Link>
    )
}
