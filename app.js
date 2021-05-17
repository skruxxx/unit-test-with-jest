const sum = (a,b) => {
    return a+b
}

//console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


module.exports = { sum };

const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = (dollar) => {
    let dollartoEuro = dollar/oneEuroIs['USD'];
    return dollartoEuro*oneEuroIs["JPY"];
}

console.log(fromDollarToYen(1));

const fromYenToPound = (yen) => {
    let yentoEuro = yen/oneEuroIs['JPY'];
    return yentoEuro*oneEuroIs["GBP"];
}

console.log(fromYenToPound(1));


module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};
