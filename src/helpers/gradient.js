
const createGradient =(values) => { //array of gradient colors
    let gradientString = ' '

    if(values.length <= 1 ){
        gradientString = gradientString + `${values[0]}`
    }else { 
        gradientString = gradientString + `linear-gradient(90deg, ${values[0]} 0% , ${values[1]}   100% )`
    }
    return gradientString
}

export  default createGradient