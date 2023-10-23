import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokelist: [],
  next20Pokemons: [],
  previous20Pokemons: [],
  current20Pokemons: [],
  selectedPokemon: null,
};

export const pokeSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    getAllPokemons: (state) => {
      state.pokelist;
    },
    addAllPokemons: (state, action) => {
      state.pokelist = action.payload;
    },
    //
    getNext20Pokemons: (state, action) => {
      state.next20Pokemons = action.payload;
    },
    getPrevious20Pokemons: (state, action) => {
      state.previous20Pokemons = action.payload;
    },
    getCurrent20Pokemons: (state, action) => {
      // console.log("current20PokemonApiURl 🟡", action.payload);
      state.current20Pokemons = action.payload;
    },
    getSelectedPokemon: (state, action) => {
      // console.log(" getSelectedPokemon🟡", action.payload);
      state.selectedPokemon = action.payload;
    },
  },
});

export const {
  getAllPokemons,
  addAllPokemons,
  getNext20Pokemons,
  getPrevious20Pokemons,
  getSelectedPokemon,
  getCurrent20Pokemons,
} = pokeSlice.actions;
export default pokeSlice.reducer;
