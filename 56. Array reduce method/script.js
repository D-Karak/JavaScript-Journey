// Sum all the values in an array using reduce().
const arr=[1,5,40,20];
let sum=arr.reduce(myfunction);
function myfunction(total,value,index,array){
    return total+value;
}
console.log(sum);
