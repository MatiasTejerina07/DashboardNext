'use client'

import React from 'react'
import { useAppSelector } from '@/store'
import PokemonGrid from './PokemonGrid'

export default function Favorites() {

    const favoritePokemons = useAppSelector(store => Object.values(store.favorite))



    return (
        <>
            {favoritePokemons.length === 0 ?
                (<p className='pt-4 font-mono text-blue-500'>NO HAY NADA PARA MOSTRAR
                </p>)
                :
                (<PokemonGrid pokemons={favoritePokemons} />)
            }
        </>
    )
}
