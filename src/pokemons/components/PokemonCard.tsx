'use client'

import Image from "next/image";
import { simplePokemon } from "../interfaces";
import Link from "next/link";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import { useAppSelector, useAppDispatch } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemons";



interface Props {
    pokemon: simplePokemon;

}

export const PokemonCard = ({ pokemon }: Props) => {
    const { id, name } = pokemon;
    const dispatch = useAppDispatch()

    const isFavorite = useAppSelector(store => !!store.favorite[id])
    const onToggle = () => {
        dispatch(toggleFavorite(pokemon))
    }


    return (

        <section className="bg-gray-200 font-sans h-48 w-56 mt-32 flex flex-row justify-center items-center">
            <div className="card w-60 h-60  bg-white  flex  flex-col shadow-xl hover:scale-110 hover:transition-all ease-in-out duration-500 rounded-lg">
                <Image
                    key={pokemon.id}
                    className="mx-auto rounded-full -mt-20 ring-4"
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                    alt=""
                    width={90}
                    height={90}
                    priority={false}
                />
                <div className="text-center mt-2 h-20 text-3xl font-medium">{name}</div>
                <div className="px-6 text-center mt-2 font-light text-sm h-20 flex items-center justify-center gap-4">


                    <button onClick={onToggle} className="text-red-500">
                        {
                            isFavorite
                                ? (<IoHeart />)
                                : (<IoHeartOutline />)
                        }
                    </button>


                </div>

                <div className="flex p-4 justify-center h-20 flex-col items-center">
                    <div className="w-1/2 text-center">
                        <span className="font-bold text-center"> ID: {id}</span>
                    </div>
                    <div className="w-1/2 text-center">
                        <Link href={`pokemons/${name}`}>
                            <span className="font-bold text-center">Ver más</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
