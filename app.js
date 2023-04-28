
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    
    // retornamos el valor
    return valueInDollar;
}


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromDollarToYen = function(valueInDollar){
    
    // convertimos el valor a yenes
    let valueInYen = valueInDollar * (127.9 / 1.2);
    
    // retornamos el valor
    return valueInYen;
}



// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromYenToPound = function(valueInYen){
    
    // convertimos el valor a yenes
    let valueInPound = valueInYen * (0.8 / 127.9);
    
    // retornamos el valor
    return valueInPound;
}


module.exports = { fromDollarToYen, fromYenToPound, fromEuroToDollar };
