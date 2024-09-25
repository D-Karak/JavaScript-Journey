//Find all even numbers in an array using filter()

const arr=[0,1,2,3,4,5,6,7,8,9]
const evenNumber=arr.filter(myfunction);
function myfunction(value,index,array){
    return value%2==0
}
console.log(evenNumber);