//Implement a function that checks if two arrays are equal 
const number1=[1,2,3,4]
const number2=[1,2,3,4]
// function checkEqual(a,b){
// if(a.join()==b.join()){
//     return console.log("true");
// }else{return console.log("false");}
// }
// checkEqual(arr1,arr2)
function checkEqual(arr1,arr2){
if(arr1.length!=arr2.length){
    return false;
}
for(i=0;i<arr1.length;i++){
    if(arr1[i]!=arr2[i]){
        return false;
    }
}
return true;
}
console.log(checkEqual(number1,number2));