import Image from 'next/image'
import React from 'react'
import { IoBrowsers, IoCalculator, IoFootball, IoHeadsetOutline, IoHeartCircleOutline, IoLogoReact } from 'react-icons/io5'
import { SidebarMenuItem } from '@/components'


const menuItems = [
    {
        path: '/dashboard/main',
        icon: <IoBrowsers />,
        title: 'Dashboard',
        subTitle: 'Visualización'
    },
    {
        path: '/dashboard/counter',
        icon: <IoCalculator />,
        title: 'Counter',
        subTitle: 'Contador Client Side'
    },
    {
        path: '/dashboard/pokemons',
        icon: <IoFootball />,
        title: 'Pokemons',
        subTitle: 'Generación estatica'
    },
    {
        path: '/dashboard/favorites',
        icon: <IoHeartCircleOutline />,
        title: 'Favoritos',
        subTitle: 'Global State'
    },
]



export const Sidebar = () => {
    return (
        <div id="menu"
            style={{ width: '400px' }}
            className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 ">
            <div id="logo" className="my-4 px-6">
                <h1 className="text-lg md:text-2xl font-bold flex items-center  space-x-2 text-white">
                    <IoLogoReact />
                    <span>Dash</span>
                    <span className="text-blue-500">8</span>.</h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span>
                        <Image width={40} height={40} className="rounded-full w-8 h-8" src="https://www.karvi.com.ar/blog/wp-content/uploads/2020/10/208II3-1024x683.jpg" alt="" />
                    </span>
                    <span className="text-sm md:text-base font-bold">
                        Matias Tejerina
                    </span>
                </a>
            </div>

            <div id="nav" className="w-full px-6">
                {menuItems.map((item, index) => (
                    <SidebarMenuItem key={index} {...item} />
                ))}

            </div>
        </div>
    )
}
