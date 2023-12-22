import { simplePokemon } from '@/pokemons/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsFavorites{
    [key:string]:simplePokemon
}


const initialState:PokemonsFavorites = {
    '1':{id:'1', name:'bulbasaur'}
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