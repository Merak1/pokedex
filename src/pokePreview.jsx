import React, { useState, useEffect } from "react";
import pokedex from "./assets/pokedex.jpg";
import { useSelector } from "react-redux";
import pokemonColors from "./helpers/pokemonColors";
import gradient from "./helpers/gradient";

const PokePreview = () => {
  const [pokemonGradientValues, setPokemonGradientValues] = useState([]);
  const selectedPokemon = useSelector(
    (state) => state.pokeReducer.selectedPokemon
  );
  useEffect(() => {
    if (selectedPokemon) {
      setPokemonGradientValues(getColorsFromPokemonType(pokemonColors));
    }
  }, [selectedPokemon]);
  const getColorsFromPokemonType = (listOfColors) => {
    let gradientValues = [];
    selectedPokemon.types.forEach((element) => {
      if (element.type.name in listOfColors) {
        gradientValues.push(listOfColors[element.type.name]);
      }
    });
    console.log("gradientValues", gradientValues);
    return gradientValues;
  };

  return (
    <>
      {selectedPokemon !== null ? (
        <div
          className="preview-background "
          style={{ background: gradient(pokemonGradientValues) }}
        >
          {/* <p>id: {selectedPokemon.id}</p> */}
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
