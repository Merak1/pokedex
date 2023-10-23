import React, { useState, useEffect } from "react";
import Pokemon from "./pokemon";
import { useDispatch, useSelector } from "react-redux";
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonList from "./pokemonList";
import PokemonDetail from "./pokemonDetail";

const PokemonDisplay = ({ list }) => {
  const selectedPokemon = useSelector(
    (state) => state.pokeReducer.selectedPokemon
  );
  return (
    <>
      <div className="pokemon-display">
        {/* <HashRouter > */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PokemonList />}></Route>
            <Route
              path="/:id"
              // element={<PokemonDetail id={selectedPokemon.id} />}
              element={<PokemonDetail />}
            ></Route>
          </Routes>
        </BrowserRouter>
        {/* </HashRouter > */}
      </div>
    </>
  );
};

export default PokemonDisplay;
