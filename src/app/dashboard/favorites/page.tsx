import Favorites from "@/pokemons/components/Favorites";

export const metadata = {
    title: 'Favoritos',
    description: 'Algo'
}


export default async function PokemonsPage() {



    return (
        <div className="flex flex-col p-2">
            <span className="-tracking-widest text-[19px]">Pokemons Favoritos <small className="text-[15px] ">Global State</small></span>
            <Favorites />
        </div>
    )
}
