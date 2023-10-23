import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import axios from "axios";
// import Detail from "./detail";

import { getSelectedPokemon } from "./pokeSlice";

const PokemonDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const pokemonIdFromUrl = Number(location.pathname.match(/\d+/g).join(""));

  const [currentPokemon, setCurrentPokemon] = useState(null);
  const [pokemonTypes, setPokemonTypes] = useState([]);

  const selectedPokemon = useSelector(
    (state) => state.pokeReducer.selectedPokemon
  );
  const fetchPokemonList = (pokemonId) => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`).then((res) => {
      dispatch(getSelectedPokemon(res.data));
      // console.log("res.data 💜", res.data);
    });
    // .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (selectedPokemon === null) {
      if (pokemonIdFromUrl <= 151) {
        setCurrentPokemon(fetchPokemonList(pokemonIdFromUrl));
      } else {
        setCurrentPokemon(fetchPokemonList(151));
      }
    } else {
      setCurrentPokemon(selectedPokemon);
    }
  }, [currentPokemon, selectedPokemon]);
  // useEffect(() => {
  //   setPokemonTypes(currentPokemon.types);
  //   // if (currentPokemon == undefined || currentPokemon == null) {
  //   // }
  // }, [currentPokemon]);
  // const getPokemonTypes = (currentPokemon) => {
  //   let arrayOfTypes = [];
  //   currentPokemon.types.forEach((type) => {
  //     arrayOfTypes.push(type.type.name);
  //   });
  //   setPokemonTypes(arrayOfTypes);
  // };

  if (currentPokemon == undefined || currentPokemon == null) {
    <>
      <p>no currentPokemon</p>
    </>;
  } else {
    // console.log("currentPokemon.types", pokemonTypes);

    return (
      <div className={`pokemon-detail `}>
        <div className="detail">
          <div className="name">
            <h1>{currentPokemon.name}</h1>
          </div>
          <div className="id">
            <p>Id : {currentPokemon.id}</p>
          </div>
          <div className="physical-attributes">
            <p>Height: {currentPokemon.height * 0.1} m </p>
            <p>Weight: {currentPokemon.weight * 0.1} kg</p>
          </div>
          <div className="types">
            <p>Types</p>
            {currentPokemon.types.map((type, index) => (
              // console.log(type.type.name)
              // console.log("index , ", index)
              <div key={type + index} className="type">
                <p>{type.type.name}</p>
              </div>
            ))}
          </div>
          <Link className="return" to="/">
            Return
          </Link>
        </div>
      </div>
    );
    // <Detail pokemon={currentPokemon} />;
  }

  // return (
  //   <>
  //     <Detail pokemon={currentPokemon} />
  //   </>
  // );
};

export default PokemonDetail;
