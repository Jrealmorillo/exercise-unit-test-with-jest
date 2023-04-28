
test("One euro should be 1.2 dollars", function(){
    
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})



test("One dolar should be 106.58333333333334 yens", function(){
    
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(10)).toBe(1065.8333333333334); //1 Dólar son 106.58333333333334 Yenes, entonces 10 dolares deberian ser = (10 * 10658.333333333334)
})



test("One yen should be 0.006254886630179828 pounds", function(){
    
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(100)).toBe(0.6254886630179828); //1 Yen son 0.0063 Pounds, entonces 100 yenes deberian ser = (100 * 0.006254886630179828)
})

