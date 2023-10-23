import React, { useState, useEffect } from "react";
import pokedex from "./assets/pokedex.jpg";
import { useSelector } from "react-redux";
import pokemonColors from "./helpers/pokemonColors";
import gradient from "./helpers/gradient";
import getColorsFromPokemonType from "./helpers/getColorsFromTypes";
const PokePreview = () => {
  const [pokemonGradientValues, setPokemonGradientValues] = useState([]);
  const selectedPokemon = useSelector(
    (state) => state.pokeReducer.selectedPokemon
  );
  useEffect(() => {
    if (selectedPokemon) {
      setPokemonGradientValues(
        getColorsFromPokemonType(pokemonColors, selectedPokemon)
      );
    }
  }, [selectedPokemon]);
  return (
    <>
      {selectedPokemon !== null ? (
        <div
          className="preview-background "
          style={{ background: gradient(pokemonGradientValues) }}
        >
          <img src={selectedPokemon.sprites.front_default} alt="" />
        </div>
      ) : (
        <div
          className="preview-background-image"
          style={{
            backgroundImage: `url(${pokedex})`,
          }}
        ></div>
      )}
    </>
  );
};

export default PokePreview;
