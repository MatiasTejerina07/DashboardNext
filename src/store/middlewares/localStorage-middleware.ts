import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware = (state:MiddlewareAPI)=>{
    return (next:any)=>(action:any)=>{
        next(action)
        console.log({state:state.getState})
        if(action.type === 'pokemons/toggleFavorite'){
            const {favorite} = state.getState() as RootState 
            localStorage.setItem('pokemon-favorites',JSON.stringify(favorite))
            return;
        }
    }

}