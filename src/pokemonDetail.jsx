import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

const PokemonDetail = () => {
  const [pokemonTypes, setPokemonTypes] = useState([]);
  const selectedPokemon = useSelector(
    (state) => state.pokeReducer.selectedPokemon[0]
  );
  useEffect(() => {
    console.log("selectedPokemon 💚", selectedPokemon);
    getPokemonTypes();
  }, [selectedPokemon]);
  useEffect(() => {
    getPokemonTypes();
  }, []);
  const {
    abilities,
    base_experience,
    forms,
    game_indices,
    height,
    weight,
    id,
    sprites,
    species,
    stats,
    types,
    weigh,
    moves,
    name,
  } = selectedPokemon;

  const getPokemonTypes = () => {
    let arrayOfTypes = [];
    types.forEach((type) => {
      arrayOfTypes.push(type.type.name);
    });
    console.log("arrayOfTypes 🤖", arrayOfTypes);
    // return arrayOfTypes;
    setPokemonTypes(arrayOfTypes);
  };
  return (
    <>
      <div className={`pokemon-detail `}>
        <div className="detail">
          <div className="physical-attributes">
            <p>Height: {height * 0.1} m </p>
            <p>Weight: {weight * 0.1} kg</p>
          </div>
          <div className="id">
            <p>Id : {id}</p>
          </div>
          <div className="type">
            <p>Types</p>
            {pokemonTypes.length > 0 ? (
              pokemonTypes.map((type) => (
                <div className="type">
                  <p>{type}</p>
                </div>
              ))
            ) : (
              <p>No types</p>
            )}
          </div>
        </div>
        <Link className="return" to="/">
          Return
        </Link>
      </div>
    </>
  );
};

export default PokemonDetail;
