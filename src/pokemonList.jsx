import { useState, useEffect } from "react";
import axios from "axios";
import Pokemon from "./pokemon";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedPokemon } from "./pokeSlice";
import { useNavigate } from "react-router-dom";

const PokemonList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const pokemonList = useSelector((state) => state.pokeReducer.pokelist);
  const selectedPokemon = useSelector(
    (state) => state.pokeReducer.selectedPokemon
  );

  const pokeClick = (e, pokemonInput) => {
    if (e.detail === 1) {
      console.log("1 click");
      const { name, url } = pokemonInput;
      fetchSelectedPokemon(url);
    } else if (e.detail === 2) {
      console.log("double click");
      navigate(`/${selectedPokemon.id}`);
    }
  };

  const fetchSelectedPokemon = (url) => {
    axios
      .get(url)
      .then((res) => {
        dispatch(getSelectedPokemon(res.data));
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="pokemon-list">
        {pokemonList !== undefined ? (
          pokemonList.map((pokemon) => (
            <div
              id={pokemon.name}
              className="pokemon-card"
              onClick={(e) => pokeClick(e, pokemon)}
            >
              <Pokemon name={pokemon.name} url={pokemon.url} />
            </div>
          ))
        ) : (
          <p>there are no pokemon </p>
        )}
      </div>
    </>
  );
};

export default PokemonList;
