import React, { useState, useEffect } from "react";
import pokedex from "./assets/pokedex.jpg";
import { getSelectedPokemon } from "./pokeSlice";
import { useDispatch, useSelector } from "react-redux";

const PokePreview = ({ pokemon }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    pokemon != null ? setImage(pokemon.sprites.front_default) : null;
  }, [pokemon, image]);

  return (
    <>
      {pokemon !== undefined ? (
        <img src={image} alt="" />
      ) : (
        <img src={pokedex} alt="" />
      )}
    </>
  );
};

export default PokePreview;
