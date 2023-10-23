
const createGradient =(values) => { //array of gradient colors
    let gradientString = ' '

    if(values.length <= 1 ){
        console.log("un solo dato")
        // console.log("dato1",values[0])
        gradientString = gradientString + `${values[0]}`
    }else { 
        console.log("2 dato")
        // console.log("dato1",values[0])
        // console.log("dato2",values[1])
        
        gradientString = gradientString + `linear-gradient(90deg, ${values[0]} 0% , ${values[1]}   100% )`
        // gradientString = gradientString + `linear-gradient(to right, ${values[0]} 0% ,${values[0]} 50% ,${values[1]}   50%,  ${values[1]}   100% )`
    }
    
    console.log("🔴", gradientString)
    
    return gradientString
}

export  default createGradient