// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here
var array = [
    { name: 'orange', color: 'yellow', pricePerKg: 900 },
    { name: 'apple', color: 'magenta', pricePerKg: 20 },
    { name: 'blackberry', color: 'white', pricePerKg: 90 },
    { name: 'dragonfruit', color: 'aqua', pricePerKg: 420 },
]
var myMap = new Map();

for (var i = 0; i < array.length; i++) {
    myMap.set(array[i].name, { color: fruits[i].color, pricePerKg: fruits[i].pricePerKg });
}

console.log(myMap);
console.log(myMap.get("orange"));