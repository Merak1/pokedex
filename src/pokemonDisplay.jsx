import React, { useState, useEffect } from "react";
import Pokemon from "./pokemon";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonList from "./pokemonList";
import PokemonDetail from "./pokemonDetail";

const PokemonDisplay = ({ list }) => {
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
