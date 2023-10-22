import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Pokemon from "./pokemon";
import PokePreview from "./pokePreview";
import PokemonDisplay from "./pokemonDisplay";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";

import {
  addAllPokemons,
  getNext20Pokemons,
  getPrevious20Pokemons,
  getSelectedPokemon,
  getAllPokemons,
  getCurrent20Pokemons,
} from "./pokeSlice";

function App() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [offSet, setOffset] = useState(0);
  const [limit, setLimit] = useState(20);

  const [apiCall, setApiCall] = useState(
    "https://pokeapi.co/api/v2/pokemon/?offset="
  );

  useEffect(() => {
    fetchPokemonList(apiCall, offSet, limit);
  }, []);

  useEffect(() => {
    if (offSet === 140) {
      fetchPokemonList(apiCall, offSet, 11);
    } else {
      fetchPokemonList(apiCall, offSet, limit);
    }
  }, [offSet, limit]);

  const selectedPokemon = useSelector(
    (state) => state.pokeReducer.selectedPokemon[0]
  );

  const fetchPokemonList = (url, offSet, limit) => {
    const completedUrl = `${url}${offSet}&limit=${limit}`;
    // console.log("🍊🍊🍊🍊🍊🍊🍊🍊");
    // console.log("url ", url);
    // console.log("offSet ", offSet);
    // console.log("limit ", limit);
    console.log("🌲🌲🌲🌲🌲");
    console.log("completedUrl ", completedUrl);
    // console.log("🍊🍊🍊🍊🍊🍊🍊🍊");
    axios

      .get(completedUrl)
      .then((res) => {
        dispatch(getCurrent20Pokemons(url));
        dispatch(addAllPokemons(res.data.results));
        dispatch(getNext20Pokemons(res.data.next));
        dispatch(getPrevious20Pokemons(res.data.previous));
        console.log("res.data 💜", res.data);
      })
      .catch((error) => console.log(error));
  };
  const getNextPokemonList = () => {
    setCount((prevCount) => prevCount + 1);
    setOffset((prevOffset) => prevOffset + 20);
  };
  const getPreviousPokemonList = () => {
    setOffset((prevOffset) => prevOffset - 20);
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <>
      <div className="container">
        <div className="pokedata">
          <div className="poke-preview">
            <p>count / {count}</p>
            <p>offset / {offSet}</p>
            <PokePreview pokemon={selectedPokemon} />
          </div>
          <PokemonDisplay />
        </div>

        <div className="controll">
          <button
            disabled={count <= 0 ? true : false}
            onClick={getPreviousPokemonList}
          >
            previous
          </button>
          <button
            disabled={count < 7 ? false : true}
            onClick={getNextPokemonList}
          >
            next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
