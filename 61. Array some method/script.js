//Check if at least one element in an array is greater than a given number using some()

const arr=[10,20,5,35,22]
let IsTrue=arr.some(myfunction)
function myfunction(value){
    return value>20
}

console.log (IsTrue)