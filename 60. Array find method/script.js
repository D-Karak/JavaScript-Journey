//Find the first even number in an array using find()
const arr=[5,3,4,7,8,10]
let firstEven=arr.find(myfunction);
function myfunction(value){
    return value%2==0
}
console.log(firstEven)