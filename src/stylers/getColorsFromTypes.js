
const getColorsFromPokemonType =(listOfColors,selectedPokemon ) => { 
    let gradientValues = [];
    console.log('From helper')
    selectedPokemon.types.forEach((element) => {
      if (element.type.name in listOfColors) {
        gradientValues.push(listOfColors[element.type.name]);
      }
    });
    return gradientValues;
}

export  default getColorsFromPokemonType