import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import PokePreview from "./pokePreview";
import PokemonDisplay from "./pokemonDisplay";
import { useDispatch } from "react-redux";
import urlCall from "./pokeSlice";
import {
  addAllPokemons,
  getNext20Pokemons,
  getPrevious20Pokemons,
  getCurrent20Pokemons,
} from "./pokeSlice";

function App() {
  const dispatch = useDispatch();
  const [count, setCount] = useState(0);
  const [offSet, setOffset] = useState(0);
  const limit = 20;

  useEffect(() => {
    fetchPokemonList(urlCall, offSet, limit);
  }, []);

  useEffect(() => {
    if (offSet === 140) {
      fetchPokemonList(urlCall, offSet, 11);
    } else {
      fetchPokemonList(urlCall, offSet, limit);
    }
  }, [offSet, limit]);

  const fetchPokemonList = (url, offSet, limit) => {
    const completedUrl = `${url}${offSet}&limit=${limit}`;
    axios
      .get(completedUrl)
      .then((res) => {
        dispatch(getCurrent20Pokemons(url));
        dispatch(addAllPokemons(res.data.results));
        dispatch(getNext20Pokemons(res.data.next));
        dispatch(getPrevious20Pokemons(res.data.previous));
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
        <div className="pokedex">
          <div className="pokedata">
            <div className="poke-preview">
              <PokePreview />
            </div>
            <PokemonDisplay />
          </div>

          <div className="controll">
            <button
              className={` ${
                count <= 0 ? "controll-inactive" : "controll-active"
              }`}
              disabled={count <= 0}
              onClick={getPreviousPokemonList}
            >
              previous
            </button>
            <button
              className={` ${
                count < 7 ? "controll-active" : "controll-inactive"
              }`}
              disabled={count < 7}
              onClick={getNextPokemonList}
            >
              next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
