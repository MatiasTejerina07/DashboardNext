import { simplePokemon } from "../interfaces"
import { PokemonCard } from "./PokemonCard"

interface Props {
    pokemons: simplePokemon[]
}


export default function PokemonGrid({ pokemons }: Props) {
    return (
        <div className="flex flex-wrap gap-2 m-2 justify-between h-full">
            {
                pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))
            }
        </div>
    )
}
