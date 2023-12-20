import { simplePokemon } from '@/pokemons/interfaces';
import { createSlice } from '@reduxjs/toolkit'

interface PokemonsFavorites{
    [key:string]:simplePokemon
}


const initialState = {
    '1':{id:1, name:'bulbasaur'}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
  
}
});

export const {} = pokemonsSlice.actions

export default pokemonsSlice.reducer