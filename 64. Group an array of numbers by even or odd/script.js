//Write a function to group an array of numbers by whether they are even or odd.
const arr=[1,2,3,4,5,6,7,8,9,10]
function even(array){
    return array.filter(function(value){
        return value%2==0
    })
}
function odd(array){
    return array.filter(function(value){
        return value%2!=0
    })
}
console.log(even(arr))//output:[ 2, 4, 6, 8, 10 ]
console.log(odd(arr))//output:[ 1, 3, 5, 7, 9 ]