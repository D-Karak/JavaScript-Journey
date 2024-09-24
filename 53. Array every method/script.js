//Check if all elements in an array pass a certain condition using every()

const arr=[10,35,15,65,44];

arr.every(myfunction);

function myfunction(value,index,array){
    return value>15
}
console.log(arr.every(myfunction))// output : false

//every method checks that is the condition is true for all array elements or not. 