import { simplePokemon } from '@/pokemons/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsFavorites{
    [key:string]:simplePokemon
}

const getInitialState=():PokemonsFavorites=>{
    const favorites = JSON.parse(localStorage.getItem('pokemon-favorites') ?? '{}')
    return favorites
}

const initialState:PokemonsFavorites = {
    ...getInitialState()
}


const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state,action:PayloadAction<simplePokemon>){
        const pokemon = action.payload
        const{id} = pokemon
        if(!!state[id]){
          delete state[id]
        return;
      }
      state[id]=pokemon;
    }
  
}
});

export const {toggleFavorite} = pokemonsSlice.actions

export default pokemonsSlice.reducer