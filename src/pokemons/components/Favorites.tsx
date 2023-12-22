'use client'

import React from 'react'
import { useAppSelector } from '@/store'
import PokemonGrid from './PokemonGrid'

export default function Favorites() {

    const favoritePokemons = useAppSelector(store => Object.values(store.favorite))



    return (
        <PokemonGrid pokemons={favoritePokemons} />
    )
}
