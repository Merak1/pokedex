import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import getColorsFromPokemonType from "./stylers/getColorsFromTypes";
import pokemonColors from "./stylers/pokemonColors";

import axios from "axios";
// import Detail from "./detail";

import { getSelectedPokemon } from "./pokeSlice";

const PokemonDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pokemonIdFromUrl = Number(location.pathname.match(/\d+/g).join(""));

  const [currentPokemon, setCurrentPokemon] = useState(null);

  const selectedPokemon = useSelector(
    (state) => state.pokeReducer.selectedPokemon
  );
  const fetchSinglePokemon = (pokemonId) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then((res) => {
      dispatch(getSelectedPokemon(res.data));
    });
  };

  useEffect(() => {
    if (selectedPokemon === null) {
      if (pokemonIdFromUrl <= 151) {
        setCurrentPokemon(fetchSinglePokemon(pokemonIdFromUrl));
      } else {
        setCurrentPokemon(fetchSinglePokemon(151));
      }
    } else {
      setCurrentPokemon(selectedPokemon);
    }
  }, [currentPokemon, selectedPokemon]);

  if (currentPokemon == undefined || currentPokemon == null) {
    <>
      <p>no currentPokemon</p>
    </>;
  } else {
    return (
      <div className={`pokemon-detail `}>
        <div className="detail">
          <div className="name">
            <h1>{currentPokemon.name}</h1> <p>Id : {currentPokemon.id}</p>
          </div>
          <div className="physical-attributes">
            <p>Height: {currentPokemon.height * 0.1} m </p>
            <p>Weight: {currentPokemon.weight * 0.1} kg</p>
          </div>
          <div className="types">
            <p>Types</p>
            <div className="type">
              {currentPokemon.types.map((type, index) => (
                <p>{type.type.name}</p>
              ))}
            </div>
          </div>
          <div className="abilities">
            <p>Abilities</p>
            <div className="ability">
              {currentPokemon.abilities.map((ability, index) => (
                <p>{ability.ability.name}</p>
              ))}
            </div>
          </div>
          <div className="return">
            <Link className="return-button" to="/">
              Return
            </Link>
          </div>
        </div>
      </div>
    );
  }
};

export default PokemonDetail;
