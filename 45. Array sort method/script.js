//Sort an array of numbers in ascending order.

//Sort an array of strings alphabetically
var char=["B", "A", "C", "E", "D"];
char.sort();
console.log(char);//output : ["A", "B", "c", "D", "E"]


//Sort an array of numbers in acsending order
var numbers=[3,1,4,2,5];
numbers.sort(function(a,b){return a-b});
console.log(numbers); //output: [1, 2, 3, 4, 5]

//sort() method alter the original array.