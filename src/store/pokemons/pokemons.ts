import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from "@/pokemons";

/*
  {
    '1': { id: 1, name: 'XXXX' },
    '2': { id: 2, name: 'XXXX' }
  }
*/

interface PokemonsState {
  favorites: {[ key: string ]: SimplePokemon};
}

// const getInitialState= (): PokemonsState => {
  // if ( typeof localStorage === 'undefined' ) return {};

  /* const favorites = JSON.parse( localStorage.getItem( 'favorite-pokemons') ?? '{}' );

  return favorites; */
// }

const initialState: PokemonsState = {
  favorites: {},
  // ...getInitialState(),
/*   '1': { id: '1', name: 'Bulbasaur' },
  '2': { id: '2', name: 'Ivysaur' },
  '4': { id: '4', name: 'Charmander' },
  '8': { id: '8', name: 'Wartortle' }, */
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons( state, action: PayloadAction<{ [key: string]: SimplePokemon }> ) {
      state.favorites = action.payload;
    },
    toggleFavorite( state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;

      if ( !!state.favorites[id] ) {
        delete state.favorites[ id ];
        // return;
      } else {
        state.favorites[id] = pokemon;
      }

      //TODO: No se debe de hacer en Redux, solo es prueba.
      localStorage.setItem( 'favorite-pokemons', JSON.stringify( state.favorites ) );
    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
