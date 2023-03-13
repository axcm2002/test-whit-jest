
let oneEuroIs = {
    "JPY": 127.9,
    "USD": 1.2,
    "GBP": 0.8,
}

test("One euro should be 1.206 dollars", function(){
    
    const { fromEuroToDollar } = require('./app.js')
    
    
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test("24 dolares son 3029.6 yenes", function(){
    const { fromDollarToYen } = require('./app.js')

    expect(fromDollarToYen(24)).toBe(3069.6000000000004)
})

test("hola", function(){
    const { fromYenToPound } = require('./app.js')

    expect(fromYenToPound(2000)).toBe(1600)
})
