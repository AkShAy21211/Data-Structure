function fahrenHeatToCelcius(value){
    return (value - 32) * 5/9;

}

console.log(fahrenHeatToCelcius(32)); // Output: 0


function celciusToFahren(value){
    return (value * 9/5) + 32;

}

console.log(celciusToFahren(0)); // Output: 32