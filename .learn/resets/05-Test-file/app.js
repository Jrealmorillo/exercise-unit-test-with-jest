// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))

// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };




let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


function fromDollarToYen (number) {
    return number * (127.9 / 1.2)
};


function fromEuroToDollar(number) {
    return number * 1.2
};

function fromYenToPound (number) {
    return number * (0.8 / 127.9)
};

module.exports = { fromDollarToYen, fromYenToPound, fromEuroToDollar };
