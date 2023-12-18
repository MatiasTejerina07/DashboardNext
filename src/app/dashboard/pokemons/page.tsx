import { PokemonsResponse, simplePokemon } from '@/pokemons/interfaces'

import PokemonGrid from "@/pokemons/components/PokemonGrid";


const getPokemons = async (limit = 20, offset = 0): Promise<simplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => res.json())
    const pokemons = data.results.map(pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,

    }))



    return pokemons;
}

export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);


    return (
        <div className="flex flex-col p-2">
            <span className="-tracking-widest text-[19px]">Listado de Pokemons <small className="text-[15px] ">estaticos</small></span>
            <PokemonGrid pokemons={pokemons} />
        </div>
    )
}
