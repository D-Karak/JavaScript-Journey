// finds the second largest number in an array.
const arr=[10,45,25,55,20,46];
function secondHighest(array){
    const newarr= array.sort(function(a,b){return b-a})
    return newarr[1];
}
console.log(secondHighest(arr))