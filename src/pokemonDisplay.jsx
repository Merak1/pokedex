import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonList from "./pokemonList";
import PokemonDetail from "./pokemonDetail";

const PokemonDisplay = () => {
  return (
    <>
      <div className="pokemon-display">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PokemonList />}></Route>
            <Route path="/:id" element={<PokemonDetail />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default PokemonDisplay;
