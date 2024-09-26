//Create a function that finds the product of all the numbers in an array.
const arr=[1,2,3,4];
let product=arr.reduce(myfunction)
function myfunction(multiply,value){
    return multiply*value
}
console.log(product)