//Multiply all elements in an array by 2 using map()
const arr=[2,4,6,8,10];
const newarr=arr.map(myfunction);
function myfunction(value,index,array){
    return value*2
}
console.log(newarr); //

