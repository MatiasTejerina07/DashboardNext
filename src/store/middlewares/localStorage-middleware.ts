import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";

export const localStorageMiddleware = (state:MiddlewareAPI)=>{
    return (next:any)=>(action:any)=>{
        next(action)
        /* console.log({state:state.getState}) */
        if(action.type === 'pokemons/toggleFavorite'){
            
        }
    }

}