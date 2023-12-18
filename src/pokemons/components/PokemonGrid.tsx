import { simplePokemon } from "../interfaces"
import { PokemonCard } from "./PokemonCard"

interface Props {
    pokemons: simplePokemon[]
}


export default function PokemonGrid({ pokemons }: Props) {
    return (
        <div className="flex flex-wrap">
            {
                pokemons.map(pokemon => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))
            }
        </div>
    )
}
